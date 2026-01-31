export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B6F47] via-[#A8987A] to-[#C4B5A0] pt-16 paper-texture">
      {/* Wood grain subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v2H0zM0 20h100v2H0zM0 40h100v2H0zM0 60h100v2H0zM0 80h100v2H0z' fill='%235D4E37' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FFF9F0] mb-6 leading-tight">
          집중과 성장을 위한<br />
          <span className="text-[#F5E6D3]">최적의 공간</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#F5F1E8] mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          스터디카페 · 비상주오피스 · 회의실 · 프린트카페<br className="hidden sm:block" />
          당신의 목표 달성을 위한 모든 것이 준비되어 있습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#services"
            className="bg-[#FFF9F0] text-[#5D4E37] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F5F1E8] transition-all warm-shadow hover:warm-shadow-lg"
          >
            서비스 둘러보기
          </a>
          <a
            href="tel:010-2356-8836"
            className="border-2 border-[#FFF9F0] text-[#FFF9F0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFF9F0] hover:text-[#5D4E37] transition-all"
          >
            상담 문의하기
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-bold text-[#FFF9F0] mb-2">24H</div>
            <div className="text-[#F5E6D3]">연중무휴 운영</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-bold text-[#FFF9F0] mb-2">100+</div>
            <div className="text-[#F5E6D3]">좌석 보유</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-bold text-[#FFF9F0] mb-2">2개</div>
            <div className="text-[#F5E6D3]">회의실</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-bold text-[#FFF9F0] mb-2">2,000+</div>
            <div className="text-[#F5E6D3]">누적 회원</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#FFF9F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
