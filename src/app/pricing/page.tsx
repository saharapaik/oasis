import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import {
  BIZ,
  OG_BASE,
  HOURLY_PRICES,
  MEETING_ROOMS,
  OFFICE_PLANS,
  PERIOD_PRICES,
  PRINT_PRICES,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "요금 안내 | 파주 운정 스터디카페·비상주오피스·회의실 가격표 OASIS",
  description:
    "OASIS 전체 요금표. 스터디카페 1시간 1,000원·28일 79,000원, 비상주오피스 월 18,000원부터, 회의실 시간당 10,000원부터, 출력 70원부터. 파주 운정신도시.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    ...OG_BASE,
    title: "OASIS 요금 안내 — 파주 운정 스터디카페·비상주오피스·회의실",
    description:
      "스터디카페·비상주오피스·회의실·프린트 전체 가격표를 한 페이지에 모았습니다.",
    url: SITE_URL + "/pricing",
  },
};

const faq = [
  {
    q: "스터디카페에서 가장 저렴하게 이용하는 방법은 무엇인가요?",
    a: "장기 이용이라면 기간제가 유리합니다. 28일권 79,000원은 하루 약 2,800원으로, 1일권 9,000원이나 시간제보다 훨씬 저렴합니다.",
  },
  {
    q: "장기 계약 할인이 있나요?",
    a: "있습니다. 비상주오피스 베이직은 1년 계약 시 월 18,000원, 6개월 25,000원, 3개월 30,000원으로 기간이 길수록 저렴해집니다. 그 외 장기 계약 할인은 전화로 문의해 주세요.",
  },
  {
    q: "비상주오피스 회원도 회의실 요금을 내야 하나요?",
    a: "네, 다만 스탠다드는 컨퍼런스룸 10%, 프리미엄은 20% 할인됩니다. 프리미엄은 비즈니스라운지 월 4회 이용도 포함됩니다.",
  },
  {
    q: "요금은 어떻게 결제하나요?",
    a: "스터디카페 좌석은 현장 키오스크에서 등록·결제할 수 있고, 비상주오피스와 회의실은 전화 또는 카카오톡 채널로 상담 후 진행합니다.",
  },
  {
    q: "표에 없는 서비스 가격도 있나요?",
    a: "제본은 제공하지 않습니다. 그 밖에 필요한 작업이 있으면 전화(" + BIZ.phone + ")로 문의해 주시면 가능 여부와 가격을 안내드립니다.",
  },
];

function PriceTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: [string, string];
  rows: { label: string; price: string; badge?: boolean }[];
}) {
  return (
    <table className="w-full text-left">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr className="text-sm text-[#8B6F47] border-b border-[#E8E3D9]">
          <th scope="col" className="pb-2 font-medium">
            {head[0]}
          </th>
          <th scope="col" className="pb-2 font-medium text-right">
            {head[1]}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-[#F5F1E8] last:border-0">
            <td className="py-2 text-[#6B5D52]">
              {row.label}
              {row.badge && (
                <span className="ml-2 text-xs bg-[#F5E6D3] text-[#8B6F47] px-2 py-0.5 rounded-full">
                  인기
                </span>
              )}
            </td>
            <td className="py-2 text-right font-semibold text-[#5D4E37]">{row.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "요금 안내" }]}
        eyebrow="Pricing"
        title={
          <>
            파주 운정 OASIS
            <br />
            <span className="text-[#8B6F47]">전체 요금 안내</span>
          </>
        }
        lead="스터디카페, 비상주오피스, 회의실, 프린트 요금을 한 페이지에 모았습니다. 장기 계약 시에는 별도 할인이 적용되며, 표에 없는 사항은 전화로 안내드립니다."
      >
        <nav aria-label="요금 항목 바로가기" className="flex flex-wrap gap-3">
          {[
            ["#study-cafe-price", "스터디카페"],
            ["#meeting-room-price", "회의실"],
            ["#print-price", "프린트"],
            ["#office-price", "비상주오피스"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="border border-[#8B6F47] text-[#5D4E37] px-5 py-2.5 text-sm font-medium hover:bg-[#F5E6D3] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* 스터디카페 */}
      <section id="study-cafe-price" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            스터디카페 이용요금
          </h2>
          <p className="text-lg text-[#6B5D52] mb-10">
            시간제는 1시간 1,000원부터, 기간제는 1일 9,000원부터입니다.{" "}
            <Link href="/study-cafe" className="text-[#8B6F47] underline">
              스터디카페 시설 안내 보기
            </Link>
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9]">
              <h3 className="text-xl font-bold text-[#5D4E37] mb-6">시간제</h3>
              <PriceTable
                caption="스터디카페 시간제 요금표"
                head={["이용 시간", "요금"]}
                rows={HOURLY_PRICES.map((r) => ({ label: r.time, price: r.price }))}
              />
            </div>
            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9]">
              <h3 className="text-xl font-bold text-[#5D4E37] mb-6">기간제</h3>
              <PriceTable
                caption="스터디카페 기간제 요금표"
                head={["이용 기간", "요금"]}
                rows={PERIOD_PRICES.map((r) => ({
                  label: r.period,
                  price: r.price,
                  badge: r.period === "28일",
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 회의실 */}
      <section id="meeting-room-price" className="py-20 bg-[#FFF9F0] paper-texture scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            회의실 이용요금
          </h2>
          <p className="text-lg text-[#6B5D52] mb-10">
            시간 단위로 대여합니다.{" "}
            <Link href="/meeting-room" className="text-[#8B6F47] underline">
              회의실 상세 안내 보기
            </Link>
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {MEETING_ROOMS.map((room) => (
              <div
                key={room.name}
                className="bg-white rounded-2xl p-8 border border-[#E8E3D9] text-center"
              >
                <h3 className="text-xl font-bold text-[#5D4E37] mb-2">{room.name}</h3>
                <p className="text-[#6B5D52] mb-5">{room.capacity}</p>
                <p className="text-3xl font-bold text-[#8B6F47]">
                  {room.price}
                  <span className="text-base text-[#6B5D52] font-normal">
                    {room.priceUnit}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#6B5D52]">
            * 비상주오피스 스탠다드 회원 10%, 프리미엄 회원 20% 할인
          </p>
        </div>
      </section>

      {/* 프린트 */}
      <section id="print-price" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            프린트 & 부가서비스 요금
          </h2>
          <p className="text-lg text-[#6B5D52] mb-10">
            출력·복사·스캔·팩스·코팅을 제공합니다.{" "}
            <Link href="/print-cafe" className="text-[#8B6F47] underline">
              프린트카페 안내 보기
            </Link>
          </p>
          <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9]">
            <PriceTable
              caption="프린트 및 부가서비스 요금표"
              head={["서비스", "요금"]}
              rows={PRINT_PRICES.map((r) => ({ label: r.label, price: r.price }))}
            />
            <p className="mt-5 text-sm text-[#6B5D52]">* 제본 서비스는 제공하지 않습니다.</p>
          </div>
        </div>
      </section>

      {/* 비상주오피스 */}
      <section id="office-price" className="py-20 bg-[#F5F7F4] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            비상주오피스 요금
          </h2>
          <p className="text-lg text-[#6B5D52] mb-10">
            사업자등록 주소가 필요한 분을 위한 월 단위 플랜입니다.{" "}
            <Link href="/virtual-office" className="text-[#7A9D7C] underline">
              비상주오피스 안내 보기
            </Link>
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {OFFICE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={
                  "bg-white rounded-2xl p-8 border-2 " +
                  (plan.popular ? "border-[#7A9D7C]" : "border-[#E8E3D9]")
                }
              >
                <h3 className="text-xl font-bold text-[#5D4E37] mb-4">{plan.name}</h3>
                <p className="mb-2">
                  <span className="text-3xl font-bold text-[#5D4E37]">{plan.price}</span>
                  <span className="text-[#6B5D52]">{plan.unit}</span>
                </p>
                <p className="text-sm text-[#8B6F47] mb-5">{plan.contract}</p>
                {plan.priceNote && (
                  <p className="text-xs text-[#6B5D52] mb-5">{plan.priceNote}</p>
                )}
                <ul className="space-y-2 text-[#5D4E37] text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden className="text-[#7A9D7C]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-sm text-[#6B5D52]">
            <p>* 장기 계약 시 할인 혜택이 제공됩니다.</p>
            <p>* 자세한 사항은 전화({BIZ.phone}) 문의 부탁드립니다.</p>
          </div>
        </div>
      </section>

      <Faq items={faq} heading="요금 관련 자주 묻는 질문" />

      <CtaBand
        heading="어떤 요금제가 맞는지 모르겠다면"
        description="이용 목적과 기간만 알려주시면 가장 저렴한 조합을 안내드립니다."
      />
    </>
  );
}
