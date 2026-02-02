export default function EventSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#7A9D7C] via-[#8B6F47] to-[#E8B4A4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-white text-sm tracking-[0.3em] uppercase font-medium">
              🎉 Special Event
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            영수증 리뷰 이벤트
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            여러분의 소중한 후기를 남겨주세요!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Event Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 warm-shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Event Info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#7A9D7C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  진행중
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
                  리뷰 작성하고<br />
                  2시간 무료 이용권 받기
                </h3>
                <p className="text-[#6B5D52] mb-8 leading-relaxed">
                  OASIS를 이용하신 후 네이버 플레이스나 구글 리뷰에 후기를 남겨주세요.
                  영수증과 함께 리뷰 캡처를 제출하시면 2시간 무료 이용권을 드립니다!
                </p>

                {/* How to participate */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#7A9D7C] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                    <div>
                      <p className="text-[#5D4E37] font-medium">OASIS 이용 후 영수증 받기</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#7A9D7C] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                    <div>
                      <p className="text-[#5D4E37] font-medium">네이버/구글에 리뷰 작성</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#7A9D7C] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                    <div>
                      <p className="text-[#5D4E37] font-medium">카카오톡 친구추가 후 리뷰 캡처 + 영수증 전송</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#7A9D7C] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">4</div>
                    <div>
                      <p className="text-[#5D4E37] font-medium">카카오톡으로 쿠폰 받기 🎁</p>
                    </div>
                  </div>
                </div>

                <a
                  href="http://pf.kakao.com/_gpqxnK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FAE100] text-[#3C1E1E] px-8 py-4 text-lg font-semibold hover:bg-[#F5D800] transition-colors group"
                >
                  카카오톡 친구추가
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Right - Visual */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#F5E6D3] to-[#E8B4A4] rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl font-bold text-white mb-4">2H</div>
                    <div className="text-2xl font-semibold text-[#5D4E37]">무료 이용권</div>
                    <div className="mt-6 flex justify-center gap-4">
                      <svg className="w-12 h-12 text-[#7A9D7C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-12 h-12 text-[#7A9D7C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-12 h-12 text-[#7A9D7C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -top-4 -right-4 bg-[#E8B4A4] text-white px-6 py-3 rounded-full font-bold text-sm rotate-12 warm-shadow-lg">
                  선착순!
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mt-8 pt-8 border-t border-[#E8E3D9]">
              <p className="text-sm text-[#6B5D52] text-center">
                * 카카오톡 친구추가 후 영수증과 리뷰 캡처를 전송해주세요 |
                * 1인 1회 참여 가능 |
                * 이용권 유효기간: 발급일로부터 30일
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
