import Link from "next/link";
import { BIZ, SERVICE_PAGES } from "@/lib/site";

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
              파주 운정신도시 스터디카페 &amp; 공유오피스 OASIS.
              <br />
              24시간 연중무휴 스터디카페, 사업자등록 가능한 비상주오피스,
              <br />
              2~20인 회의실과 프린트카페를 한 건물에서 운영합니다.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-[#C4B5A0]">
              {SERVICE_PAGES.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="hover:text-[#F5F1E8] transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-[#C4B5A0]">
              <li>
                <a href={"tel:" + BIZ.phone} className="hover:text-[#F5F1E8]">
                  {BIZ.phone}
                </a>
              </li>
              <li>{BIZ.email}</li>
              <li>
                경기도 파주시 미래로 369-27
                <br />
                201호 ({BIZ.address.area})
              </li>
              <li>{BIZ.hours}</li>
              <li>
                <a
                  href={BIZ.naverMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F1E8] underline"
                >
                  네이버 지도에서 보기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#8B6F47]">
          <p className="text-[#A8987A] text-sm">
            &copy; {new Date().getFullYear()} OASIS 스터디카페 &amp; 공유오피스. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
