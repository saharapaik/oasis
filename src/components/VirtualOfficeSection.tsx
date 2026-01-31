export default function VirtualOfficeSection() {
  return (
    <section id="virtual-office" className="py-32 bg-[#F5F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Image - 2 columns */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden warm-shadow-lg">
                <img
                  src="/images/entrance.jpg"
                  alt="OASIS 비상주오피스"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 warm-shadow">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#7A9D7C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-[#5D4E37]">사업자등록 가능</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#7A9D7C]/20 -z-10"></div>
            </div>
          </div>

          {/* Content - 3 columns */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <span className="text-[#7A9D7C] text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Virtual Office
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5D4E37] mb-8 leading-tight">
              스마트한 비즈니스의<br />
              시작
            </h2>
            <p className="text-xl text-[#6B5D52] mb-12 leading-relaxed max-w-xl">
              실제 사무실 없이도 파주 운정신도시의 프리미엄 비즈니스 주소를 확보하세요.
              사업자등록부터 법인설립까지 완벽 지원합니다.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">₩20K</div>
                <p className="text-[#6B5D52]">월 2만원부터 시작</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">100%</div>
                <p className="text-[#6B5D52]">사업자등록 지원</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">FREE</div>
                <p className="text-[#6B5D52]">우편물 관리</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">20%</div>
                <p className="text-[#6B5D52]">회의실 할인</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-3 bg-[#7A9D7C] text-white px-8 py-4 text-lg font-semibold hover:bg-[#5D6E59] transition-colors group"
              >
                플랜 확인하기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://docs.google.com/forms/d/1BLz6-VJ6ClRiciqbcQ9hcVM7oItdhsj2il-jkMpf1lk/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#7A9D7C] text-[#5D4E37] px-8 py-4 text-lg font-semibold hover:bg-[#F5F1E8] transition-colors group"
              >
                비상주오피스 신청하기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
