export default function StudyCafeSection() {
  return (
    <section id="study-cafe" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Content - 3 columns */}
          <div className="lg:col-span-3">
            <span className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Study Cafe
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5D4E37] mb-8 leading-tight">
              집중력을 극대화하는<br />
              프리미엄 학습 공간
            </h2>
            <p className="text-xl text-[#6B5D52] mb-12 leading-relaxed max-w-xl">
              24시간 운영되는 쾌적한 환경에서 당신의 학습 효율을 극대화하세요.
              개인 좌석부터 그룹 스터디룸까지, 모든 것이 준비되어 있습니다.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-[#8B6F47] mb-2">100+</div>
                <p className="text-[#6B5D52]">프리미엄 개인 좌석</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#8B6F47] mb-2">24/7</div>
                <p className="text-[#6B5D52]">연중무휴 운영</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#8B6F47] mb-2">FREE</div>
                <p className="text-[#6B5D52]">정수기 & 휴게실</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#8B6F47] mb-2">1Gbps</div>
                <p className="text-[#6B5D52]">초고속 인터넷</p>
              </div>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-[#5D4E37] text-white px-8 py-4 text-lg font-semibold hover:bg-[#8B6F47] transition-colors group"
            >
              요금 확인하기
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image - 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden warm-shadow-lg">
                <img
                  src="/images/study-cafe.jpg"
                  alt="OASIS 스터디카페"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E8B4A4]/20 -z-10"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#A8B5A0]/20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
