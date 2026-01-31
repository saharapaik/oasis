export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/study-cafe.jpg"
          alt="OASIS 스터디카페"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D4E37]/95 via-[#8B6F47]/90 to-[#A8987A]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-[#F5E6D3] text-sm tracking-[0.3em] uppercase font-medium">
              Premium Study & Coworking Space
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
            집중과 성장을<br />
            위한 공간,<br />
            <span className="text-[#E8B4A4]">OASIS</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            24시간 운영되는 프리미엄 스터디카페와 비상주오피스.<br />
            당신의 목표를 현실로 만드는 최적의 환경을 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#services"
              className="group relative overflow-hidden bg-white text-[#5D4E37] px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 warm-shadow-lg"
            >
              <span className="relative z-10">서비스 둘러보기</span>
              <div className="absolute inset-0 bg-[#F5E6D3] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="tel:010-2356-8836"
              className="border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#5D4E37] transition-all duration-300"
            >
              상담 문의하기
            </a>
          </div>

          {/* Stats - Horizontal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">24H</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">연중무휴</div>
            </div>
            <div className="text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">100+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">좌석</div>
            </div>
            <div className="text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">2개</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">회의실</div>
            </div>
            <div className="text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">2K+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">회원</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
