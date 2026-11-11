import { POSTS } from "@/lib/blog";
import { BIZ, SITE_URL } from "@/lib/site";

/** RSS 2.0 — 네이버 서치어드바이저 "RSS 제출" 과 피드 구독용. */
export function GET() {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const items = POSTS.map(
    (p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
      <enclosure url="${SITE_URL}${p.cover}" type="image/jpeg" />
    </item>`,
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OASIS 블로그 — 파주 운정 창업·공부 가이드</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(BIZ.name)}가 쓰는 비상주사무실·사업자등록·스터디카페·회의실 가이드</description>
    <language>ko</language>
    <lastBuildDate>${new Date(POSTS[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "s-maxage=3600" },
  });
}
