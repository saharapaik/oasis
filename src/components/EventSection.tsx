import Image from "next/image";
import { BIZ } from "@/lib/site";

/**
 * 영수증 리뷰 이벤트 — 네이버 플레이스 방문자 리뷰로 일원화 (2026-11-12).
 * 이전에는 "네이버/구글 중 택일"이었는데, 지역 검색 노출은 네이버 플레이스 리뷰 수가 가르므로
 * 한 곳에 몰아준다. 구글 비즈니스 프로필은 아직 등록 전이라 구글 리뷰는 관리도 못 한다.
 */
const steps = [
  { n: "1", title: "OASIS 이용 후 영수증 받기", body: "키오스크 결제 영수증이면 됩니다. 사진으로 찍어 두세요." },
  { n: "2", title: "네이버 지도에서 영수증 리뷰 작성", body: "네이버 지도 앱 → OASIS 스터디카페 검색 → 리뷰 → 영수증 인증 후 작성." },
  { n: "3", title: "카카오톡 채널로 리뷰 캡처 전송", body: "친구추가 후 작성한 리뷰 화면 캡처를 보내주세요." },
  { n: "4", title: "2시간 무료 이용권 받기", body: "확인 즉시 카카오톡으로 쿠폰 링크를 보내드립니다." },
];

export default function EventSection() {
  return (
    <section id="event" className="relative overflow-hidden bg-gradient-to-br from-[#7A9D7C] via-[#8B6F47] to-[#E8B4A4] py-28">
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-white">🎉 Review Event</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            네이버 영수증 리뷰 이벤트
          </h2>
          <p className="text-lg text-white/90 md:text-2xl">
            네이버 지도에 영수증 리뷰를 남기면 <strong className="font-bold">2시간 무료 이용권</strong>을 드립니다
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl bg-white/95 p-8 backdrop-blur-sm warm-shadow-lg md:p-12">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-4 py-2 text-sm font-semibold text-white">
                <span className="font-black">N</span> 네이버 플레이스 리뷰
              </div>
              <h3 className="mb-4 text-3xl font-bold text-[#5D4E37] md:text-4xl">
                리뷰 한 번에
                <br />
                2시간 무료
              </h3>
              <p className="mb-8 leading-relaxed text-[#6B5D52]">
                구글이 아니라 <strong>네이버 지도 영수증 리뷰</strong>만 인정됩니다. 네이버 지도 앱에서
                OASIS를 검색해 영수증을 인증하고 리뷰를 쓴 뒤, 카카오톡으로 캡처를 보내주시면 됩니다.
              </p>

              <ol className="mb-8 space-y-4">
                {steps.map((s) => (
                  <li key={s.n} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A9D7C] text-sm font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-semibold text-[#5D4E37]">{s.title}</p>
                      <p className="text-sm text-[#6B5D52]">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={BIZ.naverPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#03C75A] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#02B351]"
                >
                  <span className="font-black">N</span> 네이버 지도에서 OASIS 보기
                </a>
                <a
                  href={BIZ.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAE100] px-6 py-4 text-base font-semibold text-[#3C1E1E] transition-colors hover:bg-[#F5D800]"
                >
                  카카오톡 채널 친구추가
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/study-cafe.jpg"
                  alt="OASIS 파주 운정 스터디카페 좌석"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/90 via-[#5D4E37]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-center text-white">
                  <div className="text-7xl font-bold md:text-8xl">2H</div>
                  <div className="mt-1 text-xl font-semibold">무료 이용권</div>
                  <div className="mt-2 text-sm text-white/80">시간제 2시간권 · 유효기간 30일</div>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 rotate-12 rounded-full bg-[#E8B4A4] px-5 py-2 text-sm font-bold text-white warm-shadow-lg">
                1인 1회
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#E8E3D9] pt-6 text-center text-sm text-[#6B5D52]">
            * 네이버 지도 영수증 리뷰만 인정 · 1인 1회 · 이용권 유효기간 발급일로부터 30일 · 리뷰 삭제 시 이용권 회수
          </div>
        </div>
      </div>
    </section>
  );
}
