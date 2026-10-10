import JsonLd from "./JsonLd";

export type QA = { q: string; a: string };

/**
 * 질문형 롱테일 쿼리("운정 스터디카페 24시간 하나요?")를 잡는 블록.
 * FAQPage 구조화 데이터를 함께 내보내 검색결과에서 접히는 형태로 노출될 수 있게 한다.
 */
export default function Faq({ items, heading }: { items: QA[]; heading: string }) {
  return (
    <section className="py-20 bg-[#F5F1E8] paper-texture">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-10">{heading}</h2>
        <div className="divide-y divide-[#E8E3D9] border-y border-[#E8E3D9]">
          {items.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-lg font-semibold text-[#5D4E37] list-none">
                <span>{q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-[#8B6F47] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#6B5D52] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
