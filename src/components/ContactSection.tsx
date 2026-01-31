export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#FFF9F0] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Contact & Location
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5D4E37] mb-6">
            오시는 길 & 문의
          </h2>
          <p className="text-xl text-[#6B5D52]">
            OASIS에서 여러분을 기다리고 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-gray-100 rounded-2xl overflow-hidden warm-shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=경기도+파주시+미래로+369-27&hl=ko&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5E6D3] text-[#8B6F47] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5D4E37] mb-1">주소</h4>
                  <p className="text-[#6B5D52]">경기도 파주시 미래로 369-27</p>
                  <p className="text-[#6B5D52]">201호</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5E6D3] text-[#8B6F47] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5D4E37] mb-1">전화번호</h4>
                  <a href="tel:010-2356-8836" className="text-[#8B6F47] hover:underline text-lg font-medium">
                    010-2356-8836
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5E6D3] text-[#8B6F47] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5D4E37] mb-1">이메일</h4>
                  <a href="mailto:solbay@naver.com" className="text-[#8B6F47] hover:underline">
                    solbay@naver.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5E6D3] text-[#8B6F47] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5D4E37] mb-1">운영시간</h4>
                  <p className="text-[#6B5D52]">24시간 연중무휴</p>
                </div>
              </div>

              {/* Transportation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5E6D3] text-[#8B6F47] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5D4E37] mb-1">찾아오시는 길</h4>
                  <p className="text-[#6B5D52]">운정신도시 내 위치</p>
                  <p className="text-[#6B5D52]">주차 가능</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:010-2356-8836"
                className="flex items-center justify-center gap-2 bg-[#8B6F47] text-[#FFF9F0] px-6 py-4 rounded-full font-semibold hover:bg-[#5D4E37] transition-colors warm-shadow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 문의
              </a>
              <a
                href="https://map.naver.com/p/search/경기도 파주시 미래로 369-27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[#8B6F47] text-[#5D4E37] px-6 py-4 rounded-full font-semibold hover:bg-[#F5F1E8] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                네이버 지도에서 보기
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form / Inquiry CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 warm-shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
                문의하기
              </h3>
              <p className="text-[#6B5D52] text-lg">
                궁금한 사항이 있으시면 편하게 연락주세요
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <a
                href="tel:010-2356-8836"
                className="group flex flex-col items-center p-8 bg-[#F5F1E8] hover:bg-[#F5E6D3] rounded-xl transition-colors"
              >
                <div className="w-20 h-20 bg-[#8B6F47] text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#5D4E37] mb-2 text-lg">전화 문의</h4>
                <p className="text-lg font-semibold text-[#8B6F47] mb-2">010-2356-8836</p>
                <p className="text-sm text-[#6B5D52] text-center">즉시 상담 가능</p>
              </a>

              {/* Kakao */}
              <a
                href="http://pf.kakao.com/_gpqxnK"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-[#FEE500] hover:bg-[#FFD700] rounded-xl transition-colors relative"
              >
                <div className="absolute top-4 right-4 bg-[#FF3D00] text-white text-xs px-3 py-1 rounded-full font-bold">
                  추천!
                </div>
                <div className="w-20 h-20 bg-[#3C1E1E] text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.454 1.584 4.617 4 5.932V21l4.194-2.097C10.784 18.97 11.388 19 12 19c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#3C1E1E] mb-2 text-lg">카카오톡 채널</h4>
                <p className="text-sm text-[#3C1E1E] text-center font-medium mb-1">채널 추가 후 문의 가능</p>
                <p className="text-xs text-[#3C1E1E]/70 text-center">클릭하여 채널을 추가해주세요</p>
              </a>
            </div>

            {/* Email info (non-clickable) */}
            <div className="mt-6 p-4 bg-[#F5F1E8] rounded-lg text-center">
              <p className="text-sm text-[#6B5D52]">
                이메일 문의: <span className="font-semibold text-[#5D4E37]">solbay@naver.com</span>
              </p>
              <p className="text-xs text-[#6B5D52] mt-1">
                * 빠른 답변을 원하시면 전화 또는 카카오톡을 이용해주세요
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-[#6B5D52]">
                운영시간: 24시간 연중무휴 | 문의 답변: 평일 09:00-21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
