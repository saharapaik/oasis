import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { OG_BASE, BIZ, PRINT_PRICES, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "파주 운정 프린트카페 | 흑백 70원·컬러 200원 출력·복사·팩스 OASIS",
  description:
    "파주 운정신도시 프린트카페. 흑백 출력 70원, 컬러 200원, 스캔 100원, 팩스 500원, 코팅 1,000원. 24시간 이용 가능. 경기도 파주시 미래로 369-27 201호.",
  alternates: { canonical: "/print-cafe" },
  openGraph: {
    ...OG_BASE,
    title: "파주 운정 프린트카페 OASIS — 출력·복사·스캔·팩스·코팅",
    description:
      "운정신도시 프린트카페. 흑백 70원, 컬러 200원, 스캔 100원, 팩스 500원, 코팅 1,000원.",
    url: SITE_URL + "/print-cafe",
  },
};

const faq = [
  {
    q: "출력 요금은 얼마인가요?",
    a: "흑백 출력과 복사는 1장 70원부터, 컬러는 200원입니다. 스캔은 장당 100원, 팩스 발송은 500원, 코팅은 1,000원입니다.",
  },
  {
    q: "제본도 되나요?",
    a: "제본 서비스는 제공하지 않습니다. 출력, 복사, 스캔, 팩스, 코팅만 이용할 수 있습니다.",
  },
  {
    q: "24시간 출력할 수 있나요?",
    a: "네, 24시간 연중무휴로 운영하므로 늦은 시간이나 새벽에도 출력과 복사가 가능합니다.",
  },
  {
    q: "스터디카페를 이용하지 않아도 프린트만 쓸 수 있나요?",
    a: "프린트 이용 방법은 방문 시점에 따라 안내가 다를 수 있어 전화나 카카오톡 채널로 먼저 문의해 주세요.",
  },
  {
    q: "위치가 어디인가요?",
    a: BIZ.address.full + "입니다. 파주 운정신도시 미래로에 있습니다.",
  },
];

export default function PrintCafePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "파주 운정신도시 프린트카페",
          serviceType: "문서 출력·복사·스캔·팩스·코팅",
          provider: { "@type": "LocalBusiness", name: BIZ.name, telephone: BIZ.phone },
          areaServed: [
            { "@type": "City", name: "파주시" },
            { "@type": "Place", name: "운정신도시" },
          ],
          url: SITE_URL + "/print-cafe",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "KRW",
            lowPrice: 70,
            highPrice: 1000,
            offerCount: PRINT_PRICES.length,
          },
        }}
      />

      <PageHero
        crumbs={[{ label: "프린트카페" }]}
        eyebrow="Print Cafe"
        title={
          <>
            파주 운정 프린트카페
            <br />
            <span className="text-[#7A9D7C]">출력·복사·스캔·팩스·코팅</span>
          </>
        }
        lead="운정신도시에서 급하게 서류를 출력해야 할 때 24시간 이용할 수 있습니다. 흑백 70원, 컬러 200원부터 시작하고 스캔·팩스·코팅까지 한 곳에서 해결됩니다."
      >
        <a
          href={"tel:" + BIZ.phone}
          className="inline-block bg-[#7A9D7C] text-white px-8 py-4 font-semibold hover:bg-[#5D6E59] transition-colors"
        >
          전화 문의 {BIZ.phone}
        </a>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-6">
                운정 프린트카페 가격표
              </h2>
              <table className="w-full text-left">
                <caption className="sr-only">OASIS 프린트카페 서비스별 요금표</caption>
                <thead>
                  <tr className="text-sm text-[#8B6F47] border-b border-[#E8E3D9]">
                    <th scope="col" className="pb-3 font-medium">
                      서비스
                    </th>
                    <th scope="col" className="pb-3 font-medium text-right">
                      요금
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRINT_PRICES.map((row) => (
                    <tr key={row.label} className="border-b border-[#F5F1E8]">
                      <td className="py-3 text-[#6B5D52]">{row.label}</td>
                      <td className="py-3 text-right font-semibold text-[#5D4E37]">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-sm text-[#8B6F47] bg-[#FFF9F0] px-6 py-4">
                * 제본 서비스는 제공하지 않습니다.
              </p>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden warm-shadow-lg">
              <Image
                src="/images/print-room.jpg"
                alt="OASIS 파주 운정 프린트카페 복합기 출력 공간"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F7F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-10">
            이럴 때 찾으시면 됩니다
          </h2>
          <ul className="grid sm:grid-cols-2 gap-5 text-[#6B5D52]">
            {[
              "제출 기한이 급한 과제·보고서 출력",
              "이력서와 자기소개서 출력, 증명서 복사",
              "계약서·세금 서류 스캔과 팩스 발송",
              "자격증·메뉴판 코팅",
              "밤늦게 또는 새벽에 급하게 필요한 출력",
              "스터디카페 이용 중 바로 출력이 필요한 경우",
            ].map((text) => (
              <li key={text} className="bg-white px-6 py-5 border border-[#E8E3D9]">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={faq} heading="파주 운정 프린트카페 자주 묻는 질문" />

      <CtaBand
        heading="출력이 급하신가요?"
        description="필요한 작업과 분량을 알려주시면 가능 여부를 바로 확인해 드립니다."
      />
    </>
  );
}
