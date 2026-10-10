import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { BIZ, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "파주 운정신도시 스터디카페 & 공유오피스 | 24시간 OASIS",
  description:
    "경기도 파주시 운정신도시 OASIS. 24시간 연중무휴 스터디카페(1시간 1,000원~), 사업자등록 가능한 비상주오피스(월 18,000원~), 2~20인 회의실 대여, 프린트카페. 미래로 369-27 201호, 주차 지원.",
  alternates: { canonical: "/" },
  /**
   * keywords 메타태그는 Google 이 오래전부터 무시한다 — 지역·업종 키워드는
   * 제목·H1·본문으로 옮겼다. (이전에는 9개를 여기에만 넣어 두어 아무 효과가 없었다.)
   */
  openGraph: {
    title: "파주 운정신도시 스터디카페 & 공유오피스 OASIS",
    description:
      "24시간 연중무휴 스터디카페, 사업자등록 가능한 비상주오피스, 2~20인 회의실, 프린트카페. 경기도 파주시 미래로 369-27 201호.",
    url: SITE_URL,
    siteName: "OASIS",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "파주 운정신도시 스터디카페 & 공유오피스 OASIS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "파주 운정신도시 스터디카페 & 공유오피스 OASIS",
    description:
      "24시간 연중무휴 스터디카페, 비상주오피스, 회의실 대여, 프린트카페. 파주시 미래로 369-27.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "85a9bb6d4ed4e7aa42b172159e39437a3a25c03f",
    },
  },
};

/** 24시간 연중무휴 — 요일 7개에 00:00~23:59 를 명시하는 것이 표준 표기다. */
const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL + "/#business",
  name: BIZ.name,
  alternateName: "OASIS 파주 운정점",
  description:
    "파주 운정신도시의 24시간 스터디카페이자 공유오피스. 비상주오피스 사업자등록 주소, 2~20인 회의실 대여, 프린트카페를 함께 운영합니다.",
  url: SITE_URL,
  telephone: BIZ.phone,
  email: BIZ.email,
  image: SITE_URL + "/og-image.png",
  logo: SITE_URL + "/og-image.png",
  priceRange: "₩1,000-₩79,000",
  currenciesAccepted: "KRW",
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.address.street,
    addressLocality: BIZ.address.locality,
    addressRegion: BIZ.address.region,
    postalCode: BIZ.address.postalCode,
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BIZ.geo.lat,
    longitude: BIZ.geo.lng,
  },
  hasMap: BIZ.naverMap,
  areaServed: [
    { "@type": "City", name: "파주시" },
    { "@type": "Place", name: "운정신도시" },
    { "@type": "Place", name: "교하" },
    { "@type": "Place", name: "덕이동" },
  ],
  openingHoursSpecification: [openingHours],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "24시간 운영", value: true },
    { "@type": "LocationFeatureSpecification", name: "주차 지원", value: true },
    { "@type": "LocationFeatureSpecification", name: "무료 Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "정수기", value: true },
    { "@type": "LocationFeatureSpecification", name: "프린터·복사기", value: true },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "OASIS 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        name: "스터디카페 좌석",
        url: SITE_URL + "/study-cafe",
        priceCurrency: "KRW",
        price: 1000,
      },
      {
        "@type": "Offer",
        name: "비상주오피스 (사업자등록 주소)",
        url: SITE_URL + "/virtual-office",
        priceCurrency: "KRW",
        price: 18000,
      },
      {
        "@type": "Offer",
        name: "회의실 대여",
        url: SITE_URL + "/meeting-room",
        priceCurrency: "KRW",
        price: 10000,
      },
      {
        "@type": "Offer",
        name: "프린트카페",
        url: SITE_URL + "/print-cafe",
        priceCurrency: "KRW",
        price: 70,
      },
    ],
  },
  sameAs: [BIZ.kakao],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <JsonLd data={localBusiness} />
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
        <Analytics />
      </body>
    </html>
  );
}
