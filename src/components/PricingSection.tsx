export default function PricingSection() {
  const hourlyPrices = [
    { time: "1시간", price: "1,000원" },
    { time: "2시간", price: "2,000원" },
    { time: "3시간", price: "3,000원" },
    { time: "4시간", price: "4,000원" },
    { time: "5시간", price: "5,000원" },
    { time: "6시간", price: "5,500원" },
    { time: "7시간", price: "6,000원" },
    { time: "8시간", price: "6,500원" },
    { time: "9시간", price: "7,000원" },
    { time: "10시간", price: "7,500원" },
    { time: "11시간", price: "8,000원" },
    { time: "12시간", price: "8,500원" },
  ];

  const periodPrices = [
    { period: "1일", price: "9,000원" },
    { period: "2일", price: "16,000원" },
    { period: "3일", price: "23,000원" },
    { period: "4일", price: "29,000원" },
    { period: "5일", price: "35,000원" },
    { period: "6일", price: "40,000원" },
    { period: "7일", price: "45,000원" },
    { period: "14일", price: "60,000원" },
    { period: "28일", price: "79,000원" },
  ];

  const officePlans = [
    {
      name: "비상주 베이직",
      price: "30,000",
      unit: "원/월",
      features: [
        "사업자등록 주소 제공",
        "우편물 수령 알림",
        "세무서 실사 대응",
      ],
      popular: false,
    },
    {
      name: "비상주 스탠다드",
      price: "50,000",
      unit: "원/월",
      features: [
        "사업자등록 주소 제공",
        "우편물 수령/보관/전달",
        "세무서 실사 대응",
        "스터디카페 월 10시간 무료",
      ],
      popular: true,
    },
    {
      name: "비상주 프리미엄",
      price: "80,000",
      unit: "원/월",
      features: [
        "사업자등록 주소 제공",
        "우편물 수령/보관/전달",
        "세무서 실사 대응",
        "회의실 월 2시간 무료",
        "스터디카페 월 20시간 무료",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            요금 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            합리적인 가격으로 프리미엄 서비스를 경험하세요.
          </p>
        </div>

        {/* 스터디카페 요금 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            스터디카페 이용요금
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 시간제 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-xl">★</span>
                <h4 className="text-xl font-bold text-gray-900">시간제</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {hourlyPrices.map((item) => (
                  <div
                    key={item.time}
                    className="flex justify-between py-2 px-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700">{item.time}</span>
                    <span className="font-semibold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 기간제 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-xl">★</span>
                <h4 className="text-xl font-bold text-gray-900">기간제</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {periodPrices.map((item) => (
                  <div
                    key={item.period}
                    className={`flex justify-between py-2 px-3 rounded-lg ${
                      item.period === "28일"
                        ? "bg-blue-50 border border-blue-200"
                        : "bg-gray-50"
                    }`}
                  >
                    <span className="text-gray-700">{item.period}</span>
                    <span className={`font-semibold ${
                      item.period === "28일" ? "text-blue-600" : "text-gray-900"
                    }`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500 text-center">
                * 28일권이 가장 인기있는 상품입니다
              </p>
            </div>
          </div>
        </div>

        {/* 비상주오피스 요금 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            비상주오피스 요금
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {officePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? "border-emerald-500 shadow-xl scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    추천
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
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
                          plan.popular ? "text-emerald-500" : "text-gray-400"
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
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  상담 신청
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>* 장기 계약 시 할인 혜택이 제공됩니다.</p>
          <p>* 자세한 사항은 전화 문의 부탁드립니다.</p>
        </div>
      </div>
    </section>
  );
}
