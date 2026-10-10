/**
 * Google Search Console 성과 조회 — 노출·클릭·CTR·평균순위, 검색어·페이지·기기·국가, 사이트맵 상태.
 *
 *   node scripts/gsc.mjs              최근 28일 (직전 동기간과 비교)
 *   node scripts/gsc.mjs 7            최근 7일
 *   node scripts/gsc.mjs 28 --top 30  검색어·페이지를 30개까지
 *   node scripts/gsc.mjs --json       원본 수치를 JSON 으로
 *
 * .env 에 다음이 필요합니다 (.gitignore 에 있으므로 커밋되지 않습니다):
 *   GSC_SERVICE_ACCOUNT_KEY=C:/path/to/key.json   서비스 계정 JSON 키 파일 경로
 *   GSC_SITE_URL=https://oasis-study.vercel.app/           도메인 속성이면 sc-domain:, URL 접두어 속성이면 https://numsmith.com/
 *
 * 서비스 계정은 Search Console > 설정 > 사용자 및 권한에 추가되어 있어야 합니다.
 * 외부 패키지 없이 node:crypto 로 JWT 를 직접 서명합니다.
 */
import fs from 'node:fs';
import crypto from 'node:crypto';

/** 스택 트레이스 대신 원인만 보여 준다 — 대부분 권한·설정 문제라 메시지 한 줄로 충분하다. */
const fail = (e) => {
  console.error(`\n${e?.message ?? e}\n`);
  process.exit(1);
};

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
/**
 * 기본은 GSC 화면과 같은 미확정 포함 데이터(all). 확정치(final)만 보면 최근 2~3일이 통째로 빠져
 * "노출이 늘고 있나" 를 판단할 때 가장 중요한 구간을 놓친다. --final 로 확정치만 볼 수 있다.
 */
const FINAL_ONLY = process.argv.includes('--final');
const LAG_DAYS = FINAL_ONLY ? 2 : 0;

function readEnv(name) {
  if (process.env[name]) return process.env[name];
  for (const f of ['.env', '.env.local']) {
    if (!fs.existsSync(f)) continue;
    for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
      const m = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/.exec(line);
      if (m && m[1] === name) return m[2].replace(/^["']|["']$/g, '').trim();
    }
  }
  return '';
}

const args = process.argv.slice(2);
const days = Math.max(1, Math.min(480, Number(args.find((a) => /^\d+$/.test(a)) || 28)));
const topArg = args.indexOf('--top');
const top = Math.max(1, Math.min(100, (topArg >= 0 && Number(args[topArg + 1])) || 15));
const asJson = args.includes('--json');

const keyPath = readEnv('GSC_SERVICE_ACCOUNT_KEY') || readEnv('GOOGLE_APPLICATION_CREDENTIALS');
/** --site 로 다른 속성도 본다 (같은 서비스 계정을 그 속성에 사용자로 추가해 두면 된다). --sites 는 접근 가능한 속성 목록. */
const siteArg = args.indexOf('--site');
const site = (siteArg >= 0 && args[siteArg + 1]) || readEnv('GSC_SITE_URL') || 'https://oasis-study.vercel.app/';
if (!keyPath) {
  console.error('.env 에 GSC_SERVICE_ACCOUNT_KEY=<서비스 계정 JSON 키 경로> 가 필요합니다. 준비 방법은 SEO.md 참고.');
  process.exit(1);
}
if (!fs.existsSync(keyPath)) {
  console.error(`키 파일을 찾을 수 없습니다: ${keyPath}`);
  process.exit(1);
}
const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
if (!key.client_email || !key.private_key) {
  console.error('JSON 키에 client_email / private_key 가 없습니다. 서비스 계정 키(JSON)인지 확인하세요.');
  process.exit(1);
}

const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');

/** 서비스 계정 JWT 로 액세스 토큰을 받는다 (유효 1시간, 실행마다 1회). */
async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: key.client_email, scope: SCOPE, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 };
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64(claim)}`;
  const sig = crypto.createSign('RSA-SHA256').update(unsigned).sign(key.private_key).toString('base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }),
  });
  const j = await res.json();
  if (!j.access_token) throw new Error(`토큰 발급 실패: ${JSON.stringify(j)} — Search Console API 를 사용 설정했는지 확인하세요.`);
  return j.access_token;
}

const TOKEN = await accessToken().catch(fail);
const api = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}`;

async function call(path, body) {
  const res = await fetch(`${api}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = j.error?.message || res.statusText;
    if (res.status === 403)
      throw new Error(
        `${msg}\n→ Search Console → 설정 → 사용자 및 권한에서 ${key.client_email} 을 사용자로 추가했는지, GSC_SITE_URL(${site}) 이 속성 이름과 정확히 같은지 확인하세요.`,
      );
    throw new Error(`${res.status} ${msg}`);
  }
  return j;
}

/**
 * 색인 상태 표본 조사 — 사이트맵에서 균등 간격으로 뽑아 URL 검사 API 로 상태를 집계한다.
 * 노출이 0 일 때 "색인이 안 됐는가 / 됐는데 순위가 낮은가" 를 가르는 가장 빠른 신호다.
 * URL 검사 API 쿼터는 하루 2,000건·분당 600건이므로 표본 수만 조심하면 된다.
 */
async function coverage(sampleSize) {
  const origin = new URL(site.startsWith('sc-domain:') ? `https://${site.slice(10)}` : site).origin;
  const locs = async (url) => [...(await (await fetch(url)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  /** 사이트맵 인덱스면 자식 사이트맵을 펼친다 — 사이트마다 파일 이름이 다르므로 인덱스에서 출발한다. */
  let all = [];
  for (const entry of await locs(`${origin}/sitemap-index.xml`).catch(() => [])) {
    all = all.concat(entry.endsWith('.xml') ? await locs(entry) : [entry]);
  }
  if (!all.length) all = await locs(`${origin}/sitemap.xml`).catch(() => []);
  if (!all.length) return console.log('사이트맵에서 URL 을 읽지 못했습니다.');
  const step = Math.max(1, Math.floor(all.length / sampleSize));
  const sample = all.filter((_, i) => i % step === 0).slice(0, sampleSize);
  const tally = new Map();
  for (const url of sample) {
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ inspectionUrl: url, siteUrl: site, languageCode: 'ko' }),
    });
    const j = await res.json().catch(() => ({}));
    const r = j.inspectionResult?.indexStatusResult;
    const state = r?.coverageState ?? `조회 실패: ${(j.error?.message ?? res.statusText).slice(0, 50)}`;
    tally.set(state, (tally.get(state) ?? 0) + 1);
    console.log(`  ${state.padEnd(30)} ${r?.lastCrawlTime?.slice(0, 10) ?? '크롤 없음'}  ${url.replace(/^https?:\/\/[^/]+/, '')}`);
  }
  console.log(`\n■ 표본 ${sample.length}개 집계 (사이트맵 전체 ${all.length}개)`);
  for (const [state, n] of [...tally].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(3)}개 (${Math.round((n / sample.length) * 100)}%)  ${state}`);
  }
  console.log('\n"알려지지 않은 URL" 이 많으면 사이트맵은 읽혔지만 크롤 예산이 아직 안 돌아온 것이고, "발견됨 - 색인 생성되지 않음" 이 많으면 내용이 얇다고 판단된 것입니다.\n');
}

if (args.includes('--sites')) {
  const r = await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites', { headers: { Authorization: `Bearer ${TOKEN}` } })
    .then((x) => x.json())
    .catch(fail);
  console.log('\n■ 이 서비스 계정이 볼 수 있는 속성');
  for (const s of r.siteEntry ?? []) console.log(`  ${s.siteUrl}  (${s.permissionLevel})`);
  if (!r.siteEntry?.length) console.log('  없습니다 — Search Console → 설정 → 사용자 및 권한에서 서비스 계정을 추가하세요.');
  console.log(`\n다른 속성을 보려면: node scripts/gsc.mjs 28 --site <속성>\n`);
  process.exit(0);
}

if (args.includes('--coverage')) {
  const n = args.indexOf('--coverage');
  await coverage(Math.max(1, Math.min(200, Number(args[n + 1]) || 30))).catch(fail);
  process.exit(0);
}

const iso = (d) => d.toISOString().slice(0, 10);
const endDate = new Date(Date.now() - LAG_DAYS * 86_400_000);
const startDate = new Date(endDate.getTime() - (days - 1) * 86_400_000);
const prevEnd = new Date(startDate.getTime() - 86_400_000);
const prevStart = new Date(prevEnd.getTime() - (days - 1) * 86_400_000);

/**
 * API 는 클릭 내림차순으로 정렬해 돌려준다. 클릭이 거의 0 인 초기 사이트에서는 그 순서가 무의미해져
 * 사실상 알파벳순 앞부분만 잘려 오므로, 넉넉히 받아서 노출순으로 다시 정렬한다.
 */
async function query(from, to, dimensions = [], want = 1) {
  const rowLimit = dimensions.length ? Math.max(want, 1000) : 1;
  const r = await call('/searchAnalytics/query', {
    startDate: iso(from),
    endDate: iso(to),
    dimensions,
    rowLimit,
    dataState: FINAL_ONLY ? 'final' : 'all',
  });
  // 날짜 시계열은 순서를 건드리면 안 된다.
  if (r.rows && dimensions.length && dimensions[0] !== 'date') r.rows = r.rows.sort((a, b) => b.impressions - a.impressions).slice(0, want);
  if (r.rows && dimensions[0] === 'date') r.rows = r.rows.sort((a, b) => a.keys[0].localeCompare(b.keys[0]));
  return r;
}

const [cur, prev, byDay, byQuery, byPage, byDevice, byCountry, sitemaps] = await Promise.all([
  query(startDate, endDate),
  query(prevStart, prevEnd),
  query(startDate, endDate, ['date'], 500),
  query(startDate, endDate, ['query'], top),
  query(startDate, endDate, ['page'], top),
  query(startDate, endDate, ['device'], 5),
  query(startDate, endDate, ['country'], 8),
  call('/sitemaps').catch((e) => ({ error: e.message })),
]).catch(fail);

if (asJson) {
  console.log(JSON.stringify({ site, range: [iso(startDate), iso(endDate)], cur, prev, byDay, byQuery, byPage, byDevice, byCountry, sitemaps }, null, 2));
  process.exit(0);
}

const num = (n) => n.toLocaleString('ko-KR');
const lpad = (s, n) => String(s).padStart(n);
const delta = (a, b) => (b === 0 ? (a === 0 ? '±0%' : '신규') : `${a - b >= 0 ? '+' : ''}${Math.round(((a - b) / b) * 100)}%`);
const ctrOf = (r) => (r.impressions ? (r.clicks / r.impressions) * 100 : 0);

const c = cur.rows?.[0] ?? { clicks: 0, impressions: 0, position: 0 };
const p = prev.rows?.[0] ?? { clicks: 0, impressions: 0, position: 0 };

console.log(`\n■ ${site} · ${iso(startDate)} ~ ${iso(endDate)} (${days}일, ${FINAL_ONLY ? '확정 데이터만' : '미확정 포함 — 마지막 1~2일은 늘어날 수 있음'})`);
console.log(
  `  노출 ${num(c.impressions)} (${delta(c.impressions, p.impressions)}) · 클릭 ${num(c.clicks)} (${delta(c.clicks, p.clicks)}) · CTR ${ctrOf(c).toFixed(2)}% · 평균순위 ${c.position.toFixed(1)}`,
);
console.log(`  직전 ${days}일 (${iso(prevStart)} ~ ${iso(prevEnd)}): 노출 ${num(p.impressions)} · 클릭 ${num(p.clicks)} · 평균순위 ${p.position ? p.position.toFixed(1) : '-'}`);

const dayRows = byDay.rows ?? [];
if (dayRows.length) {
  /** 주 단위로 접어서 본다 — 일별은 요일 편차가 커서 추세가 안 보인다. */
  const weeks = [];
  for (let i = 0; i < dayRows.length; i += 7) weeks.push(dayRows.slice(i, i + 7));
  const impOf = (w) => w.reduce((a, r) => a + r.impressions, 0);
  const peak = Math.max(1, ...weeks.map(impOf));
  console.log('\n■ 주별 추세 (노출 / 클릭 / 평균순위)');
  for (const w of weeks) {
    const imp = impOf(w);
    const clicks = w.reduce((a, r) => a + r.clicks, 0);
    const pos = imp ? w.reduce((a, r) => a + r.position * r.impressions, 0) / imp : 0;
    console.log(`  ${w[0].keys[0]} ~ ${w[w.length - 1].keys[0]}  ${lpad(num(imp), 7)} / ${lpad(num(clicks), 4)} / ${lpad(pos.toFixed(1), 5)}  ${'#'.repeat(Math.round((imp / peak) * 40))}`);
  }
  console.log('\n■ 최근 7일 일별');
  for (const r of dayRows.slice(-7)) console.log(`  ${r.keys[0]}  노출 ${lpad(num(r.impressions), 6)} · 클릭 ${lpad(num(r.clicks), 4)} · 순위 ${r.position.toFixed(1)}`);
}

function table(title, rows, label) {
  console.log(`\n■ ${title}`);
  if (!rows?.length) return console.log('  (데이터 없음)');
  for (const r of rows) {
    console.log(`  노출 ${lpad(num(r.impressions), 6)} · 클릭 ${lpad(num(r.clicks), 4)} · CTR ${lpad(ctrOf(r).toFixed(1), 5)}% · 순위 ${lpad(r.position.toFixed(1), 5)}  ${label(r.keys[0])}`);
  }
}

table(`검색어 상위 ${top}`, byQuery.rows, (k) => k);
table(`페이지 상위 ${top}`, byPage.rows, (k) => k.replace(/^https?:\/\/[^/]+/, '') || '/');
table('기기', byDevice.rows, (k) => k);
table('국가', byCountry.rows, (k) => k.toUpperCase());

console.log('\n■ 사이트맵');
if (sitemaps.error) console.log(`  조회 실패: ${sitemaps.error}`);
else if (!sitemaps.sitemap?.length) console.log('  제출된 사이트맵이 없습니다 — GSC → Sitemaps 에서 sitemap-index.xml 을 제출하세요.');
else
  for (const s of sitemaps.sitemap) {
    const submitted = (s.contents ?? []).reduce((a, x) => a + Number(x.submitted || 0), 0);
    const bad = Number(s.warnings || 0) + Number(s.errors || 0);
    console.log(`  ${s.path.replace(/^https?:\/\/[^/]+/, '')} — URL ${num(submitted)}개 · 마지막 읽음 ${s.lastDownloaded?.slice(0, 10) ?? '없음'}${bad ? ` · 경고/오류 ${bad}` : ''}`);
  }

console.log('\n노출이 늘어도 평균순위가 10 밖이면 클릭은 거의 안 붙습니다. 순위 8~20 구간 검색어가 제목·설명을 손볼 1순위입니다.\n');
