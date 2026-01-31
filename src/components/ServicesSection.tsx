const services = [
  {
    id: "study-cafe",
    title: "스터디카페",
    description: "쾌적한 환경에서 집중력 있는 학습을 경험하세요. 개인 좌석부터 스터디룸까지 다양한 공간을 제공합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ["개인 좌석", "스터디룸", "24시간 운영", "무료 와이파이"],
    color: "blue",
  },
  {
    id: "virtual-office",
    title: "비상주오피스",
    description: "실제 사무실 없이도 비즈니스 주소와 우편물 관리 서비스를 이용하세요. 사업자등록 가능합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["사업자등록", "우편물 관리", "비즈니스 주소", "전화 응대"],
    color: "emerald",
  },
  {
    id: "meeting-room",
    title: "회의실대여",
    description: "중요한 미팅과 프레젠테이션을 위한 프리미엄 회의 공간. 최신 장비와 편의시설을 갖추고 있습니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ["2~20인실", "빔프로젝터", "화상회의 장비", "음료 제공"],
    color: "amber",
  },
  {
    id: "print-cafe",
    title: "프린트카페",
    description: "문서 출력부터 스캔, 복사, 제본까지. 필요한 모든 문서 작업을 한 곳에서 해결하세요.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    features: ["컬러/흑백 출력", "스캔", "제본", "명함 제작"],
    color: "purple",
  },
];

const colorStyles = {
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    hover: "hover:border-blue-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    hover: "hover:border-emerald-200",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    hover: "hover:border-amber-200",
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
    hover: "hover:border-purple-200",
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OASIS의 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 목적에 맞는 공간과 서비스를 제공합니다.<br />
            당신의 필요에 맞는 서비스를 선택하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const style = colorStyles[service.color as keyof typeof colorStyles];
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 ${style.hover} transition-all hover:shadow-lg`}
              >
                <div className={`w-14 h-14 ${style.iconBg} ${style.iconText} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className={`text-xs px-2 py-1 rounded-full ${style.badge}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
