import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export type Crumb = { label: string; href?: string };

/**
 * 눈에 보이는 경로 + BreadcrumbList 구조화 데이터를 함께 낸다.
 * 검색결과에 "oasis-study.vercel.app > 스터디카페" 형태로 표시돼 CTR 에 직접 영향을 준다.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "홈", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: `${SITE_URL}${item.href === "/" ? "" : item.href}` } : {}),
          })),
        }}
      />
      <nav aria-label="현재 위치" className="text-sm text-[#8B6F47]">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-[#C4B5A0]">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#6B5D52]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
