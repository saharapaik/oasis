import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { OG_BASE, BIZ, MEETING_ROOMS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "파주 운정 회의실 대여 | 2~20인 미팅룸·컨퍼런스룸 OASIS",
  description:
    "파주 운정신도시 회의실 대여. 미팅룸(2~4인) 시간당 10,000원, 컨퍼런스룸(10~20인) 시간당 70,000원. 빔프로젝터·대형 스크린·주차 지원. 경기도 파주시 미래로 369-27.",
  alternates: { canonical: "/meeting-room" },
  openGraph: {
    ...OG_BASE,
    title: "파주 운정 회의실 대여 OASIS — 미팅룸·컨퍼런스룸",
    description:
      "운정신도시 회의실 대여. 미팅룸 2~4인 시간당 10,000원, 컨퍼런스룸 10~20인 시간당 70,000원.",
    url: SITE_URL + "/meeting-room",
  },
};

const faq = [
  {
    q: "회의실 대여 요금은 얼마인가요?",
    a: "미팅룸(2~4인)은 시간당 10,000원, 컨퍼런스룸(10~20인)은 시간당 70,000원입니다. 비상주오피스 회원은 컨퍼런스룸을 플랜에 따라 10~20% 할인받을 수 있습니다.",
  },
  {
    q: "최대 몇 명까지 들어갈 수 있나요?",
    a: "미팅룸은 2~4인, 컨퍼런스룸은 10~20인 규모입니다. 20명을 넘는 행사는 공간상 어려워 사전에 전화로 문의해 주세요.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "전화(" + BIZ.phone + ") 또는 카카오톡 채널로 희망 날짜와 시간을 알려주시면 예약을 확인해 드립니다.",
  },
  {
    q: "빔프로젝터나 스크린이 있나요?",
    a: "컨퍼런스룸에는 대형 스크린과 빔프로젝터가 설치되어 있습니다. 미팅룸에는 별도 영상 장비가 없습니다.",
  },
  {
    q: "화이트보드나 음향 시스템도 있나요?",
    a: "화이트보드, TV 모니터, 음향 시스템은 제공하지 않습니다. 필요한 장비가 있으면 직접 가져오실 수 있습니다.",
  },
  {
    q: "음료나 케이터링이 제공되나요?",
    a: "케이터링은 제공하지 않으며 무료 음료도 없습니다. 정수기는 자유롭게 이용할 수 있습니다.",
  },
  {
    q: "주차가 되나요?",
    a: "주차를 지원합니다. 참석 인원이 많은 경우 예약 시 미리 알려주시면 안내드립니다.",
  },
];

const useCases = [
  "파주·운정 지역 소규모 팀 회의와 1:1 면담",
  "스타트업 투자 미팅과 사업 설명회",
  "학회·동호회 정기 모임과 스터디 발표",
  "교육·세미나 및 직무 교육 진행",
  "면접 및 채용 설명회",
  "프로젝트 단기 작업 공간",
];

export default function MeetingRoomPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "파주 운정신도시 회의실 대여",
          serviceType: "회의실·컨퍼런스룸 시간제 대여",
          provider: { "@type": "LocalBusiness", name: BIZ.name, telephone: BIZ.phone },
          areaServed: [
            { "@type": "City", name: "파주시" },
            { "@type": "Place", name: "운정신도시" },
          ],
          url: SITE_URL + "/meeting-room",
          offers: MEETING_ROOMS.map((room) => ({
            "@type": "Offer",
            name: room.name + " (" + room.capacity + ")",
            price: room.priceValue,
            priceCurrency: "KRW",
            unitText: "시간",
            description: room.features.join(", "),
          })),
        }}
      />

      <PageHero
        crumbs={[{ label: "회의실 대여" }]}
        eyebrow="Meeting Rooms"
        title={
          <>
            파주 운정 회의실 대여
            <br />
            <span className="text-[#8B6F47]">2~20인 미팅룸·컨퍼런스룸</span>
          </>
        }
        lead="운정신도시 미래로에 있는 시간제 회의실입니다. 소규모 미팅은 시간당 10,000원, 20인까지 들어가는 컨퍼런스룸은 시간당 70,000원이며 빔프로젝터와 대형 스크린, 주차를 지원합니다."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={"tel:" + BIZ.phone}
            className="bg-[#5D4E37] text-white px-8 py-4 font-semibold hover:bg-[#8B6F47] transition-colors"
          >
            전화로 예약하기
          </a>
          <a
            href={BIZ.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#8B6F47] text-[#5D4E37] px-8 py-4 font-semibold hover:bg-[#F5E6D3] transition-colors"
          >
            카카오톡으로 예약하기
          </a>
        </div>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            운정 회의실 종류와 이용료
          </h2>
          <p className="text-lg text-[#6B5D52] mb-12 max-w-2xl">
            인원 규모에 따라 미팅룸과 컨퍼런스룸 두 가지를 운영합니다. 모두 시간 단위로
            빌릴 수 있습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {MEETING_ROOMS.map((room) => (
              <article key={room.name} className="warm-shadow-lg overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#5D4E37] mb-1">
                        {room.name}
                      </h3>
                      <p className="text-[#6B5D52]">수용 인원 {room.capacity}</p>
                    </div>
                    <p className="text-right">
                      <span className="block text-2xl font-bold text-[#8B6F47]">
                        {room.price}
                      </span>
                      <span className="text-sm text-[#6B5D52]">{room.priceUnit}</span>
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm bg-[#F5F1E8] text-[#6B5D52] px-4 py-2"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF9F0] paper-texture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-10">
            이런 모임에 적합합니다
          </h2>
          <ul className="grid sm:grid-cols-2 gap-5 text-[#6B5D52]">
            {useCases.map((text) => (
              <li
                key={text}
                className="bg-white px-6 py-5 border border-[#E8E3D9] leading-relaxed"
              >
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-12 bg-white border border-[#E8E3D9] p-8">
            <h3 className="text-xl font-bold text-[#5D4E37] mb-4">예약 전 확인해 주세요</h3>
            <ul className="space-y-2 text-[#6B5D52]">
              <li>· 화이트보드, TV 모니터, 음향 시스템은 제공하지 않습니다.</li>
              <li>· 케이터링과 무료 음료는 제공하지 않으며 정수기는 이용 가능합니다.</li>
              <li>· 비상주오피스 회원은 컨퍼런스룸을 10~20% 할인받습니다.</li>
              <li>· 주차를 지원하며, 인원이 많을 경우 예약 시 알려주세요.</li>
            </ul>
          </div>
        </div>
      </section>

      <Faq items={faq} heading="파주 운정 회의실 대여 자주 묻는 질문" />

      <CtaBand
        heading="회의실 예약, 통화 한 번으로 끝납니다"
        description="희망 날짜와 인원만 알려주시면 가능 시간을 바로 확인해 드립니다."
      />
    </>
  );
}
