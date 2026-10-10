import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { OG_BASE, BIZ, OFFICE_PLANS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "파주 운정 비상주오피스 | 사업자등록 주소 월 18,000원 OASIS",
  description:
    "파주 운정신도시 비상주오피스. 사업자등록 가능한 비즈니스 주소를 월 18,000원부터 제공합니다. 법인설립 지원, 우편물 알림, 컨퍼런스룸 할인. 경기도 파주시 미래로 369-27.",
  alternates: { canonical: "/virtual-office" },
  openGraph: {
    ...OG_BASE,
    title: "파주 운정 비상주오피스 OASIS — 사업자등록 주소 월 18,000원부터",
    description:
      "운정신도시 비상주오피스. 사업자등록 주소 제공, 법인설립 지원, 우편물 알림, 회의실 할인.",
    url: SITE_URL + "/virtual-office",
  },
};

const faq = [
  {
    q: "비상주오피스가 무엇인가요?",
    a: "실제로 사무실에 상주하지 않으면서 사업자등록에 사용할 수 있는 사업장 주소를 임대하는 서비스입니다. 1인 기업, 온라인 사업자, 프리랜서처럼 고정 사무실 비용이 부담스러운 경우에 많이 이용합니다.",
  },
  {
    q: "이 주소로 사업자등록이 가능한가요?",
    a: "네, 사업자등록이 가능한 주소를 제공하며 등록 과정을 지원합니다. 업종에 따라 별도 요건이 있는 경우가 있어 신청 전 전화나 카카오톡으로 업종을 알려주시면 가능 여부를 확인해 드립니다.",
  },
  {
    q: "최소 계약 기간은 어떻게 되나요?",
    a: "베이직과 스탠다드는 최소 3개월 계약이고, 프리미엄은 1개월부터 계약할 수 있습니다.",
  },
  {
    q: "월 요금은 얼마인가요?",
    a: "베이직 월 18,000원(1년 기준), 스탠다드 월 35,000원, 프리미엄 월 55,000원입니다. 베이직은 6개월 계약 시 25,000원, 3개월 계약 시 30,000원입니다.",
  },
  {
    q: "우편물은 어떻게 받나요?",
    a: "프리미엄 플랜은 우편물이 도착하면 사진을 찍어 알려드립니다. 수령 방법은 계약 시 함께 안내합니다.",
  },
  {
    q: "회의실도 함께 쓸 수 있나요?",
    a: "스탠다드는 컨퍼런스룸 10% 할인, 프리미엄은 20% 할인과 비즈니스라운지 월 4회 이용이 포함됩니다.",
  },
  {
    q: "법인설립도 지원하나요?",
    a: "스탠다드 이상 플랜에서 법인설립을 지원하며, 프리미엄은 세무사 무료 상담 1회가 포함됩니다.",
  },
];

const steps = [
  {
    title: "상담 문의",
    body: "전화 또는 카카오톡 채널로 업종과 필요한 플랜을 알려주세요. 사업자등록 가능 여부를 먼저 확인합니다.",
  },
  {
    title: "플랜 선택 & 계약",
    body: "베이직·스탠다드·프리미엄 중 필요한 플랜을 고르고 계약을 진행합니다.",
  },
  {
    title: "등록 서류 안내",
    body: "사업자등록에 필요한 서류를 안내하고 발급해 드립니다.",
  },
  {
    title: "사업자등록 신청",
    body: "받은 서류로 세무서 또는 홈택스에서 사업자등록을 신청하면 끝입니다.",
  },
];

export default function VirtualOfficePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "파주 운정신도시 비상주오피스",
          serviceType: "비상주오피스 사업자등록 주소 임대",
          provider: { "@type": "LocalBusiness", name: BIZ.name, telephone: BIZ.phone },
          areaServed: [
            { "@type": "City", name: "파주시" },
            { "@type": "Place", name: "운정신도시" },
          ],
          url: SITE_URL + "/virtual-office",
          offers: OFFICE_PLANS.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            price: plan.priceValue,
            priceCurrency: "KRW",
            description: plan.features.join(", "),
          })),
        }}
      />

      <PageHero
        crumbs={[{ label: "비상주오피스" }]}
        eyebrow="Virtual Office"
        title={
          <>
            파주 운정 비상주오피스
            <br />
            <span className="text-[#7A9D7C]">사업자등록 주소</span>
          </>
        }
        lead="사무실을 따로 얻지 않고도 파주 운정신도시의 사업장 주소를 쓸 수 있습니다. 월 18,000원부터 시작하고, 법인설립 지원과 우편물 알림, 컨퍼런스룸 할인까지 플랜별로 포함됩니다."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={BIZ.applyForm}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7A9D7C] text-white px-8 py-4 font-semibold hover:bg-[#5D6E59] transition-colors"
          >
            비상주오피스 신청하기
          </a>
          <a
            href={"tel:" + BIZ.phone}
            className="border-2 border-[#7A9D7C] text-[#5D4E37] px-8 py-4 font-semibold hover:bg-[#F5F1E8] transition-colors"
          >
            전화 상담 {BIZ.phone}
          </a>
        </div>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-center">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden warm-shadow-lg">
                <Image
                  src="/images/entrance.jpg"
                  alt="OASIS 파주 운정 비상주오피스 건물 입구"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-6">
                운정 비상주오피스를 쓰는 이유
              </h2>
              <p className="text-lg text-[#6B5D52] leading-relaxed mb-8">
                파주·운정에서 사업을 시작할 때 가장 먼저 막히는 것이 사업장 주소입니다.
                집 주소로 등록하기 부담스럽거나, 업종 요건 때문에 별도 사업장이 필요한
                경우 비상주오피스가 가장 저렴한 해법입니다.
              </p>
              <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                {[
                  ["월 18,000원부터", "사무실 임대료의 수십분의 일로 사업장 주소를 확보합니다."],
                  ["사업자등록 지원", "등록에 필요한 서류를 안내하고 발급해 드립니다."],
                  ["법인설립 지원", "스탠다드 이상 플랜에서 법인설립을 함께 지원합니다."],
                  ["우편물 알림", "프리미엄 플랜은 우편물 도착 시 사진으로 알려드립니다."],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <dt className="text-xl font-bold text-[#7A9D7C] mb-1">{term}</dt>
                    <dd className="text-[#6B5D52] leading-relaxed">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            파주 비상주오피스 요금 플랜
          </h2>
          <p className="text-lg text-[#6B5D52] mb-12">
            필요한 기능만 골라 쓰실 수 있도록 세 가지로 나눠 두었습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {OFFICE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={
                  "relative bg-white rounded-2xl p-8 border-2 " +
                  (plan.popular ? "border-[#7A9D7C] warm-shadow-lg" : "border-[#E8E3D9]")
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7A9D7C] text-[#FFF9F0] px-4 py-1 rounded-full text-sm font-medium">
                    추천
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#5D4E37] mb-4 text-center">
                  {plan.name}
                </h3>
                <p className="text-center mb-2">
                  <span className="text-4xl font-bold text-[#5D4E37]">{plan.price}</span>
                  <span className="text-[#6B5D52]">{plan.unit}</span>
                </p>
                <p className="text-center text-sm text-[#8B6F47] mb-6">{plan.contract}</p>
                {plan.priceNote && (
                  <p className="text-center text-xs text-[#6B5D52] mb-6">{plan.priceNote}</p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[#5D4E37]">
                      <span aria-hidden className="text-[#7A9D7C] font-bold">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-[#6B5D52]">
            * 장기 계약 시 할인 혜택이 제공됩니다. 자세한 사항은 전화로 문의해 주세요.{" "}
            <Link href="/pricing" className="text-[#7A9D7C] underline">
              전체 요금 안내 보기
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-12">
            신청부터 사업자등록까지 4단계
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[#7A9D7C] pt-6">
                <span className="text-sm font-bold text-[#7A9D7C]">
                  STEP {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#5D4E37]">{step.title}</h3>
                <p className="mt-2 text-[#6B5D52] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={faq} heading="파주 비상주오피스 자주 묻는 질문" />

      <CtaBand
        heading="사업자등록 주소가 필요하신가요?"
        description="업종만 알려주시면 등록 가능 여부와 적합한 플랜을 바로 안내드립니다."
      />
    </>
  );
}
