import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostGrid from "@/components/blog/PostGrid";
import { FeaturedPostCard } from "@/components/blog/PostCard";
import { POSTS } from "@/lib/blog";
import { BIZ, OG_BASE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "블로그 | 파주 운정 창업·비상주사무실·스터디카페 가이드 OASIS",
  description:
    "파주 운정에서 사업자등록·법인설립·비상주사무실을 준비하는 분, 스터디카페와 회의실을 찾는 분을 위한 실전 가이드. OASIS 운정점이 직접 씁니다.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/feed.xml" } },
  openGraph: {
    ...OG_BASE,
    title: "OASIS 블로그 — 파주 운정 창업·공부 가이드",
    description: "비상주사무실 사업자등록, 법인설립 절세, 스터디카페·회의실 이용 팁.",
    url: SITE_URL + "/blog",
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": SITE_URL + "/blog#blog",
          name: "OASIS 블로그",
          url: SITE_URL + "/blog",
          publisher: { "@type": "Organization", name: BIZ.name, url: SITE_URL },
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
            image: SITE_URL + p.cover,
          })),
        }}
      />

      <section className="bg-[#FFF9F0] paper-texture pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "블로그" }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="block text-sm font-medium uppercase tracking-[0.3em] text-[#8B6F47]">
                OASIS Blog
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#5D4E37] md:text-5xl lg:text-6xl">
                파주 운정 창업과 공부,
                <br />
                <span className="text-[#7A9D7C]">현장에서 쓴 가이드</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B5D52] md:text-xl">
                비상주사무실로 사업자등록 하는 법, 파주에서 법인을 세우면 세금이 얼마나 줄어드는지,
                스터디카페 요금제를 손해 없이 고르는 계산까지. 매일 문의받는 질문을 글로 정리합니다.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl warm-shadow-lg">
                <video
                  src="/videos/blog/lounge-loop.mp4"
                  poster="/images/blog/blog-index-hero.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="서재처럼 꾸민 OASIS 라운지"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <Link
                href={BIZ.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-[#5D4E37] px-6 py-3 text-sm font-semibold text-[#FFF9F0] warm-shadow-lg transition-colors hover:bg-[#8B6F47]"
              >
                궁금한 건 카카오톡으로
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1E8] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturedPostCard post={featured} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PostGrid posts={[featured, ...rest]} />
        </div>
      </section>

      <section className="bg-[#F5F1E8] paper-texture py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["/virtual-office", "비상주사무실", "사업자등록 주소 월 12,000원부터"],
            ["/study-cafe", "스터디카페", "24시간 · 1시간 1,000원부터"],
            ["/meeting-room", "회의실 대여", "2~20인 · 시간당 10,000원부터"],
          ].map(([href, title, sub]) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-[#E8E3D9] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#8B6F47] hover:warm-shadow"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A8987A]">OASIS 운정점</p>
              <p className="mt-2 text-xl font-bold text-[#5D4E37] group-hover:text-[#8B6F47]">{title}</p>
              <p className="mt-1 text-sm text-[#6B5D52]">{sub}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
