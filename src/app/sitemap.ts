import type { MetadataRoute } from "next";
import { SITE_URL, SERVICE_PAGES } from "@/lib/site";

/**
 * 사이트맵을 코드로 생성한다 — 이전 public/sitemap.xml 은
 *  (1) /#services 같은 앵커를 URL 로 올려 Google 이 3/4 를 무시했고
 *  (2) lastmod 가 수동이라 배포해도 갱신되지 않아 8개월간 재수집되지 않았다.
 * 앵커는 색인 단위가 아니므로 실제 라우트만 올린다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICE_PAGES.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
  ];
}
