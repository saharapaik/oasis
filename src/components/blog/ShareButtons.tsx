"use client";

import { useState } from "react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("링크를 복사하세요", url);
    }
  };

  const enc = encodeURIComponent;
  const btn =
    "inline-flex h-10 items-center gap-2 rounded-full border border-[#E8E3D9] bg-white px-4 text-sm font-medium text-[#5D4E37] transition-colors hover:border-[#8B6F47] hover:bg-[#FFF9F0]";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" onClick={copy} className={btn} aria-live="polite">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        {copied ? "복사됨" : "링크 복사"}
      </button>
      <a
        href={`https://share.naver.com/web/shareView?url=${enc(url)}&title=${enc(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        <span className="font-bold text-[#03C75A]">N</span>
        네이버 공유
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        <span className="font-bold">X</span>
        공유
      </a>
    </div>
  );
}
