/** 구조화 데이터 삽입용 얇은 래퍼 — 페이지마다 script 태그를 반복하지 않는다. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
