import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#5D4E37] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-[#E8B4A4]">
              OASIS
            </Link>
            <p className="mt-4 text-[#C4B5A0] leading-relaxed">
              집중과 성장을 위한 최적의 공간<br />
              스터디카페 & 공유오피스 OASIS에서<br />
              당신의 목표를 이루세요.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-[#C4B5A0]">
              <li><a href="#study-cafe" className="hover:text-[#F5F1E8] transition-colors">스터디카페</a></li>
              <li><a href="#virtual-office" className="hover:text-[#F5F1E8] transition-colors">비상주오피스</a></li>
              <li><a href="#meeting-room" className="hover:text-[#F5F1E8] transition-colors">회의실대여</a></li>
              <li><a href="#print-cafe" className="hover:text-[#F5F1E8] transition-colors">프린트카페</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-[#C4B5A0]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                010-2356-8836
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                solbay@naver.com
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                경기도 파주시 미래로 369-27<br />201호
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#8B6F47] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A8987A] text-sm">
            &copy; 2024 OASIS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[#A8987A] hover:text-[#F5F1E8] transition-colors text-sm">이용약관</a>
            <a href="#" className="text-[#A8987A] hover:text-[#F5F1E8] transition-colors text-sm">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
