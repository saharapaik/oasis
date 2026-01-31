const features = [
  {
    title: "개인 좌석",
    description: "넓은 책상과 편안한 의자로 장시간 학습도 문제없어요.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "스터디룸",
    description: "그룹 스터디나 토론에 적합한 독립된 공간을 제공합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "24시간 운영",
    description: "언제든 원하는 시간에 이용할 수 있습니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "무료 와이파이",
    description: "초고속 인터넷으로 끊김 없이 학습하세요.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "음료 무료제공",
    description: "커피, 차 등 다양한 음료를 무료로 즐기세요.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: "개인 사물함",
    description: "소지품을 안전하게 보관할 수 있는 개인 락커를 제공합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function StudyCafeSection() {
  return (
    <section id="study-cafe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {/* 실제 이미지가 들어갈 자리 */}
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-blue-600 font-medium">스터디카페 이미지</p>
                <p className="text-blue-500 text-sm mt-1">권장 크기: 800x600px</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-blue-100">좌석 보유</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Study Cafe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              집중력을 높이는<br />스터디카페
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              쾌적하고 조용한 환경에서 학습 효율을 극대화하세요.
              개인 좌석부터 그룹 스터디룸까지, 다양한 공간을 제공합니다.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
