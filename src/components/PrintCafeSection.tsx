import Image from "next/image";
import Link from "next/link";

export default function PrintCafeSection() {
  return (
    <section id="print-cafe" className="py-32 bg-[#F5F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-[#7A9D7C] text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Print Cafe
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D4E37] mb-8 leading-tight">
              파주 운정 프린트카페<br />
              출력·복사·스캔·팩스
            </h2>
            <p className="text-xl text-[#6B5D52] mb-12 leading-relaxed max-w-xl">
              운정신도시에서 24시간 이용할 수 있는 프린트카페입니다.
              흑백 70원, 컬러 200원부터 출력·복사·스캔·팩스·코팅을 해결하세요.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">₩70</div>
                <p className="text-[#6B5D52]">흑백 출력/복사</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">₩200</div>
                <p className="text-[#6B5D52]">컬러 출력/복사</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">₩500</div>
                <p className="text-[#6B5D52]">팩스 전송</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#7A9D7C] mb-2">₩1K</div>
                <p className="text-[#6B5D52]">코팅 서비스</p>
              </div>
            </div>

            <p className="text-sm text-[#8B6F47] bg-[#FFF9F0] px-6 py-4">
              * 스캔 서비스: 100원/장 | 제본 서비스는 제공하지 않습니다
            </p>

            <p className="mt-6">
              <Link
                href="/print-cafe"
                className="text-[#7A9D7C] font-semibold underline underline-offset-4 hover:text-[#5D6E59]"
              >
                프린트카페 상세 안내 및 전체 가격표
              </Link>
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden warm-shadow-lg">
              <Image
                src="/images/print-room.jpg"
                alt="OASIS 파주 운정 프린트카페 복합기"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#7A9D7C]/20 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E8B4A4]/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
