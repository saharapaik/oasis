"use client";

import { useEffect, useState } from "react";

/** 헤더 바로 아래 얇은 진행 바. 글 본문(article)의 스크롤 비율만 잰다. */
export default function ReadingProgress() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article[data-post]");
    if (!article) return;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const done = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setRatio(total > 0 ? done / total : 1);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div aria-hidden className="fixed left-0 right-0 top-16 z-40 h-0.5 bg-transparent">
      <div
        className="h-full bg-[#7A9D7C] transition-[width] duration-150"
        style={{ width: `${Math.round(ratio * 100)}%` }}
      />
    </div>
  );
}
