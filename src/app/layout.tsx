import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "OASIS - 스터디카페 & 공유오피스",
  description: "스터디카페, 비상주오피스, 회의실대여, 프린트카페를 한 곳에서. 집중과 성장을 위한 최적의 공간, OASIS입니다.",
  keywords: "스터디카페, 공유오피스, 비상주오피스, 회의실대여, 프린트카페, 코워킹스페이스",
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
      </body>
    </html>
  );
}
