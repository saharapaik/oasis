# OASIS SEO 개선 — 진행 현황

> 마지막 업데이트: **2026-10-12**
> 재개하려면 이 파일을 Claude에게 보여주고 "SEO-PROGRESS.md 이어서 진행해줘" 라고 하면 됩니다.

---

## 배경

Google Search Console 분석 결과(2026-10-10 조사):

- 240일(2/13~10/10) 누적 **노출 521 · 클릭 33 · 평균순위 5.8**
- 그런데 **추적 가능한 검색어는 6개(노출 6회)뿐**, 나머지 99%는 익명화 쿼리
  = 검색량이 거의 0인 희귀 쿼리로만 노출되고 있었다는 뜻
- `스터디카페`/`공유오피스`/`프린트`/`오아시스` 포함 쿼리 **노출 0건**
- 원인: **URL이 홈 1개뿐**, H1/H2에 지역·업종 키워드 없음, 사이트맵 4개 중 3개가 `#앵커`

평균순위 5.8은 "순위가 좋다"가 아니라 "경쟁 없는 쿼리에서만 보인다"는 신호였음.

---

## 기준선 (개선 전, 2026-10-10 기준)

| 지표 | 값 |
|---|---|
| 최근 28일 노출 | 95 |
| 최근 28일 클릭 | 8 |
| 색인된 URL | 1개 (홈만) |
| 추적 가능한 검색어 | 6건 |
| "스터디카페" 포함 쿼리 노출 | **0건** |
| 사이트맵 마지막 읽음 | 2026-02-16 (8개월 전) |

---

## ✅ 완료 (코드 작업, 배포됨)

### `e6dd864` — 서비스별 랜딩 페이지 분리 및 지역 키워드 최적화

**구조**
- 라우트 5개 신설: `/study-cafe`, `/virtual-office`, `/meeting-room`, `/print-cafe`, `/pricing`
  - 각 페이지 고유 title / description / canonical
  - 고유 본문(시설 안내, 전체 요금표, 이용 절차, 추천 대상) + FAQ 총 30개
- 헤더 내비게이션을 `#앵커` → 실제 라우트로 변경, 푸터·홈 섹션에서도 내부 링크 연결
- `src/lib/site.ts` 신설 — NAP(주소·전화·좌표)와 요금 데이터를 한 곳에 모음
  - **도메인 변경 시 여기 `SITE_URL` 한 줄만 고치면 메타·사이트맵·구조화 데이터가 전부 따라감**

**색인**
- `public/sitemap.xml` 삭제 → `src/app/sitemap.ts`로 대체 (앵커 URL 제거, lastmod 자동 갱신)
- `public/coupon-template.html`에 `noindex` + robots.txt `Disallow`

**콘텐츠**
- H1/H2 전부 "파주 운정 + 업종"으로 교체, `keywords` 메타태그 제거
- 사실 정정: 무료 음료 → 정수기 이용 / 화상회의 → 주차 지원 / 월 2만원 → 월 1.8만원

**기술**
- `public/og-image.png`(1200×630) 생성 + 전 페이지 og·twitter 이미지 지정
- 모든 `<img>` → `next/image` (Hero는 `priority`)
- `LocalBusiness` JSON-LD 보강: 좌표(37.71154, 126.745443), 우편번호 10905,
  `areaServed`, `openingHoursSpecification`, `amenityFeature`, `hasOfferCatalog`
- 페이지별 `Service` / `BreadcrumbList` / `FAQPage` 구조화 데이터

### `f5334de` — Search Console 성과 추적 스크립트

```bash
npm run gsc              # 최근 28일 (직전 동기간 대비)
npm run gsc -- 7         # 최근 7일
npm run gsc -- --sites   # 서비스 계정이 볼 수 있는 속성 목록
```

`.env`(gitignore 대상)에 `GSC_SERVICE_ACCOUNT_KEY`, `GSC_SITE_URL`이 설정되어 있음.

---

## 📊 현재 상태 (2026-10-12 확인)

**사이트맵**: `/sitemap.xml` — URL **6개** · 마지막 읽음 **2026-10-11** ✅ 재수집 완료

**색인 상태** (URL 검사 API):

| URL | 상태 | 크롤 |
|---|---|---|
| `/` | ✅ 색인 생성됨 | 2026-10-10 |
| `/study-cafe` | ✅ 색인 생성됨 | 2026-10-10 |
| `/virtual-office` | ✅ 색인 생성됨 | 2026-10-10 |
| `/meeting-room` | ⏳ 발견됨 — 색인 안 됨 | 크롤 없음 |
| `/print-cafe` | ⏳ 발견됨 — 색인 안 됨 | 크롤 없음 |
| `/pricing` | ⏳ 발견됨 — 색인 안 됨 | 크롤 없음 |

> "발견됨 - 색인 안 됨"은 정상 진행 단계입니다. Google이 URL은 알고 있고 크롤 순번을 기다리는 중.
> 보통 1~2주 내 자동 크롤되지만, GSC에서 **색인 생성 요청**을 누르면 1~3일로 당겨집니다.

---

## ⬜ 남은 작업

### 1. 나머지 3개 페이지 색인 요청 — 5분 ⭐지금 할 것

GSC 맨 위 검색창(🔍 모든 URL 검사)에 아래를 하나씩 넣고 → **색인 생성 요청** 클릭:

```
https://oasis-study.vercel.app/meeting-room
https://oasis-study.vercel.app/print-cafe
https://oasis-study.vercel.app/pricing
```

> 사이트맵 재제출은 이미 완료됨(10-11 재수집 확인). 다시 할 필요 없음.

### 2. 네이버 서치어드바이저 — 5분

[searchadvisor.naver.com](https://searchadvisor.naver.com) (이미 등록된 사이트, verification 파일 `public/naverd056...html` 존재)

1. 웹마스터도구 → 사이트 선택
2. **요청 → 사이트맵 제출** → `sitemap.xml`
3. **요청 → 웹 페이지 수집** 에 신규 5개 URL 등록

### 3. 네이버 스마트플레이스 등록 — 30분 ⭐⭐효과 1위

"파주 스터디카페"를 네이버에 치면 웹사이트가 아니라 **플레이스 목록이 먼저** 나옴. 실제 전화가 울리는 경로.

1. [new.smartplace.naver.com](https://new.smartplace.naver.com) → 신규 등록
2. 업종: 주업종 `스터디카페`, 부업종 `공유오피스`·`사무실임대`
3. 준비물: 사업자등록증 사본, 010-2356-8836, 24시간 영업, 경기도 파주시 미래로 369-27 201호
4. 등록 후 반드시 채울 것 (노출 순위를 가름):
   - 사진 10장 이상 — `public/images/`에 7장 있음 (입구→좌석→회의실→프린트룸→키오스크 순)
   - 소개글에 "파주 운정신도시 24시간 스터디카페" 자연스럽게 포함
   - 가격표: 시간제 1,000원~, 28일권 79,000원, 회의실 10,000원/시간
   - 편의시설: 주차, 무선인터넷, 24시간
   - 홈페이지: `https://oasis-study.vercel.app`
5. **기존 영수증 리뷰 이벤트를 네이버 플레이스 방문자 리뷰로 유도** (쿠폰 프로세스는 이미 있음)

### 4. 구글 비즈니스 프로필 — 10분 + 우편 인증 1~2주

[business.google.com](https://business.google.com) → 비즈니스 추가

- 이름: `OASIS 스터디카페 & 공유오피스`
- 카테고리: `스터디 센터`(주) + `코워킹 스페이스`(부)
- **사이트와 글자 하나까지 동일하게** 입력 (NAP 일치가 로컬 SEO 핵심):
  ```
  경기도 파주시 미래로 369-27 201호   (우편번호 10905)
  010-2356-8836
  24시간 영업 (연중무휴)
  https://oasis-study.vercel.app
  ```
- 인증 엽서 도착 전까지 노출 안 됨 → **신청을 먼저 걸어두는 게 중요**

### 5. 커스텀 도메인 — 이번 달

`oasis-study.vercel.app`은 CTR·로컬 신뢰도에 불리하고 `site:vercel.app` 쿼리에 묻어 노출됨.

1. 도메인 구입(연 1~2만원): 가비아/후이즈/Cloudflare
   후보 — `oasis-unjeong.com`, `oasisstudy.kr`, `oasis-paju.com`
2. Vercel → Settings → Domains → 연결, `www`는 apex로 리디렉트
3. **`src/lib/site.ts`의 `SITE_URL` 한 줄 수정** (Claude에게 요청하면 처리)
4. GSC: 새 도메인 속성 추가 → 기존 속성 → **주소 변경 도구**로 이전 신고
5. 네이버 서치어드바이저·플레이스·구글 비즈니스 프로필의 URL도 함께 변경

---

## 📈 성과 확인

```bash
npm run gsc          # 최근 28일
npm run gsc -- 7     # 최근 7일
```

**4~6주 뒤(2026-11-20 전후) 확인할 두 가지:**

1. `스터디카페` 포함 쿼리 노출이 **0을 벗어났는가**
2. 페이지 목록에 `/` 말고 **다른 URL이 올라왔는가**

이 둘이 움직이면 구조 개선이 먹힌 것. 노출 수 자체보다 이 두 지표가 먼저입니다.

---

## 알아둘 것

- **GSC 서비스 계정은 읽기 전용**(`siteRestrictedUser`). 조회·URL 검사는 되지만
  사이트맵 제출은 403. 자동화하려면 GSC → 설정 → 사용자 및 권한에서 **소유자**로 올려야 함.
- 서비스 계정이 접근 가능한 속성: `oasis-study.vercel.app`, `ssumly.com`, `numsmith.com`
- 다른 속성 조회: `npm run gsc -- 28 --site <속성>`
