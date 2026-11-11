"""블로그용 짧은 루프 영상 — Wan 2.2 I2V (ComfyUI) 로 정지 사진을 3~5초 움직이는 클립으로 만든다.

실행:  C:/Python314/python.exe scripts/gen_blog_video.py <scene> [<scene>...]
출력:  public/videos/blog/<scene>.mp4 (h264, 무음, 832x480)  +  <scene>.jpg (포스터)
본문:  @video(/videos/blog/<scene>.mp4 "캡션")

GPU 8GB 라 SDXL 이미지 생성과 동시에 돌리면 안 된다. 한 클립 3~6분.
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg

ROOT = Path(__file__).resolve().parent.parent
WAN = Path(r"E:/MyApp/Youtube_playboys/local_video_runtime/run_wan22_i2v.py")
IMAGES = ROOT / "public" / "images" / "blog"
OUT = ROOT / "public" / "videos" / "blog"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

SCENES: dict[str, tuple[str, str, int]] = {
    # name: (source image, motion prompt, seed)
    "study-cafe-loop": (
        "study-cafe-hero",
        "slow cinematic dolly forward along the row of study desks, warm desk lamps glow softly, "
        "a page of the open book lifts slightly, calm and quiet, static camera height, no people",
        7101,
    ),
    "coworking-loop": (
        "coworking-space",
        "gentle slow push-in, people seen from behind typing on laptops and sipping coffee, "
        "sunlight shifts softly across the wooden table, hanging plants sway slightly",
        7102,
    ),
    "mailbox-loop": (
        "vo-mailboxes",
        "a hand from the side slides an envelope into the wooden mailbox, slow natural motion, "
        "soft focus background, camera static",
        7103,
    ),
}


def run(cmd: list[str]) -> None:
    print("  $", " ".join(str(c) for c in cmd[:6]), "…", flush=True)
    subprocess.run(cmd, check=True)


def main(names: list[str]) -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    for name in names or list(SCENES):
        src, prompt, seed = SCENES[name]
        image = IMAGES / f"{src}.jpg"
        if not image.is_file():
            print(f"원본 이미지 없음: {image} — scripts/gen_blog_images.py 먼저", file=sys.stderr)
            return 1
        raw = OUT / f"{name}.raw.mp4"
        final = OUT / f"{name}.mp4"
        poster = OUT / f"{name}.jpg"

        if not raw.is_file():
            run([
                "C:/Python314/python.exe", str(WAN),
                "--image", str(image), "--prompt", prompt, "--output", str(raw),
                "--width", "832", "--height", "480", "--frames", "49", "--fps", "16", "--seed", str(seed),
            ])

        # 웹용: h264 yuv420p, 무음, 24fps 로 보간 없이 재생 속도만 조정, faststart
        run([
            FFMPEG, "-y", "-i", str(raw), "-an",
            "-vf", "scale=832:480:flags=lanczos,format=yuv420p",
            "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-movflags", "+faststart", "-r", "16",
            str(final),
        ])
        run([FFMPEG, "-y", "-i", str(raw), "-frames:v", "1", "-q:v", "3", str(poster)])
        for p in (raw, raw.with_suffix(".wan22.json"), OUT / f"{name}.raw.wan22.json"):
            p.unlink(missing_ok=True)
        print(f"완료 {final.name} {final.stat().st_size // 1024}KB  포스터 {poster.name}", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
