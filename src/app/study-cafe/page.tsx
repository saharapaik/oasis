import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { OG_BASE, BIZ, HOURLY_PRICES, PERIOD_PRICES, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "파주 운정 스터디카페 | 24시간 연중무휴 OASIS",
  description:
    "파주 운정신도시 스터디카페 OASIS. 시간제 1시간 1,000원부터, 28일권 79,000원. 100석 이상 개인 좌석, 24시간 연중무휴, 주차 지원. 경기도 파주시 미래로 369-27 201호.",
  alternates: { canonical: "/study-cafe" },
  openGraph: {
    ...OG_BASE,
    title: "파주 운정 스터디카페 OASIS — 24시간 연중무휴",
    description:
      "운정신도시 스터디카페. 시간제 1시간 1,000원부터, 기간제 28일 79,000원. 100석 이상 개인 좌석과 주차 지원.",
    url: SITE_URL + "/study-cafe",
  },
};

const faq = [
  {
    q: "파주 운정 OASIS 스터디카페는 24시간 운영하나요?",
    a: "네, 24시간 연중무휴로 운영합니다. 새벽 시간과 공휴일에도 동일하게 이용할 수 있습니다.",
  },
  {
    q: "스터디카페 요금은 얼마인가요?",
    a: "시간제는 1시간 1,000원부터 시작하며 12시간 8,500원입니다. 기간제는 1일 9,000원, 7일 45,000원이고 가장 인기 있는 28일권이 79,000원입니다.",
  },
  {
    q: "음료가 무료로 제공되나요?",
    a: "무료 음료는 제공하지 않습니다. 대신 정수기를 자유롭게 이용할 수 있고 휴게 공간이 마련되어 있습니다.",
  },
  {
    q: "주차가 가능한가요?",
    a: "주차를 지원합니다. 자세한 주차 안내는 방문 전 전화나 카카오톡 채널로 문의해 주세요.",
  },
  {
    q: "인터넷 속도는 어떤가요?",
    a: "1Gbps 초고속 인터넷을 사용하고 있어 온라인 강의 시청이나 화상 수업에도 지연 없이 이용할 수 있습니다.",
  },
  {
    q: "위치가 어디인가요?",
    a: BIZ.address.full + "입니다. 파주 운정신도시 내에 있어 덕이동·운정3동 생활권에서 가깝습니다.",
  },
];

const facilities = [
  {
    image: "/images/study-cafe.jpg",
    alt: "OASIS 파주 운정 스터디카페 개인 좌석 열람실 내부",
    title: "프리미엄 개인 좌석",
    body: "칸막이가 있는 개인 좌석을 100석 이상 운영합니다. 장시간 공부에도 부담이 적은 좌석 구성입니다.",
  },
  {
    image: "/images/kiosk.jpg",
    alt: "OASIS 스터디카페 무인 키오스크 좌석 발권기",
    title: "무인 키오스크 이용",
    body: "현장 키오스크에서 시간제·기간제 좌석을 직접 선택해 등록할 수 있습니다.",
  },
  {
    image: "/images/water-dispenser.jpg",
    alt: "OASIS 스터디카페 정수기 및 휴게 공간",
    title: "정수기 & 휴게 공간",
    body: "정수기는 자유롭게 이용할 수 있습니다. 무료 음료는 제공하지 않지만 잠시 쉬어 갈 공간이 있습니다.",
  },
];

const audience = [
  "공무원·공기업 시험을 장기간 준비하는 수험생",
  "자격증·어학 시험을 단기간에 준비하는 직장인",
  "집에서는 집중이 어려운 중·고등학생과 대학생",
  "조용한 작업 공간이 필요한 재택근무·프리랜서",
  "심야나 새벽 시간대에 공부 시간을 확보하려는 분",
  "하루만 집중해서 쓰고 싶어 1일권을 찾는 분",
];

export default function StudyCafePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "파주 운정신도시 스터디카페",
          serviceType: "스터디카페 좌석 대여",
          provider: { "@type": "LocalBusiness", name: BIZ.name, telephone: BIZ.phone },
          areaServed: [
            { "@type": "City", name: "파주시" },
            { "@type": "Place", name: "운정신도시" },
          ],
          url: SITE_URL + "/study-cafe",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "KRW",
            lowPrice: 1000,
            highPrice: 79000,
            offerCount: HOURLY_PRICES.length + PERIOD_PRICES.length,
          },
        }}
      />

      <PageHero
        crumbs={[{ label: "스터디카페" }]}
        eyebrow="Study Cafe"
        title={
          <>
            파주 운정 스터디카페
            <br />
            <span className="text-[#8B6F47]">OASIS</span>
          </>
        }
        lead="파주시 운정신도시 미래로에 있는 24시간 연중무휴 스터디카페입니다. 시간제 1시간 1,000원부터 28일권 79,000원까지, 수험 준비·자격증·재택근무 일정에 맞춰 고를 수 있습니다."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={"tel:" + BIZ.phone}
            className="bg-[#5D4E37] text-white px-8 py-4 font-semibold hover:bg-[#8B6F47] transition-colors"
          >
            전화로 좌석 문의
          </a>
          <Link
            href="/pricing"
            className="border-2 border-[#8B6F47] text-[#5D4E37] px-8 py-4 font-semibold hover:bg-[#F5E6D3] transition-colors"
          >
            전체 요금표 보기
          </Link>
        </div>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            운정 스터디카페 시설 안내
          </h2>
          <p className="text-lg text-[#6B5D52] mb-12 max-w-2xl">
            100석 이상의 개인 좌석, 1Gbps 초고속 인터넷, 무인 키오스크, 정수기와 휴게
            공간을 갖추고 있습니다.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {facilities.map((item) => (
              <div key={item.title}>
                <div className="relative aspect-[4/3] overflow-hidden warm-shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#5D4E37]">{item.title}</h3>
                <p className="mt-2 text-[#6B5D52] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF9F0] paper-texture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            파주 운정 스터디카페 이용요금
          </h2>
          <p className="text-lg text-[#6B5D52] mb-12">
            결제 단위가 짧은 시간제와, 하루 이상 길게 쓰는 기간제 두 가지로 운영합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] warm-shadow">
              <h3 className="text-xl font-bold text-[#5D4E37] mb-6">시간제 요금</h3>
              <table className="w-full text-left">
                <caption className="sr-only">OASIS 스터디카페 시간제 요금표</caption>
                <thead>
                  <tr className="text-sm text-[#8B6F47] border-b border-[#E8E3D9]">
                    <th scope="col" className="pb-2 font-medium">
                      이용 시간
                    </th>
                    <th scope="col" className="pb-2 font-medium text-right">
                      요금
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {HOURLY_PRICES.map((row) => (
                    <tr key={row.time} className="border-b border-[#F5F1E8] last:border-0">
                      <td className="py-2 text-[#6B5D52]">{row.time}</td>
                      <td className="py-2 text-right font-semibold text-[#5D4E37]">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] warm-shadow">
              <h3 className="text-xl font-bold text-[#5D4E37] mb-6">기간제 요금</h3>
              <table className="w-full text-left">
                <caption className="sr-only">OASIS 스터디카페 기간제 요금표</caption>
                <thead>
                  <tr className="text-sm text-[#8B6F47] border-b border-[#E8E3D9]">
                    <th scope="col" className="pb-2 font-medium">
                      이용 기간
                    </th>
                    <th scope="col" className="pb-2 font-medium text-right">
                      요금
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PERIOD_PRICES.map((row) => (
                    <tr key={row.period} className="border-b border-[#F5F1E8] last:border-0">
                      <td className="py-2 text-[#6B5D52]">
                        {row.period}
                        {row.period === "28일" && (
                          <span className="ml-2 text-xs bg-[#F5E6D3] text-[#8B6F47] px-2 py-0.5 rounded-full">
                            인기
                          </span>
                        )}
                      </td>
                      <td className="py-2 text-right font-semibold text-[#5D4E37]">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-10">
            이런 분들이 운정 OASIS를 이용합니다
          </h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-[#6B5D52]">
            {audience.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 bg-[#FFF9F0] px-6 py-5 border border-[#E8E3D9]"
              >
                <span aria-hidden className="text-[#8B6F47] font-bold">
                  ·
                </span>
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={faq} heading="파주 운정 스터디카페 자주 묻는 질문" />

      <CtaBand
        heading="운정 스터디카페, 지금 좌석 확인하세요"
        description="좌석 현황과 기간제 등록은 전화나 카카오톡 채널로 바로 안내드립니다."
      />
    </>
  );
}
