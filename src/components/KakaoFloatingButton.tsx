"use client";

export default function KakaoFloatingButton() {
  return (
    <a
      href="http://pf.kakao.com/_gpqxnK"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-4 py-3 rounded-full font-semibold shadow-lg hover:bg-[#FFD700] hover:scale-105 transition-all duration-200"
      aria-label="카카오톡 채널 문의"
    >
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.454 1.584 4.617 4 5.932V21l4.194-2.097C10.784 18.97 11.388 19 12 19c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
      </svg>
      <span className="text-sm">카카오 문의</span>
    </a>
  );
}
