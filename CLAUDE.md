# OASIS 프로젝트

스터디카페/공유오피스 웹사이트

## 배포 정보
- **GitHub**: https://github.com/saharapaik/oasis.git
- **배포**: Vercel (GitHub 연동, master 브랜치 push 시 자동 배포)
- **브랜치**: master

## 기술 스택
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## 프로젝트 구조
```
src/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 레이아웃
│   └── page.tsx         # 메인 페이지
├── components/
│   ├── Header.tsx           # 네비게이션 헤더
│   ├── HeroSection.tsx      # 히어로 섹션
│   ├── ServicesSection.tsx  # 서비스 소개
│   ├── StudyCafeSection.tsx # 스터디카페
│   ├── VirtualOfficeSection.tsx  # 비상주오피스
│   ├── MeetingRoomSection.tsx    # 회의실 (미팅룸/컨퍼런스룸)
│   ├── PrintCafeSection.tsx      # 프린트카페
│   ├── EventSection.tsx     # 이벤트
│   ├── PricingSection.tsx   # 요금안내
│   ├── ContactSection.tsx   # 연락처/오시는길
│   └── Footer.tsx           # 푸터
public/
└── images/              # 이미지 파일들
```

## 주요 명령어
```bash
npm run dev    # 개발 서버 (localhost:3000)
npm run build  # 프로덕션 빌드
npm run lint   # 린트 검사
```

## 최근 변경사항

### 2026-02-02: 회의실 특징 업데이트
**미팅룸 (2-4인, 5,000원/시간)**
- 무료 Wi-Fi
- 정수기 이용
- 콘센트 완비
- 쾌적한 냉난방
- 주차 지원

**컨퍼런스룸 (10-20인, 20,000원/시간)**
- 대형 스크린
- 빔프로젝터
- 개인 콘센트
- 쾌적한 냉난방
- 주차 지원

## 시설 정보 (참고)
- 무료음료 제공 없음, 정수기 사용 가능
- 화이트보드, TV모니터 없음
- 케이터링, 음향시스템 없음
- 주차 지원됨
