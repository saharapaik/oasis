/**
 * 사이트 전역 상수 — 주소·연락처·요금은 이 파일 하나만 고치면
 * 페이지 본문, 사이트맵, JSON-LD 구조화 데이터가 함께 따라온다.
 * (NAP 정보가 페이지마다 어긋나면 로컬 SEO에서 가장 먼저 깎인다.)
 */

import type { Metadata } from "next";

export const SITE_URL = "https://oasis-study.vercel.app";

/**
 * Next 는 페이지가 openGraph 를 정의하면 루트 값을 상속하지 않고 통째로 덮어쓴다.
 * 하위 페이지마다 이걸 펼쳐 써야 og:image 가 빠지지 않는다.
 */
export const OG_BASE: Metadata["openGraph"] = {
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
};

export const BIZ = {
  name: "OASIS 스터디카페 & 공유오피스",
  shortName: "OASIS",
  phone: "010-2356-8836",
  email: "solbay@naver.com",
  kakao: "http://pf.kakao.com/_gpqxnK",
  naverMap: "https://map.naver.com/p/search/경기도 파주시 미래로 369-27",
  applyForm:
    "https://docs.google.com/forms/d/1BLz6-VJ6ClRiciqbcQ9hcVM7oItdhsj2il-jkMpf1lk/viewform",
  address: {
    street: "미래로 369-27 201호",
    locality: "파주시",
    region: "경기도",
    postalCode: "10905",
    full: "경기도 파주시 미래로 369-27 201호",
    area: "운정신도시",
  },
  geo: { lat: 37.71154, lng: 126.745443 },
  hours: "24시간 연중무휴",
} as const;

/** 하위 페이지 — 사이트맵·헤더·푸터·서비스 카드가 같은 목록을 공유한다. */
export const SERVICE_PAGES = [
  {
    path: "/study-cafe",
    label: "스터디카페",
    navLabel: "스터디카페",
    title: "파주 운정 스터디카페",
    priority: 0.9,
  },
  {
    path: "/virtual-office",
    label: "비상주오피스",
    navLabel: "비상주오피스",
    title: "파주 운정 비상주오피스",
    priority: 0.9,
  },
  {
    path: "/meeting-room",
    label: "회의실 대여",
    navLabel: "회의실",
    title: "파주 운정 회의실 대여",
    priority: 0.9,
  },
  {
    path: "/print-cafe",
    label: "프린트카페",
    navLabel: "프린트카페",
    title: "파주 운정 프린트카페",
    priority: 0.8,
  },
  {
    path: "/pricing",
    label: "요금 안내",
    navLabel: "요금안내",
    title: "OASIS 요금 안내",
    priority: 0.8,
  },
] as const;

/** 스터디카페 시간제 요금 */
export const HOURLY_PRICES = [
  { time: "1시간", price: "1,000원" },
  { time: "2시간", price: "2,000원" },
  { time: "3시간", price: "3,000원" },
  { time: "4시간", price: "4,000원" },
  { time: "5시간", price: "5,000원" },
  { time: "6시간", price: "5,500원" },
  { time: "7시간", price: "6,000원" },
  { time: "8시간", price: "6,500원" },
  { time: "9시간", price: "7,000원" },
  { time: "10시간", price: "7,500원" },
  { time: "11시간", price: "8,000원" },
  { time: "12시간", price: "8,500원" },
] as const;

/** 스터디카페 기간제 요금 */
export const PERIOD_PRICES = [
  { period: "1일", price: "9,000원" },
  { period: "2일", price: "16,000원" },
  { period: "3일", price: "23,000원" },
  { period: "4일", price: "29,000원" },
  { period: "5일", price: "35,000원" },
  { period: "6일", price: "40,000원" },
  { period: "7일", price: "45,000원" },
  { period: "14일", price: "60,000원" },
  { period: "28일", price: "79,000원" },
] as const;

export const MEETING_ROOMS = [
  {
    name: "미팅룸",
    capacity: "2-4인",
    price: "10,000원",
    priceValue: 10000,
    priceUnit: "/시간",
    image: "/images/meeting-room-2.jpg",
    alt: "OASIS 파주 운정 미팅룸 2-4인 소회의실 내부",
    features: ["무료 Wi-Fi", "정수기 이용", "콘센트 완비", "쾌적한 냉난방", "주차 지원"],
  },
  {
    name: "컨퍼런스룸",
    capacity: "10-20인",
    price: "70,000원",
    priceValue: 70000,
    priceUnit: "/시간",
    image: "/images/meeting-room-1.jpg",
    alt: "OASIS 파주 운정 컨퍼런스룸 10-20인 대회의실 내부",
    features: ["대형 스크린", "빔프로젝터", "개인 콘센트", "쾌적한 냉난방", "주차 지원"],
  },
] as const;

export const OFFICE_PLANS = [
  {
    name: "비상주 베이직",
    price: "18,000",
    priceValue: 18000,
    unit: "원/월",
    contract: "최소 3개월 계약",
    priceNote: "1년 기준 / 6개월 25,000원 / 3개월 30,000원",
    features: ["사업자등록 주소 제공"],
    popular: false,
  },
  {
    name: "비상주 스탠다드",
    price: "35,000",
    priceValue: 35000,
    unit: "원/월",
    contract: "최소 3개월 계약",
    priceNote: null,
    features: [
      "사업자등록 주소 제공",
      "법인설립 지원",
      "비즈니스라운지 월 1회",
      "컨퍼런스룸 10% 할인",
    ],
    popular: true,
  },
  {
    name: "비상주 프리미엄",
    price: "55,000",
    priceValue: 55000,
    unit: "원/월",
    contract: "1개월부터 계약 가능",
    priceNote: null,
    features: [
      "사업자등록 주소 제공",
      "법인설립 지원",
      "우편물 알림 (사진전송)",
      "비즈니스라운지 월 4회",
      "컨퍼런스룸 20% 할인",
      "세무사 무료 상담 1회",
    ],
    popular: false,
  },
] as const;

export const PRINT_PRICES = [
  { label: "문서출력 (흑백)", price: "70원~" },
  { label: "문서출력 (컬러)", price: "200원" },
  { label: "복사 (흑백)", price: "70원~" },
  { label: "복사 (컬러)", price: "200원" },
  { label: "스캔", price: "100원/장" },
  { label: "팩스 발송", price: "500원" },
  { label: "코팅", price: "1,000원" },
] as const;
