const benefits = [
  {
    title: "사업자등록 가능",
    description: "강남구 프리미엄 주소로 사업자등록이 가능합니다.",
  },
  {
    title: "우편물 관리",
    description: "우편물 수령, 보관, 알림 서비스를 제공합니다.",
  },
  {
    title: "전화 응대",
    description: "전문 상담원이 귀사의 전화를 대신 받아드립니다.",
  },
  {
    title: "회의실 이용",
    description: "월 일정 시간 회의실을 무료로 이용하실 수 있습니다.",
  },
];

export default function VirtualOfficeSection() {
  return (
    <section id="virtual-office" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Virtual Office
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              스마트한 비즈니스의 시작<br />비상주오피스
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              실제 사무실 없이도 비즈니스 주소를 확보하세요.
              강남의 프리미엄 주소로 기업 이미지를 높이고,
              우편물 관리부터 전화 응대까지 모든 것을 해결해 드립니다.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              상담 신청하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-emerald-600 font-medium">비상주오피스 이미지</p>
                <p className="text-emerald-500 text-sm mt-1">권장 크기: 800x600px</p>
              </div>
            </div>
            {/* Trust badge */}
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">사업자등록 가능</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
