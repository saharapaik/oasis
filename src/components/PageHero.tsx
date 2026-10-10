import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/**
 * 하위 페이지 공통 머리말. H1 은 페이지마다 "지역 + 업종" 을 담는다 —
 * 홈의 H1("집중과 성장을 위한 공간")처럼 추상어만 있으면 검색어와 연결되지 않는다.
 */
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-28 pb-16 bg-[#FFF9F0] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <span className="mt-8 text-[#8B6F47] text-sm tracking-[0.3em] uppercase font-medium block">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D4E37] leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#6B5D52] leading-relaxed max-w-3xl">
          {lead}
        </p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
