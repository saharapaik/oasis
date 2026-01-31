const rooms = [
  {
    name: "미팅룸",
    capacity: "2-4인",
    price: "시간당 5,000원",
    features: ["TV 모니터", "화이트보드", "무료 음료", "화상회의"],
  },
  {
    name: "컨퍼런스룸",
    capacity: "10-20인",
    price: "시간당 20,000원",
    features: ["대형 스크린", "음향시스템", "빔프로젝터", "케이터링 가능"],
  },
];

export default function MeetingRoomSection() {
  return (
    <section id="meeting-room" className="py-20 bg-white paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8B4A4] text-[#5D4E37] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Meeting Room
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            프리미엄 회의실
          </h2>
          <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
            중요한 미팅과 프레젠테이션을 위한 최적의 공간.
            다양한 규모의 회의실을 합리적인 가격에 이용하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9] hover:warm-shadow-lg transition-all"
            >
              {/* Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-[#E8E3D9] to-[#D4CABD] rounded-xl mb-4 overflow-hidden warm-shadow">
                <img
                  src={room.name === "미팅룸" ? "/images/meeting-room-2.jpg" : "/images/meeting-room-1.jpg"}
                  alt={`OASIS ${room.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#5D4E37] mb-2">{room.name}</h3>
              <div className="flex items-center gap-4 text-sm text-[#6B5D52] mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {room.capacity}
                </span>
                <span className="text-[#8B6F47] font-semibold">{room.price}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {room.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-white text-[#6B5D52] px-3 py-1 rounded-full border border-[#E8E3D9]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#8B6F47] text-[#FFF9F0] px-6 py-3 rounded-full font-semibold hover:bg-[#5D4E37] transition-colors warm-shadow"
          >
            회의실 예약하기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
