import { BIZ } from "@/lib/site";

/** 하위 페이지 하단 전환 블록 — 전화·카카오톡이 실제 문의 경로다. */
export default function CtaBand({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <section className="py-20 bg-[#5D4E37]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFF9F0] mb-4">{heading}</h2>
        <p className="text-[#C4B5A0] text-lg mb-10">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${BIZ.phone}`}
            className="bg-[#FFF9F0] text-[#5D4E37] px-8 py-4 text-lg font-semibold hover:bg-[#F5E6D3] transition-colors rounded-full"
          >
            전화 문의 {BIZ.phone}
          </a>
          <a
            href={BIZ.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEE500] text-[#3C1E1E] px-8 py-4 text-lg font-semibold hover:bg-[#FFD700] transition-colors rounded-full"
          >
            카카오톡 채널 문의
          </a>
        </div>
        <p className="mt-8 text-sm text-[#A8987A]">
          {BIZ.address.full} · {BIZ.hours}
        </p>
      </div>
    </section>
  );
}
