"""블로그용 사진 생성 — 로컬 SDXL base 1.0 (E:/MyApp/Youtube_playboys/shared_models/sdxl-base-1.0).

실행:  C:/Python314/python.exe scripts/gen_blog_images.py [--only name,name] [--force]
출력:  public/images/blog/<name>.jpg (1216x832, 품질 86)

사람 얼굴·손은 SDXL base 가 자주 망가뜨리므로 장면은 전부 '사람 없음' 또는 '뒷모습'으로 잡았다.
VRAM 8GB 라 fp16 + model_cpu_offload 로 돌린다. 한 장 25~40초.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import torch
from diffusers import StableDiffusionXLPipeline

MODEL = Path(r"E:/MyApp/Youtube_playboys/shared_models/sdxl-base-1.0")
OUT = Path(__file__).resolve().parent.parent / "public" / "images" / "blog"

STYLE = (
    "photorealistic editorial interior photograph, Korean modern style, warm natural light, "
    "wood and beige tones, clean composition, shallow depth of field, 35mm, high detail, "
)
NEGATIVE = (
    "text, letters, watermark, logo, signage with words, people face, distorted hands, cartoon, illustration, "
    "3d render, low quality, blurry, oversaturated, cluttered, extra limbs"
)

SCENES: dict[str, tuple[str, int]] = {
    # 비상주사무실 — 사업자등록
    "vo-registration-hero": (
        "reception lounge of a small shared office building, wall of wooden mailboxes with brass numbers, "
        "a front desk with a potted plant, morning light through tall windows, no people",
        2101,
    ),
    "vo-lease-documents": (
        "top-down view of a wooden desk with a lease contract document, a red ink stamp, a fountain pen, "
        "a laptop edge and a cup of coffee, soft window light, no readable text",
        2102,
    ),
    "vo-mailboxes": (
        "close-up of envelopes being placed into a row of warm wooden mailboxes in a modern office lobby, "
        "hand from behind partially visible, soft focus background",
        2103,
    ),
    # 홈택스
    "hometax-hero": (
        "laptop on a tidy desk showing a blurred government web form interface with blue header, "
        "reading glasses, notebook, coffee mug, home office by a window with plants, no readable text",
        2201,
    ),
    # 파주 과밀억제권역
    "paju-skyline-hero": (
        "aerial golden hour view of a Korean new town: modern apartment towers, wide boulevards, green parks and a river, "
        "clear sky, cinematic wide angle, Paju Unjeong style new city",
        2301,
    ),
    "paju-office-window": (
        "small corporate office interior with a wide window overlooking a Korean new town skyline at dusk, "
        "a desk with a laptop and company seal box, warm lamp, no people",
        2302,
    ),
    # 비상주 vs 집 vs 공유오피스
    "home-office-desk": (
        "cozy minimal home office corner: wooden desk by a window, laptop, small plant, stacked parcels and shipping boxes "
        "for an online shop, soft daylight, no people",
        2401,
    ),
    "coworking-space": (
        "bright open coworking space with long shared wooden tables, a few people seen from behind working on laptops, "
        "large windows, hanging plants, calm atmosphere",
        2402,
    ),
    # 스터디카페
    "study-cafe-hero": (
        "quiet premium study cafe interior at night: rows of private cubicle desks with wooden partitions, "
        "individual warm desk lamps, charging outlets, one empty seat in focus, no people",
        2501,
    ),
    "study-night-desk": (
        "close-up of a study desk at a study cafe late at night: open textbook, highlighters, a tumbler, warm lamp, "
        "city lights blurred outside the window, no people",
        2502,
    ),
    # 회의실
    "meeting-room-hero": (
        "small modern meeting room for four: round wooden table, four chairs, a laptop and notebooks, "
        "large window with soft daylight, plant in corner, no people",
        2601,
    ),
    "conference-room": (
        "conference room for twenty people: long tables in U shape, projector screen at the front, "
        "individual power outlets, warm wood ceiling, no people",
        2602,
    ),
    # 블로그 인덱스 / 공통
    "blog-index-hero": (
        "warm library-like coworking lounge: tall bookshelves, leather armchairs, a long oak table with a laptop, "
        "soft afternoon sunlight, plants, no people",
        2701,
    ),
    # ── 2차 (2026-11-12 오후) ──
    "ecommerce-packing": (
        "home studio desk for an online shop: small parcels being packed, kraft boxes, tape dispenser, "
        "product photos on a laptop, hands from above partially visible, soft daylight",
        2801,
    ),
    "smartstore-laptop": (
        "laptop on a wooden desk showing a blurred e-commerce seller dashboard with product thumbnails, "
        "a smartphone, a notebook and a cup of tea, no readable text, bright home office",
        2802,
    ),
    "tax-calculator": (
        "top-down view of a desk with a calculator, a stack of receipts, a ledger notebook, a pen and reading glasses, "
        "warm lamp light, no readable text",
        2803,
    ),
    "print-cafe-hero": (
        "self-service print room: a modern multifunction copier, stacks of white paper, a spiral binding machine, "
        "a laminator on a wooden counter, bright clean lighting, no people",
        2804,
    ),
    "print-binding": (
        "close-up of a freshly spiral-bound report with a clear cover on a wooden counter next to a stack of printed pages, "
        "shallow depth of field, no readable text",
        2805,
    ),
    "study-routine-hero": (
        "morning study desk at a study cafe: open planner notebook, a kitchen timer, highlighters, a coffee cup, "
        "sunlight through a window, no people, no readable text",
        2806,
    ),
    "study-planner": (
        "close-up of a monthly planner page with colorful highlighter marks and sticky notes, a pen on top, "
        "warm desk light, no readable text",
        2807,
    ),
    "post-registration-hero": (
        "tidy office desk after starting a business: a business card holder, a company stamp, a debit card, "
        "a laptop and a small plant, morning light, no readable text, no people",
        2808,
    ),
    "checklist-hero": (
        "clipboard with a checklist and a pen on a reception counter of a modern shared office, "
        "wooden mailboxes blurred in the background, no readable text",
        2809,
    ),
    "gov24-laptop": (
        "laptop and smartphone on a desk showing a blurred blue government website, an ID card and documents beside, "
        "soft window light, no readable text",
        2810,
    ),
    "unjeong-street": (
        "street level view of a Korean new town commercial street in the morning: modern low-rise buildings with cafes, "
        "young trees, wide sidewalk, apartment towers behind, clear sky, no readable signage",
        2811,
    ),
}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="쉼표로 구분한 장면 이름")
    ap.add_argument("--force", action="store_true", help="이미 있는 파일도 다시 생성")
    ap.add_argument("--steps", type=int, default=32)
    args = ap.parse_args()

    names = args.only.split(",") if args.only else list(SCENES)
    OUT.mkdir(parents=True, exist_ok=True)

    todo = [n for n in names if args.force or not (OUT / f"{n}.jpg").exists()]
    if not todo:
        print("생성할 장면 없음 (전부 존재). --force 로 다시 만들 수 있음")
        return 0

    print(f"SDXL 로드 중… ({len(todo)}장 생성 예정)")
    pipe = StableDiffusionXLPipeline.from_pretrained(
        str(MODEL), torch_dtype=torch.float16, variant="fp16", use_safetensors=True, local_files_only=True
    )
    pipe.enable_model_cpu_offload()
    pipe.vae.enable_slicing()
    pipe.set_progress_bar_config(disable=True)

    for name in todo:
        prompt, seed = SCENES[name]
        g = torch.Generator("cuda").manual_seed(seed)
        img = pipe(
            prompt=STYLE + prompt,
            negative_prompt=NEGATIVE,
            width=1216,
            height=832,
            num_inference_steps=args.steps,
            guidance_scale=6.5,
            generator=g,
        ).images[0]
        path = OUT / f"{name}.jpg"
        img.save(path, "JPEG", quality=86, optimize=True, progressive=True)
        print(f"  저장 {path.name}  {path.stat().st_size // 1024}KB", flush=True)

    print("완료")
    return 0


if __name__ == "__main__":
    sys.exit(main())
