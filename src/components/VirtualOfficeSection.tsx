const benefits = [
  {
    title: "사업자등록 가능",
    description: "파주시 주소로 사업자등록이 가능합니다.",
  },
  {
    title: "법인설립 지원",
    description: "법인설립에 필요한 주소 제공 및 안내 서비스를 제공합니다.",
  },
  {
    title: "회의실 할인",
    description: "필요시 회의실을 할인된 가격으로 이용하실 수 있습니다.",
  },
  {
    title: "스터디카페 무료",
    description: "플랜에 따라 스터디카페 무료 이용 시간을 제공합니다.",
  },
];

export default function VirtualOfficeSection() {
  return (
    <section id="virtual-office" className="py-20 bg-[#F5F7F4] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-[#D4E0D0] text-[#5D6E59] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Virtual Office
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
              스마트한 비즈니스의 시작<br />비상주오피스
            </h2>
            <p className="text-lg text-[#6B5D52] mb-8 leading-relaxed">
              실제 사무실 없이도 비즈니스 주소를 확보하세요.
              파주 운정신도시에서 사업자등록부터 법인설립 지원,
              회의실 할인까지 스마트한 비즈니스를 시작하세요.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#7A9D7C] text-[#FFF9F0] rounded-full flex items-center justify-center shrink-0 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5D4E37]">{benefit.title}</h4>
                    <p className="text-[#6B5D52]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#7A9D7C] text-[#FFF9F0] px-6 py-3 rounded-full font-semibold hover:bg-[#5D6E59] transition-colors warm-shadow"
            >
              상담 신청하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#E8E3D9] to-[#D4CABD] rounded-2xl overflow-hidden warm-shadow-lg">
              <img
                src="/images/entrance.jpg"
                alt="OASIS 비상주오피스 입구"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Trust badge */}
            <div className="absolute top-4 right-4 bg-[#FFF9F0] px-4 py-2 rounded-lg warm-shadow flex items-center gap-2">
              <svg className="w-5 h-5 text-[#7A9D7C]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[#5D4E37]">사업자등록 가능</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
