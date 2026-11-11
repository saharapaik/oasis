import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/blog/PostCard";
import { POSTS } from "@/lib/blog";
import { OG_BASE, BIZ, OFFICE_PLANS, OFFICE_MIN_PRICE, SITE_URL } from "@/lib/site";

/**
 * 비상주사무실 페이지 — 2026-11-12 리뉴얼.
 * "비상주오피스"보다 "비상주사무실" 검색량이 훨씬 많아 제목·H1·본문 용어를 바꿨고,
 * 파주 시세(월 1만~3만원)에 맞춰 베이직을 12,000원으로 내렸다.
 * 경쟁 비교표·업종 가능 여부·서류 체크리스트·블로그 연결을 추가해 체류시간과 전환을 함께 노린다.
 */
export const metadata: Metadata = {
  title: `파주 운정 비상주사무실 | 사업자등록 주소 월 ${OFFICE_MIN_PRICE}부터 OASIS`,
  description: `파주 운정신도시 비상주사무실. 사업자등록·법인설립 가능한 사업장 주소를 월 ${OFFICE_MIN_PRICE}부터. 임대차계약서 당일 발급, 세무서 실사 대응, 우편물 알림, 회의실 할인. 과밀억제권역 밖이라 법인 등록면허세 중과 없음. 경기도 파주시 미래로 369-27.`,
  alternates: { canonical: "/virtual-office" },
  openGraph: {
    ...OG_BASE,
    title: `파주 운정 비상주사무실 OASIS — 사업자등록 주소 월 ${OFFICE_MIN_PRICE}부터`,
    description:
      "임대차계약서 당일 발급, 법인설립 지원, 우편물 알림, 회의실 할인. 일산·고양 창업자도 파주 주소로 등록면허세를 아낍니다.",
    url: SITE_URL + "/virtual-office",
  },
};

const faq = [
  {
    q: "비상주사무실이 무엇인가요?",
    a: "실제로 출근하지 않으면서 사업자등록에 쓸 사업장 주소만 임대하는 서비스입니다. 온라인 쇼핑몰, 프리랜서, 1인 법인처럼 고정 사무실이 필요 없는 사업자가 월 1만~3만 원에 주소를 확보하는 방법입니다.",
  },
  {
    q: "이 주소로 사업자등록이 되나요? 세무서 실사는요?",
    a: "됩니다. 사업자등록용 임대차계약서를 계약 당일 발급하고, 세무서에서 사업장 확인 전화나 방문이 오면 상주 운영자가 입주 계약을 확인해 드립니다. 업종에 따라 요건이 다르니 신청 전 업종을 알려주시면 가능 여부를 먼저 확인합니다.",
  },
  {
    q: "월 요금은 얼마인가요?",
    a: `베이직 월 ${OFFICE_MIN_PRICE}(1년 계약 기준, 6개월 15,000원, 3개월 18,000원), 스탠다드 월 25,000원, 프리미엄 월 39,000원입니다. 부가세 포함이며 세금계산서를 발행합니다.`,
  },
  {
    q: "최소 계약 기간은 어떻게 되나요?",
    a: "베이직과 스탠다드는 최소 3개월, 프리미엄은 1개월부터 계약할 수 있습니다. 갱신 한 달 전에 미리 안내드립니다.",
  },
  {
    q: "법인 본점 주소로도 쓸 수 있나요?",
    a: "스탠다드 이상 플랜에서 법인 등기용 임대차계약서를 발급합니다. 파주는 과밀억제권역이 아니라 법인 설립 등록면허세가 서울·고양의 3분의 1입니다.",
  },
  {
    q: "우편물은 어떻게 받나요?",
    a: "모든 플랜에서 우편물이 도착하면 카카오톡으로 알려드립니다. 스탠다드 이상은 봉투 사진을 함께 보내드리고, 방문 수령 또는 협의 후 전달합니다.",
  },
  {
    q: "통신판매업 신고와 스마트스토어 입점이 되나요?",
    a: "됩니다. 사업자등록 후 파주시청(정부24)에 통신판매업을 신고하면 되고, 스마트스토어·쿠팡·11번가 모두 비상주 주소로 입점할 수 있습니다.",
  },
  {
    q: "집 주소로 등록해 둔 사업자를 옮길 수 있나요?",
    a: "홈택스 사업자등록 정정으로 사업장 주소만 바꾸면 됩니다. 사업자번호는 그대로 유지되고, 새 임대차계약서만 첨부하면 보통 2~3영업일 안에 처리됩니다.",
  },
  {
    q: "회의실도 함께 쓸 수 있나요?",
    a: "스탠다드는 컨퍼런스룸 10% 할인, 프리미엄은 미팅룸 월 2시간 무료와 컨퍼런스룸 20% 할인이 포함됩니다. 비상주 회원이 아니어도 미팅룸은 시간당 10,000원에 빌릴 수 있습니다.",
  },
];

const steps = [
  { title: "업종 확인", body: "전화·카카오톡으로 업종을 알려주시면 등록 가능 여부를 먼저 확인합니다. 5분이면 됩니다." },
  { title: "플랜 선택·계약", body: "베이직·스탠다드·프리미엄 중 선택. 비대면 계약 가능, 결제 즉시 임대차계약서 PDF 발급." },
  { title: "홈택스 신청", body: "임대차계약서를 첨부해 홈택스에서 10분. 세무서 방문도 가능 (파주세무서)." },
  { title: "등록증 발급", body: "통상 2~3영업일. 세무서 확인 연락이 오면 OASIS가 응대합니다." },
];

const okIndustries = [
  "온라인 쇼핑몰 · 스마트스토어 · 쿠팡 · 구매대행",
  "소프트웨어 개발 · IT 서비스 · 앱 운영",
  "디자인 · 영상 · 콘텐츠 제작 · 유튜브",
  "경영 컨설팅 · 교육 서비스(비대면) · 번역",
  "무역 · 수입 대행 (재고는 3PL 창고)",
  "법인 본점 소재지 (주식회사 · 유한회사)",
];
const noIndustries = [
  "음식점 · 카페 등 식품접객업",
  "공장 등록이 필요한 제조업",
  "학원 · 교습소 (시설 기준 심사)",
  "의료 · 약국 · 숙박 · 유흥업",
  "사업장에 재고를 두는 창고형 도소매",
  "부동산 중개업",
];

const documents = [
  ["사업자등록 신청서", "홈택스에서 온라인 작성"],
  ["임대차계약서 사본", "OASIS 발급 — 계약 당일 PDF"],
  ["신분증", "온라인은 공동·간편인증으로 대체"],
  ["업종별 인허가증", "해당 업종만 · 통신판매업은 등록 후 신고"],
];

export default function VirtualOfficePage() {
  const related = POSTS.filter((p) => p.category === "virtual-office" || p.category === "startup").slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "파주 운정신도시 비상주사무실",
          serviceType: "비상주사무실 사업자등록 주소 임대",
          provider: { "@type": "LocalBusiness", name: BIZ.name, telephone: BIZ.phone },
          areaServed: [
            { "@type": "City", name: "파주시" },
            { "@type": "Place", name: "운정신도시" },
            { "@type": "City", name: "고양시" },
            { "@type": "City", name: "김포시" },
          ],
          url: SITE_URL + "/virtual-office",
          offers: OFFICE_PLANS.map((plan) => ({
            "@type": "Offer",
            name: `비상주 ${plan.name}`,
            price: plan.priceValue,
            priceCurrency: "KRW",
            description: plan.features.join(", "),
          })),
        }}
      />

      <PageHero
        crumbs={[{ label: "비상주사무실" }]}
        eyebrow="Virtual Office"
        title={
          <>
            파주 운정 비상주사무실
            <br />
            <span className="text-[#7A9D7C]">사업자등록 주소 월 {OFFICE_MIN_PRICE}부터</span>
          </>
        }
        lead="사무실을 얻지 않고도 파주 운정신도시의 사업장 주소로 사업자등록·법인설립을 할 수 있습니다. 임대차계약서는 계약 당일 발급하고, 세무서 확인은 상주 운영자가 응대합니다. 우편물 알림은 모든 플랜에 포함됩니다."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={BIZ.applyForm}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7A9D7C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#5D6E59]"
          >
            비상주사무실 신청하기
          </a>
          <a
            href={BIZ.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEE500] px-8 py-4 font-semibold text-[#3C1E1E] transition-colors hover:bg-[#FFD700]"
          >
            카카오톡으로 업종 확인
          </a>
          <a
            href={"tel:" + BIZ.phone}
            className="border-2 border-[#7A9D7C] px-8 py-4 font-semibold text-[#5D4E37] transition-colors hover:bg-[#F5F1E8]"
          >
            전화 {BIZ.phone}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B5D52]">
          {["임대차계약서 당일 발급", "세무서 실사 대응", "우편물 카톡 알림", "세금계산서 발행", "비대면 계약"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <span className="text-[#7A9D7C]">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* 왜 비상주 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden warm-shadow-lg">
                <Image
                  src="/images/entrance.jpg"
                  alt="OASIS 파주 운정 비상주사무실 건물 입구"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="mb-6 text-3xl font-bold text-[#5D4E37] md:text-4xl">
                집 주소 대신 운정 비상주사무실을 쓰는 이유
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-[#6B5D52]">
                온라인 판매를 시작하면 통신판매업 신고 주소가 소비자에게 공개됩니다. 전·월세라면 집주인 동의가
                걸리고, 법인은 과밀억제권역이냐 아니냐로 설립 세금이 3배 차이 납니다. 비상주사무실은 이 세 가지를
                월 {OFFICE_MIN_PRICE}에 한 번에 해결합니다.
              </p>
              <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {[
                  [`월 ${OFFICE_MIN_PRICE}부터`, "파주 시세 월 1만~3만 원대. 실제 사무실의 10분의 1 이하."],
                  ["집 주소 비공개", "쇼핑몰·세금계산서·계약서에 상업용 건물 주소가 찍힙니다."],
                  ["법인 설립 세금 1/3", "파주는 성장관리권역. 서울·고양의 등록면허세 중과가 없습니다."],
                  ["우편물 알림 기본", "도착 즉시 카카오톡 알림. 스탠다드부터 봉투 사진 전송."],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <dt className="mb-1 text-xl font-bold text-[#7A9D7C]">{term}</dt>
                    <dd className="leading-relaxed text-[#6B5D52]">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 요금 */}
      <section id="plans" className="bg-[#F5F7F4] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-[#5D4E37] md:text-4xl">파주 비상주사무실 요금</h2>
          <p className="mb-12 text-lg text-[#6B5D52]">
            부가세 포함, 세금계산서 발행. 1년 계약 기준 월 환산가이며 짧게 계약하면 조금 올라갑니다.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {OFFICE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={
                  "relative rounded-2xl border-2 bg-white p-8 " +
                  (plan.popular ? "border-[#7A9D7C] warm-shadow-lg" : "border-[#E8E3D9]")
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#7A9D7C] px-4 py-1 text-sm font-medium text-[#FFF9F0]">
                    가장 많이 선택
                  </div>
                )}
                <h3 className="text-center text-xl font-bold text-[#5D4E37]">비상주 {plan.name}</h3>
                <p className="mt-1 text-center text-sm text-[#8B6F47]">{plan.tagline}</p>
                <p className="mt-6 text-center">
                  <span className="text-4xl font-bold text-[#5D4E37]">{plan.price}</span>
                  <span className="text-[#6B5D52]">{plan.unit}</span>
                </p>
                <p className="mt-2 text-center text-sm text-[#8B6F47]">{plan.contract}</p>
                <p className="mb-6 mt-1 text-center text-xs text-[#6B5D52]">{plan.priceNote}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[#5D4E37]">
                      <span aria-hidden className="font-bold text-[#7A9D7C]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={BIZ.applyForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "mt-8 block rounded-full py-3 text-center font-semibold transition-colors " +
                    (plan.popular
                      ? "bg-[#7A9D7C] text-white hover:bg-[#5D6E59]"
                      : "bg-[#F5F1E8] text-[#5D4E37] hover:bg-[#E8E3D9]")
                  }
                >
                  {plan.name} 신청
                </a>
              </div>
            ))}
          </div>

          {/* 비교표 */}
          <div className="mt-14 overflow-x-auto rounded-2xl border border-[#E8E3D9] bg-white">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F1E8] text-left text-[#5D4E37]">
                <tr>
                  <th className="px-5 py-4 font-semibold">비교</th>
                  <th className="px-5 py-4 font-semibold">집 주소</th>
                  <th className="px-5 py-4 font-semibold text-[#7A9D7C]">OASIS 비상주</th>
                  <th className="px-5 py-4 font-semibold">공유오피스 좌석</th>
                  <th className="px-5 py-4 font-semibold">소형 사무실 임대</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE0] text-[#5D4E37]">
                {[
                  ["월 비용", "0원", `${OFFICE_MIN_PRICE}~`, "15만~40만 원", "50만 원~ + 관리비"],
                  ["보증금", "—", "없음", "1~2개월치", "500만~1,000만 원"],
                  ["집 주소 공개", "공개됨", "비공개", "비공개", "비공개"],
                  ["집주인 동의", "전·월세는 필요", "불필요", "불필요", "불필요"],
                  ["법인 본점", "동의 필요", "가능", "가능", "가능"],
                  ["우편물", "집으로", "알림·사진", "보관", "직접"],
                  ["회의 공간", "없음", "미팅룸 1만 원/시간 (프리미엄 월 2시간 무료)", "포함", "포함"],
                ].map(([k, ...v]) => (
                  <tr key={k}>
                    <th className="whitespace-nowrap px-5 py-3 text-left font-semibold text-[#8B6F47]">{k}</th>
                    {v.map((c, i) => (
                      <td key={i} className={"px-5 py-3 " + (i === 1 ? "font-semibold text-[#5D6E59]" : "text-[#6B5D52]")}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-[#6B5D52]">
            매일 앉을 자리가 필요하면 비상주 베이직 + 스터디카페 28일권(79,000원) 조합이 월 91,000원으로 공유오피스
            자유석의 절반입니다.{" "}
            <Link href="/pricing" className="text-[#7A9D7C] underline">
              전체 요금 안내
            </Link>
          </p>
        </div>
      </section>

      {/* 업종 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-[#5D4E37] md:text-4xl">등록 가능한 업종, 안 되는 업종</h2>
          <p className="mb-10 text-lg text-[#6B5D52]">
            실제 영업장이 있어야 인허가가 나오는 업종은 비상주 주소로 등록이 안 됩니다. 애매하면 업종만 알려주세요.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D7E3D5] bg-[#F5F7F4] p-8">
              <h3 className="mb-5 text-xl font-bold text-[#5D6E59]">가능</h3>
              <ul className="space-y-3">
                {okIndustries.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[#5D4E37]">
                    <span className="font-bold text-[#7A9D7C]">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#EADBD5] bg-[#FBF5F2] p-8">
              <h3 className="mb-5 text-xl font-bold text-[#B5786A]">불가</h3>
              <ul className="space-y-3">
                {noIndustries.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[#5D4E37]">
                    <span className="font-bold text-[#E8B4A4]">✕</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 절차 + 서류 */}
      <section className="bg-[#F5F1E8] paper-texture py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-[#5D4E37] md:text-4xl">신청부터 사업자등록까지 4단계</h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[#7A9D7C] pt-6">
                <span className="text-sm font-bold text-[#7A9D7C]">STEP {i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-[#5D4E37]">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-[#6B5D52]">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="mb-5 text-xl font-bold text-[#5D4E37]">준비 서류 체크리스트</h3>
              <ul className="divide-y divide-[#EFEAE0]">
                {documents.map(([k, v]) => (
                  <li key={k} className="flex items-start justify-between gap-4 py-3">
                    <span className="font-semibold text-[#5D4E37]">{k}</span>
                    <span className="text-right text-sm text-[#6B5D52]">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#8B6F47]">사실상 임대차계약서 한 장이 전부입니다. 나머지는 이미 갖고 있거나 필요 없습니다.</p>
            </div>
            <div className="rounded-2xl bg-[#5D4E37] p-8 text-[#FFF9F0]">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C4B5A0]">일산 · 고양 · 김포 창업자</p>
              <h3 className="mt-3 text-2xl font-bold">본점 주소만 파주로 두면 등록면허세가 3분의 1</h3>
              <p className="mt-4 leading-relaxed text-[#E8E3D9]">
                고양시 전역은 과밀억제권역이라 법인 설립 등록면허세가 3배 중과됩니다. 파주는 성장관리권역이라
                일반 세율입니다. 자본금 1억 원이면 96만 원 차이. 운정에서 일산까지 차로 15분, GTX-A 한 정거장입니다.
              </p>
              <Link
                href="/blog/paju-non-overcrowded-area-benefits"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E8B4A4] hover:underline"
              >
                자본금별 세금 차이 계산 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faq} heading="파주 비상주사무실 자주 묻는 질문" />

      {/* 블로그 */}
      {related.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#8B6F47]">Guide</span>
                <h2 className="mt-2 text-3xl font-bold text-[#5D4E37] md:text-4xl">사업자등록 전에 읽어두면 좋은 글</h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-[#8B6F47] hover:underline">
                블로그 전체
              </Link>
            </div>
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading="업종만 알려주시면 등록 가능 여부를 바로 확인해 드립니다"
        description="전화 한 통, 카카오톡 한 줄이면 됩니다. 계약 당일 임대차계약서를 받고 홈택스에서 바로 신청하세요."
      />
    </>
  );
}
