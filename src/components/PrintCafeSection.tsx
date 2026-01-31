const services = [
  {
    name: "문서 출력",
    description: "A4/A3 흑백·컬러 출력",
    price: "흑백 70원 / 컬러 200원",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    name: "복사 서비스",
    description: "단면·양면 복사",
    price: "흑백 70원 / 컬러 200원",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "스캔 서비스",
    description: "PDF, JPG 등 다양한 포맷",
    price: "장당 100원~",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "팩스 전송",
    description: "국내 팩스 전송",
    price: "장당 500원",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    name: "코팅 서비스",
    description: "문서 코팅",
    price: "장당 1,000원",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function PrintCafeSection() {
  return (
    <section id="print-cafe" className="py-20 bg-[#EFF3ED] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#E8E3D9] to-[#D4CABD] rounded-2xl overflow-hidden warm-shadow-lg">
              <img
                src="/images/print-room.jpg"
                alt="OASIS 프린트카페"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-[#D4E0D0] text-[#5D6E59] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Print Cafe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
              모든 문서 작업을<br />한 곳에서
            </h2>
            <p className="text-lg text-[#6B5D52] mb-8 leading-relaxed">
              출력, 스캔, 복사, 팩스, 코팅까지.
              필요한 모든 문서 작업을 빠르고 합리적인 가격에 해결하세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-[#FFF9F0] rounded-xl p-4 border border-[#E8E3D9] hover:warm-shadow transition-all"
                >
                  <div className="w-12 h-12 bg-[#D4E0D0] text-[#5D6E59] rounded-lg flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-[#5D4E37] mb-1">{service.name}</h4>
                  <p className="text-sm text-[#6B5D52] mb-2">{service.description}</p>
                  <p className="text-sm font-medium text-[#7A9D7C]">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
