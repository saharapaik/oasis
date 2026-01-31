const rooms = [
  {
    name: "미팅룸 A",
    capacity: "2-4인",
    price: "시간당 15,000원",
    features: ["TV 모니터", "화이트보드", "무료 음료"],
  },
  {
    name: "미팅룸 B",
    capacity: "4-8인",
    price: "시간당 25,000원",
    features: ["빔프로젝터", "화상회의", "무료 음료"],
  },
  {
    name: "컨퍼런스룸",
    capacity: "10-20인",
    price: "시간당 50,000원",
    features: ["대형 스크린", "음향시스템", "케이터링 가능"],
  },
];

export default function MeetingRoomSection() {
  return (
    <section id="meeting-room" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Meeting Room
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            프리미엄 회의실
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            중요한 미팅과 프레젠테이션을 위한 최적의 공간.
            다양한 규모의 회의실을 합리적인 가격에 이용하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-amber-50 rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto text-amber-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-amber-600 text-sm">{room.name} 이미지</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {room.capacity}
                </span>
                <span className="text-amber-600 font-semibold">{room.price}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {room.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-white text-gray-600 px-3 py-1 rounded-full border border-amber-200"
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
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors"
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
