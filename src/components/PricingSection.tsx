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
      price: "18,000",
      unit: "원/월",
      contract: "최소 3개월 계약",
      priceNote: "1년 기준 / 6개월 25,000원 / 3개월 30,000원",
      features: [
        "사업자등록 주소 제공",
      ],
      popular: false,
    },
    {
      name: "비상주 스탠다드",
      price: "35,000",
      unit: "원/월",
      contract: "최소 3개월 계약",
      priceNote: null,
      features: [
        "사업자등록 주소 제공",
        "법인설립 지원",
        "비즈니스라운지 월 1회",
        "컨퍼런스룸 10% 할인",
      ],
      popular: true,
    },
    {
      name: "비상주 프리미엄",
      price: "55,000",
      unit: "원/월",
      contract: "1개월부터 계약 가능",
      priceNote: null,
      features: [
        "사업자등록 주소 제공",
        "법인설립 지원",
        "우편물 알림 (사진전송)",
        "비즈니스라운지 월 4회",
        "컨퍼런스룸 20% 할인",
        "세무사 무료 상담 1회",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#F5F1E8] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
            요금 안내
          </h2>
          <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
            합리적인 가격으로 프리미엄 서비스를 경험하세요.
          </p>
        </div>

        {/* 스터디카페 요금 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#5D4E37] mb-8 text-center">
            스터디카페 이용요금
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 시간제 */}
            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9] warm-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#8B6F47] text-xl">★</span>
                <h4 className="text-xl font-bold text-[#5D4E37]">시간제</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {hourlyPrices.map((item) => (
                  <div
                    key={item.time}
                    className="flex justify-between py-2 px-3 bg-[#F5F1E8] rounded-lg"
                  >
                    <span className="text-[#6B5D52]">{item.time}</span>
                    <span className="font-semibold text-[#5D4E37]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 기간제 */}
            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9] warm-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#8B6F47] text-xl">★</span>
                <h4 className="text-xl font-bold text-[#5D4E37]">기간제</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {periodPrices.map((item) => (
                  <div
                    key={item.period}
                    className={`flex justify-between py-2 px-3 rounded-lg ${
                      item.period === "28일"
                        ? "bg-[#F5E6D3] border border-[#E8B4A4]"
                        : "bg-[#F5F1E8]"
                    }`}
                  >
                    <span className="text-[#6B5D52]">{item.period}</span>
                    <span className={`font-semibold ${
                      item.period === "28일" ? "text-[#8B6F47]" : "text-[#5D4E37]"
                    }`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#6B5D52] text-center">
                * 28일권이 가장 인기있는 상품입니다
              </p>
            </div>
          </div>
        </div>

        {/* 회의실 요금 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#5D4E37] mb-8 text-center">
            회의실 이용요금
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9] text-center warm-shadow">
              <div className="w-16 h-16 bg-[#F5E6D3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#5D4E37] mb-2">미팅룸</h4>
              <p className="text-[#6B5D52] mb-4">2~4인</p>
              <div className="text-3xl font-bold text-[#8B6F47]">5,000<span className="text-lg text-[#6B5D52]">원/시간</span></div>
            </div>

            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9] text-center warm-shadow">
              <div className="w-16 h-16 bg-[#F5E6D3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#5D4E37] mb-2">컨퍼런스룸</h4>
              <p className="text-[#6B5D52] mb-4">10~20인</p>
              <div className="text-3xl font-bold text-[#8B6F47]">70,000<span className="text-lg text-[#6B5D52]">원/시간</span></div>
            </div>
          </div>
        </div>

        {/* 프린트/복사 서비스 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#5D4E37] mb-8 text-center">
            프린트 & 부가서비스
          </h3>

          <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#E8E3D9] max-w-2xl mx-auto warm-shadow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-[#F5F1E8] rounded-xl">
                <p className="text-[#6B5D52] text-sm mb-1">문서출력 (흑백)</p>
                <p className="text-xl font-bold text-[#5D4E37]">70원~</p>
              </div>
              <div className="text-center p-4 bg-[#F5F1E8] rounded-xl">
                <p className="text-[#6B5D52] text-sm mb-1">문서출력 (컬러)</p>
                <p className="text-xl font-bold text-[#5D4E37]">200원</p>
              </div>
              <div className="text-center p-4 bg-[#F5F1E8] rounded-xl">
                <p className="text-[#6B5D52] text-sm mb-1">복사 (흑백)</p>
                <p className="text-xl font-bold text-[#5D4E37]">70원~</p>
              </div>
              <div className="text-center p-4 bg-[#F5F1E8] rounded-xl">
                <p className="text-[#6B5D52] text-sm mb-1">복사 (컬러)</p>
                <p className="text-xl font-bold text-[#5D4E37]">200원</p>
              </div>
              <div className="text-center p-4 bg-[#F5F1E8] rounded-xl">
                <p className="text-[#6B5D52] text-sm mb-1">팩스발송</p>
                <p className="text-xl font-bold text-[#5D4E37]">500원</p>
              </div>
              <div className="text-center p-4 bg-[#F5F1E8] rounded-xl">
                <p className="text-[#6B5D52] text-sm mb-1">코팅</p>
                <p className="text-xl font-bold text-[#5D4E37]">1,000원</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B5D52] text-center">* 제본 서비스는 제공하지 않습니다</p>
          </div>
        </div>

        {/* 비상주오피스 요금 */}
        <div>
          <h3 className="text-2xl font-bold text-[#5D4E37] mb-8 text-center">
            비상주오피스 요금
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {officePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-[#FFF9F0] rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? "border-[#7A9D7C] warm-shadow-lg scale-105"
                    : "border-[#E8E3D9]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7A9D7C] text-[#FFF9F0] px-4 py-1 rounded-full text-sm font-medium">
                    추천
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-[#5D4E37] mb-2">{plan.name}</h4>
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#5D4E37]">{plan.price}</span>
                  <span className="text-[#6B5D52]">{plan.unit}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.popular ? "text-[#7A9D7C]" : "text-[#A8B5A0]"
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
                      <span className="text-[#5D4E37]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? "bg-[#7A9D7C] text-[#FFF9F0] hover:bg-[#5D6E59]"
                      : "bg-[#E8E3D9] text-[#5D4E37] hover:bg-[#D4CABD]"
                  }`}
                >
                  상담 신청
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-[#6B5D52] text-sm">
          <p>* 장기 계약 시 할인 혜택이 제공됩니다.</p>
          <p>* 자세한 사항은 전화 문의 부탁드립니다.</p>
        </div>
      </div>
    </section>
  );
}
