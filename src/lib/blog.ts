/**
 * 블로그 글 레지스트리.
 *
 * 글 하나 = src/content/blog/<slug>.ts 파일 하나. 본문은 마크다운 문자열이고
 * src/lib/markdown.tsx 의 소형 렌더러가 그린다 (지원 문법은 그 파일 머리말 참고).
 * 새 글은 파일을 만들고 아래 POSTS 배열에 import 한 줄만 추가하면
 * 목록·상세·사이트맵·관련 글·RSS 가 전부 따라온다.
 */

import { virtualOfficeRegistration } from "@/content/blog/virtual-office-business-registration";
import { virtualOfficeVsOthers } from "@/content/blog/virtual-office-vs-home-vs-coworking";
import { pajuNonOvercrowded } from "@/content/blog/paju-non-overcrowded-area-benefits";
import { hometaxOnlineGuide } from "@/content/blog/hometax-business-registration-online";
import { studyCafeChoosing } from "@/content/blog/unjeong-24h-study-cafe-guide";
import { meetingRoomSmallGroup } from "@/content/blog/paju-meeting-room-small-group";
import { virtualOfficeChecklist } from "@/content/blog/virtual-office-contract-checklist";
import { onlineSellerRegistration } from "@/content/blog/online-seller-registration-gov24";
import { smartstoreChecklist } from "@/content/blog/smartstore-startup-checklist";
import { simplifiedVsGeneral } from "@/content/blog/simplified-vs-general-taxpayer";
import { afterRegistrationTodo } from "@/content/blog/after-business-registration-todo";
import { printBindingGuide } from "@/content/blog/paju-print-binding-guide";
import { examStudyRoutine } from "@/content/blog/exam-study-routine-28days";
import { noticeVirtualOfficePricing } from "@/content/blog/notice-2026-11-virtual-office-pricing";

export const CATEGORIES = [
  { key: "virtual-office", label: "비상주사무실", color: "#7A9D7C" },
  { key: "startup", label: "창업 가이드", color: "#8B6F47" },
  { key: "study-cafe", label: "스터디카페", color: "#D9A066" },
  { key: "meeting-room", label: "회의실·프린트", color: "#A8B5A0" },
  { key: "notice", label: "공지·이벤트", color: "#E8B4A4" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export type Post = {
  slug: string;
  title: string;
  /** 검색결과·카드에 쓰이는 1~2문장 요약 (meta description). */
  description: string;
  category: CategoryKey;
  /** ISO 날짜. 최신순 정렬과 JSON-LD datePublished 에 쓴다. */
  date: string;
  updated?: string;
  /** public/ 기준 경로. 카드·OG 이미지로 쓴다. */
  cover: string;
  coverAlt: string;
  tags: string[];
  /** 마크다운 본문 */
  body: string;
  /** 본문 하단에서 자연스럽게 이어지는 서비스 페이지 */
  cta?: { href: string; label: string };
};

export const POSTS: Post[] = [
  virtualOfficeRegistration,
  hometaxOnlineGuide,
  pajuNonOvercrowded,
  virtualOfficeVsOthers,
  studyCafeChoosing,
  meetingRoomSmallGroup,
  virtualOfficeChecklist,
  onlineSellerRegistration,
  smartstoreChecklist,
  simplifiedVsGeneral,
  afterRegistrationTodo,
  printBindingGuide,
  examStudyRoutine,
  noticeVirtualOfficePricing,
].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function getCategory(key: CategoryKey) {
  return CATEGORIES.find((c) => c.key === key)!;
}

/** 한국어는 분당 500자 안팎으로 읽는다. 마크다운 기호를 뺀 글자 수로 계산한다. */
export function readingMinutes(body: string) {
  const chars = body.replace(/[#>*\-|`\[\]()]/g, "").replace(/\s+/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

/** 같은 카테고리 우선, 모자라면 최신 글로 채운다. */
export function relatedPosts(post: Post, n = 3) {
  const same = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...rest].slice(0, n);
}

/** 본문의 ## / ### 제목으로 목차를 만든다. id 는 markdown.tsx 의 slugify 와 같아야 한다. */
export function headings(body: string) {
  return body
    .split("\n")
    .filter((l) => /^##{1,2} /.test(l))
    .map((l) => {
      const level = l.startsWith("### ") ? 3 : 2;
      const text = l.replace(/^#+ /, "").trim();
      return { level, text, id: slugify(text) };
    });
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}
