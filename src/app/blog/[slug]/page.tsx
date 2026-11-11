import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Markdown from "@/lib/markdown";
import PostCard, { CategoryChip, PostMeta } from "@/components/blog/PostCard";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";
import Toc from "@/components/blog/Toc";
import { POSTS, getCategory, getPost, headings, relatedPosts } from "@/lib/blog";
import { BIZ, OG_BASE, SITE_URL } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | OASIS 블로그`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      ...OG_BASE,
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: post.cover, width: 1200, height: 750, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const toc = headings(post.body);
  const related = relatedPosts(post);
  const category = getCategory(post.category);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": url + "#post",
          mainEntityOfPage: url,
          headline: post.title,
          description: post.description,
          image: SITE_URL + post.cover,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "ko-KR",
          keywords: post.tags.join(", "),
          articleSection: category.label,
          author: { "@type": "Organization", name: BIZ.name, url: SITE_URL },
          publisher: {
            "@type": "Organization",
            name: BIZ.name,
            logo: { "@type": "ImageObject", url: SITE_URL + "/og-image.png" },
          },
        }}
      />

      {/* 머리말 */}
      <header className="bg-[#FFF9F0] paper-texture pt-28 pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Breadcrumbs items={[{ label: "블로그", href: "/blog" }, { label: category.label }]} />
          <div className="mt-8">
            <CategoryChip category={post.category} />
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-[1.25] text-[#5D4E37] md:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#6B5D52]">{post.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8E3D9] pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5D4E37] text-sm font-bold text-[#FFF9F0]">
                O
              </span>
              <div>
                <p className="text-sm font-semibold text-[#5D4E37]">OASIS 운정점</p>
                <PostMeta post={post} className="text-xs" />
              </div>
            </div>
            <ShareButtons url={url} title={post.title} />
          </div>
        </div>
      </header>

      {/* 대표 이미지 */}
      <div className="bg-[#FFF9F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl warm-shadow-lg">
            <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </div>
        </div>
      </div>

      {/* 본문 + 목차 */}
      <div className="bg-[#FFF9F0] pb-20 pt-12">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:px-8">
          <article data-post className="min-w-0 lg:mx-auto lg:max-w-3xl lg:w-full">
            {toc.length > 2 && (
              <details className="mb-10 rounded-2xl border border-[#E8E3D9] bg-white p-5 lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-[#5D4E37]">목차 보기</summary>
                <ol className="mt-4 space-y-2 text-sm">
                  {toc.map((h) => (
                    <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                      <a href={`#${h.id}`} className="text-[#8B6F47] hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            <div className="prose-oasis">
              <Markdown source={post.body} />
            </div>

            {/* 태그 */}
            <ul className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <li key={t} className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#8B6F47]">
                  #{t}
                </li>
              ))}
            </ul>

            {/* 서비스 연결 */}
            {post.cta && (
              <Link
                href={post.cta.href}
                className="group mt-10 flex items-center justify-between gap-4 rounded-2xl bg-[#5D4E37] p-6 text-[#FFF9F0] transition-colors hover:bg-[#8B6F47] md:p-8"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#C4B5A0]">OASIS 운정점</p>
                  <p className="mt-2 text-lg font-bold md:text-xl">{post.cta.label}</p>
                </div>
                <svg className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}

            {/* 작성자 */}
            <div className="mt-10 flex gap-5 rounded-2xl border border-[#E8E3D9] bg-white p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5D4E37] text-xl font-bold text-[#FFF9F0]">
                O
              </span>
              <div>
                <p className="font-bold text-[#5D4E37]">OASIS 운정점</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6B5D52]">
                  경기도 파주시 미래로 369-27에서 24시간 스터디카페와 비상주사무실, 회의실, 프린트카페를 운영합니다.
                  글에 적은 요금과 절차는 모두 운정점 기준이며, 세법·제도는 작성 시점을 기준으로 확인했습니다.
                </p>
                <div className="mt-3 flex gap-4 text-sm font-semibold">
                  <a href={"tel:" + BIZ.phone} className="text-[#7A9D7C] hover:underline">
                    {BIZ.phone}
                  </a>
                  <a href={BIZ.kakao} target="_blank" rel="noopener noreferrer" className="text-[#7A9D7C] hover:underline">
                    카카오톡 채널
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <Link href="/blog" className="text-sm font-semibold text-[#8B6F47] hover:underline">
                ← 블로그 목록
              </Link>
              <ShareButtons url={url} title={post.title} />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <Toc items={toc} />
              <div className="rounded-2xl bg-[#F5F1E8] p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#A8987A]">바로 문의</p>
                <a href={"tel:" + BIZ.phone} className="mt-2 block text-lg font-bold text-[#5D4E37] hover:text-[#8B6F47]">
                  {BIZ.phone}
                </a>
                <p className="mt-1 text-xs text-[#6B5D52]">{BIZ.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 관련 글 */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-2xl font-bold text-[#5D4E37] md:text-3xl">함께 읽으면 좋은 글</h2>
              <Link href="/blog" className="text-sm font-semibold text-[#8B6F47] hover:underline">
                전체 보기
              </Link>
            </div>
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading="글로 다 풀리지 않는 건 바로 물어보세요"
        description="업종, 일정, 예산만 알려주시면 맞는 플랜과 절차를 바로 안내드립니다."
      />
    </>
  );
}
