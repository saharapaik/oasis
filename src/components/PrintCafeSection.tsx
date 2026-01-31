const services = [
  {
    name: "문서 출력",
    description: "A4/A3 흑백·컬러 출력",
    price: "흑백 50원~ / 컬러 200원~",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
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
    name: "복사 / 제본",
    description: "단면·양면 복사, 링·스프링 제본",
    price: "제본 1,500원~",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "명함 / 인쇄물",
    description: "명함, 전단지, 스티커 제작",
    price: "명함 100매 15,000원~",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
];

export default function PrintCafeSection() {
  return (
    <section id="print-cafe" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-purple-600 font-medium">프린트카페 이미지</p>
                <p className="text-purple-500 text-sm mt-1">권장 크기: 800x600px</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Print Cafe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              모든 문서 작업을<br />한 곳에서
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              출력, 스캔, 복사, 제본부터 명함 제작까지.
              필요한 모든 문서 작업을 빠르고 합리적인 가격에 해결하세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-white rounded-xl p-4 border border-purple-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                  <p className="text-sm font-medium text-purple-600">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
