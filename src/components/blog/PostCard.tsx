import Image from "next/image";
import Link from "next/link";
import { formatDate, getCategory, readingMinutes, type Post } from "@/lib/blog";

export function CategoryChip({ category, light = false }: { category: Post["category"]; light?: boolean }) {
  const c = getCategory(category);
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide " +
        (light ? "bg-white/90 text-[#5D4E37]" : "bg-[#F5F1E8] text-[#5D4E37]")
      }
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
      {c.label}
    </span>
  );
}

export function PostMeta({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <p className={"flex items-center gap-2 text-sm text-[#8B6F47] " + className}>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden className="text-[#C4B5A0]">
        ·
      </span>
      <span>{readingMinutes(post.body)}분 읽기</span>
    </p>
  );
}

/** 목록 그리드용 카드 — 사진 위에 제목을 올리지 않고 아래에 둬서 긴 제목도 잘리지 않게 한다. */
export default function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <article className="group flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-[#E8E3D9]"
      >
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <CategoryChip category={post.category} light />
        </div>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-xl font-bold leading-snug text-[#5D4E37] line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-[#8B6F47]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#6B5D52] line-clamp-2">{post.description}</p>
        <PostMeta post={post} className="mt-auto pt-4" />
      </div>
    </article>
  );
}

/** 목록 맨 위 대표 글 — 가로형, 사진 크게. */
export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl bg-white warm-shadow-lg lg:grid-cols-2">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="flex items-center gap-3">
          <CategoryChip category={post.category} />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A8987A]">최신 글</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold leading-snug text-[#5D4E37] md:text-3xl lg:text-[2rem]">
          <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-[#8B6F47]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 leading-relaxed text-[#6B5D52] md:text-lg">{post.description}</p>
        <div className="mt-8 flex items-center justify-between">
          <PostMeta post={post} />
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A9D7C] transition-colors hover:text-[#5D6E59]"
          >
            읽어보기
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
