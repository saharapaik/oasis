const plans = [
  {
    name: "시간권",
    description: "필요할 때만 잠깐 이용하세요",
    price: "2,000",
    unit: "원/시간",
    features: [
      "개인 좌석 이용",
      "무료 와이파이",
      "음료 무료제공",
      "충전기 대여",
    ],
    popular: false,
    color: "gray",
  },
  {
    name: "정기권",
    description: "가장 인기 있는 요금제",
    price: "150,000",
    unit: "원/월",
    features: [
      "무제한 이용 (24시간)",
      "지정석 배정",
      "개인 사물함",
      "스터디룸 월 4시간 무료",
      "프린트 30매 무료",
    ],
    popular: true,
    color: "blue",
  },
  {
    name: "비상주오피스",
    description: "비즈니스 주소가 필요하다면",
    price: "100,000",
    unit: "원/월",
    features: [
      "사업자등록 주소",
      "우편물 수령/보관",
      "전화 응대 서비스",
      "회의실 월 2시간 무료",
      "스터디카페 월 10시간 무료",
    ],
    popular: false,
    color: "emerald",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            요금 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            합리적인 가격으로 프리미엄 서비스를 경험하세요.
            필요에 맞는 요금제를 선택하실 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                plan.popular
                  ? "border-blue-500 shadow-xl scale-105"
                  : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  인기
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.popular ? "text-blue-500" : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                신청하기
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>* 모든 요금은 부가세 포함입니다.</p>
          <p>* 장기 계약 시 할인 혜택이 제공됩니다. 자세한 사항은 문의해 주세요.</p>
        </div>
      </div>
    </section>
  );
}
