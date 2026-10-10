import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    name: "미팅룸",
    capacity: "2-4인",
    price: "10,000원",
    priceUnit: "/시간",
    image: "/images/meeting-room-2.jpg",
    features: ["무료 Wi-Fi", "정수기 이용", "콘센트 완비", "쾌적한 냉난방", "주차 지원"],
  },
  {
    name: "컨퍼런스룸",
    capacity: "10-20인",
    price: "70,000원",
    priceUnit: "/시간",
    image: "/images/meeting-room-1.jpg",
    features: ["대형 스크린", "빔프로젝터", "개인 콘센트", "쾌적한 냉난방", "주차 지원"],
  },
];

export default function MeetingRoomSection() {
  return (
    <section id="meeting-room" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Meeting Rooms
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D4E37] mb-6 leading-tight">
            파주 운정 회의실 대여<br />
            2~20인 미팅룸·컨퍼런스룸
          </h2>
          <p className="text-xl text-[#6B5D52] max-w-2xl">
            소규모 미팅은 시간당 10,000원, 20인까지 들어가는 컨퍼런스룸은
            시간당 70,000원입니다. 빔프로젝터와 대형 스크린, 주차를 지원합니다.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group relative overflow-hidden warm-shadow-lg hover:warm-shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={"OASIS 파주 운정 " + room.name + " " + room.capacity + " 내부"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-white p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-[#5D4E37] mb-2">{room.name}</h3>
                    <p className="text-[#6B5D52] flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {room.capacity}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#8B6F47]">{room.price}</div>
                    <div className="text-sm text-[#6B5D52]">{room.priceUnit}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-sm bg-[#F5F1E8] text-[#6B5D52] px-4 py-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#5D4E37] text-white px-10 py-5 text-lg font-semibold hover:bg-[#8B6F47] transition-colors group"
          >
            회의실 예약하기
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-6">
            <Link
              href="/meeting-room"
              className="text-[#8B6F47] font-semibold underline underline-offset-4 hover:text-[#5D4E37]"
            >
              미팅룸·컨퍼런스룸 상세 안내 보기
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
