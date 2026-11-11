"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import { CATEGORIES, type CategoryKey, type Post } from "@/lib/blog";

/**
 * 카테고리 필터 탭 + 카드 그리드. 글 전체를 받아 클라이언트에서 거른다 —
 * 글 수가 수십 개 수준이라 별도 라우트보다 즉시 전환이 낫다.
 * 전체 글은 서버에서 렌더되므로 검색엔진은 필터와 무관하게 모든 카드를 본다.
 */
export default function PostGrid({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<CategoryKey | "all">("all");
  const visible = active === "all" ? posts : posts.filter((p) => p.category === active);
  const count = (key: CategoryKey | "all") =>
    key === "all" ? posts.length : posts.filter((p) => p.category === key).length;

  const tabs: { key: CategoryKey | "all"; label: string }[] = [
    { key: "all", label: "전체" },
    ...CATEGORIES.map((c) => ({ key: c.key, label: c.label })),
  ];

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="카테고리" className="flex w-max gap-2 border-b border-[#E8E3D9] pb-px sm:w-full">
          {tabs.map((t) => {
            const n = count(t.key);
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                disabled={n === 0}
                onClick={() => setActive(t.key)}
                className={
                  "relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 " +
                  (isActive ? "text-[#5D4E37]" : "text-[#A8987A] hover:text-[#5D4E37]")
                }
              >
                {t.label}
                <span className={"ml-1.5 text-xs " + (isActive ? "text-[#7A9D7C]" : "text-[#C4B5A0]")}>{n}</span>
                {isActive && <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-[#5D4E37]" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-20 text-center text-[#A8987A]">아직 이 카테고리에 글이 없습니다.</p>
      )}
    </div>
  );
}
