const services = [
  {
    id: "study-cafe",
    title: "스터디카페",
    description: "24시간 운영되는 프리미엄 학습 공간",
    image: "/images/study-cafe.jpg",
    features: ["개인좌석 100+", "24시간", "무료 음료"],
  },
  {
    id: "meeting-room",
    title: "회의실",
    description: "프레젠테이션과 미팅을 위한 공간",
    image: "/images/meeting-room-2.jpg",
    features: ["2~20인", "빔프로젝터", "화상회의"],
  },
  {
    id: "virtual-office",
    title: "비상주오피스",
    description: "사업자등록 가능한 비즈니스 주소",
    image: "/images/entrance.jpg",
    features: ["월 2만원~", "법인설립", "우편관리"],
  },
  {
    id: "print-cafe",
    title: "프린트카페",
    description: "모든 문서 작업을 한 곳에서",
    image: "/images/print-room.jpg",
    features: ["흑백 70원", "컬러 200원", "코팅·팩스"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Our Services
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5D4E37] mb-6 leading-tight">
            당신에게 필요한<br />
            모든 공간
          </h2>
          <p className="text-xl text-[#6B5D52] max-w-2xl">
            학습, 비즈니스, 미팅까지. OASIS는 하나의 공간에서 모든 것을 제공합니다.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {/* Study Cafe - Large */}
          <a
            href="#study-cafe"
            className="group md:col-span-2 md:row-span-2 relative overflow-hidden bg-white transition-all duration-500 hover:scale-[1.02] warm-shadow-lg"
          >
            <div className="absolute inset-0">
              <img src={services[0].image} alt={services[0].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/90 via-[#5D4E37]/40 to-transparent"></div>
            </div>
            <div className="relative h-full p-8 flex flex-col justify-end">
              <span className="text-white/80 text-sm mb-2">{services[0].description}</span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{services[0].title}</h3>
              <div className="flex gap-3">
                {services[0].features.map((feature) => (
                  <span key={feature} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </a>

          {/* Meeting Room */}
          <a
            href="#meeting-room"
            className="group md:col-span-2 relative overflow-hidden bg-white transition-all duration-500 hover:scale-[1.02] warm-shadow-lg"
          >
            <div className="absolute inset-0">
              <img src={services[1].image} alt={services[1].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/90 via-[#5D4E37]/40 to-transparent"></div>
            </div>
            <div className="relative h-full p-6 flex flex-col justify-end">
              <span className="text-white/80 text-sm mb-2">{services[1].description}</span>
              <h3 className="text-3xl font-bold text-white mb-3">{services[1].title}</h3>
              <div className="flex gap-2">
                {services[1].features.map((feature) => (
                  <span key={feature} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </a>

          {/* Virtual Office */}
          <a
            href="#virtual-office"
            className="group md:col-span-2 relative overflow-hidden bg-white transition-all duration-500 hover:scale-[1.02] warm-shadow-lg"
          >
            <div className="absolute inset-0">
              <img src={services[2].image} alt={services[2].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/90 via-[#5D4E37]/40 to-transparent"></div>
            </div>
            <div className="relative h-full p-6 flex flex-col justify-end">
              <span className="text-white/80 text-sm mb-2">{services[2].description}</span>
              <h3 className="text-3xl font-bold text-white mb-3">{services[2].title}</h3>
              <div className="flex gap-2">
                {services[2].features.map((feature) => (
                  <span key={feature} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </a>

          {/* Print Cafe */}
          <a
            href="#print-cafe"
            className="group md:col-span-2 relative overflow-hidden bg-white transition-all duration-500 hover:scale-[1.02] warm-shadow-lg"
          >
            <div className="absolute inset-0">
              <img src={services[3].image} alt={services[3].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/90 via-[#5D4E37]/40 to-transparent"></div>
            </div>
            <div className="relative h-full p-6 flex flex-col justify-end">
              <span className="text-white/80 text-sm mb-2">{services[3].description}</span>
              <h3 className="text-3xl font-bold text-white mb-3">{services[3].title}</h3>
              <div className="flex gap-2">
                {services[3].features.map((feature) => (
                  <span key={feature} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
