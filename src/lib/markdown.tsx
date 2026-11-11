/**
 * 블로그 전용 소형 마크다운 렌더러. 의존성 없이 아래 문법만 지원한다.
 *
 *   ## 제목 / ### 소제목          → h2 / h3 (id 자동 부여, 목차와 연결)
 *   빈 줄로 나뉜 문단             → p
 *   - 항목 / 1. 항목              → ul / ol
 *   > 인용                        → blockquote
 *   > 💡 본문  / > ⚠️ 본문          → 팁 / 주의 콜아웃
 *   | a | b |  (둘째 줄 |---|)    → table
 *   ---                           → hr
 *   ![alt](/images/x.jpg "캡션")   → figure + img (1216x832 기준)
 *   @video(/videos/x.mp4 "캡션")   → figure + 무음 자동재생 루프 video
 *   **굵게**, `코드`, [텍스트](url) → 인라인
 *
 * 외부 링크는 새 창, 내부 링크(/로 시작)는 next/link 로 그린다.
 */

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { slugify } from "./blog";

type Block =
  | { type: "h2" | "h3"; text: string }
  | { type: "p"; lines: string[] }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "quote"; text: string; tone: "plain" | "tip" | "warn" }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "hr" }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; caption?: string };

function parse(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }
    if (/^---+\s*$/.test(line)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)\s*$/);
    if (img) {
      blocks.push({ type: "img", alt: img[1], src: img[2], caption: img[3] });
      i++;
      continue;
    }
    const vid = line.match(/^@video\(([^\s)]+)(?:\s+"([^"]*)")?\)\s*$/);
    if (vid) {
      blocks.push({ type: "video", src: vid[1], caption: vid[2] });
      i++;
      continue;
    }
    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      let text = buf.join(" ");
      let tone: "plain" | "tip" | "warn" = "plain";
      if (text.startsWith("💡")) {
        tone = "tip";
        text = text.slice(2).trim();
      } else if (text.startsWith("⚠️")) {
        tone = "warn";
        text = text.slice(2).trim();
      }
      blocks.push({ type: "quote", text, tone });
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    if (line.startsWith("|") && lines[i + 1]?.match(/^\|\s*:?-+/)) {
      const cells = (l: string) =>
        l
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => c.trim());
      const head = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(cells(lines[i]));
        i++;
      }
      blocks.push({ type: "table", head, rows });
      continue;
    }
    // 문단: 다음 빈 줄까지 합친다
    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3} |> |[-*] |\d+\. |\||---|!\[|@video\()/.test(lines[i])) {
      buf.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", lines: buf });
  }
  return blocks;
}

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, idx) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={idx}>{part.slice(1, -1)}</code>;
    }
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const [, label, href] = m;
      return href.startsWith("/") || href.startsWith("#") ? (
        <Link key={idx} href={href}>
          {label}
        </Link>
      ) : (
        <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function Markdown({ source }: { source: string }) {
  const blocks = parse(source);
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={slugify(b.text)}>
                {inline(b.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={slugify(b.text)}>
                {inline(b.text)}
              </h3>
            );
          case "p": {
            // 첫 줄이 통째로 굵은 글("**Q. …**")이면 질문-답 형태로 줄을 나눈다
            const [first, ...rest] = b.lines;
            if (rest.length && /^\*\*[^*]+\*\*$/.test(first)) {
              return (
                <p key={i} className="faq">
                  <strong>{first.slice(2, -2)}</strong>
                  <span>{inline(rest.join(" "))}</span>
                </p>
              );
            }
            return <p key={i}>{inline(b.lines.join(" "))}</p>;
          }
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} data-tone={b.tone}>
                {b.tone === "tip" && <span className="callout-label">TIP</span>}
                {b.tone === "warn" && <span className="callout-label">주의</span>}
                <p>{inline(b.text)}</p>
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j}>{inline(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>{inline(c)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "hr":
            return <hr key={i} />;
          case "img":
            return (
              <figure key={i}>
                <Image src={b.src} alt={b.alt} width={1216} height={832} sizes="(max-width: 768px) 100vw, 768px" />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          case "video":
            return (
              <figure key={i}>
                <video src={b.src} autoPlay muted loop playsInline preload="metadata" poster={b.src.replace(/\.(mp4|webm)$/, ".jpg")} />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </>
  );
}
