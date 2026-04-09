import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";

export const metadata: Metadata = {
  title: "OASIS - 파주 운정신도시 스터디카페 & 공유오피스",
  description: "경기도 파주시 운정신도시 스터디카페, 비상주오피스, 회의실 대여, 프린트카페. 24시간 연중무휴 운영. 합리적인 가격의 프리미엄 공간, OASIS.",
  keywords: "파주 스터디카페, 운정신도시 스터디카페, 파주 공유오피스, 운정 비상주오피스, 파주 회의실대여, 운정 프린트카페, 파주 코워킹스페이스, 운정신도시 독서실, 파주 사업자등록",
  metadataBase: new URL("https://oasis-study.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OASIS - 파주 운정신도시 스터디카페 & 공유오피스",
    description: "경기도 파주시 운정신도시 스터디카페, 비상주오피스, 회의실 대여, 프린트카페. 24시간 연중무휴.",
    url: "https://oasis-study.vercel.app",
    siteName: "OASIS",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="85a9bb6d4ed4e7aa42b172159e39437a3a25c03f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "OASIS 스터디카페 & 공유오피스",
              "description": "파주 운정신도시 스터디카페, 비상주오피스, 회의실 대여, 프린트카페. 24시간 연중무휴.",
              "url": "https://oasis-study.vercel.app",
              "telephone": "010-2356-8836",
              "email": "solbay@naver.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "미래로 369-27 201호",
                "addressLocality": "파주시",
                "addressRegion": "경기도",
                "addressCountry": "KR"
              },
              "openingHours": "Mo-Su 00:00-24:00",
              "priceRange": "₩",
              "sameAs": [
                "http://pf.kakao.com/_gpqxnK"
              ]
            })
          }}
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <KakaoFloatingButton />
      </body>
    </html>
  );
}
