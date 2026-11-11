"use client";

import { useEffect, useState } from "react";

type Item = { level: number; text: string; id: string };

/** 데스크톱 우측 고정 목차. 화면에 들어온 제목을 강조한다. */
export default function Toc({ items }: { items: Item[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label="목차" className="text-sm">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#A8987A]">목차</p>
      <ol className="space-y-1 border-l border-[#E8E3D9]">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  "-ml-px block border-l-2 py-1 pr-2 leading-snug transition-colors " +
                  (item.level === 3 ? "pl-6 " : "pl-3 ") +
                  (active
                    ? "border-[#7A9D7C] font-semibold text-[#5D4E37]"
                    : "border-transparent text-[#8B6F47] hover:text-[#5D4E37]")
                }
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
