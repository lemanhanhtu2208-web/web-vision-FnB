import Link from "next/link";
import { MediaPlaceholder } from "./media-placeholder";

// Đặt file public/videos/hero.mp4 (+ hero-poster.webp) rồi đổi HERO_VIDEO thành đường dẫn để bật video.
const HERO_VIDEO: string | null = null;

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:pt-16 md:grid-cols-2">
      <div>
        <p className="mb-4 inline-block rounded-full bg-la-chuoi/10 px-3 py-1 text-sm font-medium text-la-chuoi">
          Dành riêng cho quán F&amp;B Việt
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.15] sm:text-5xl">
          Chụp món bằng điện thoại,
          <br />
          <span className="text-nghe">lên bài như có team marketing.</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Vision FnB làm đẹp ảnh món, viết caption tiếng Việt đúng giọng quán và
          xuất đủ kích thước cho Facebook, Instagram, TikTok, Zalo. Trả bằng
          chuyển khoản, giá hợp túi tiền quán nhỏ.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/dang-ky"
            className="rounded-full bg-nghe px-6 py-3 font-semibold text-white hover:bg-nghe/90"
          >
            Tạo bài đầu tiên miễn phí
          </Link>
          <a
            href="#cong-cu"
            className="rounded-full border border-ca-phe/20 px-6 py-3 font-semibold hover:bg-ca-phe/5"
          >
            Xem công cụ
          </a>
        </div>
      </div>
      {HERO_VIDEO ? (
        <video
          className="aspect-[4/5] w-full rounded-3xl object-cover"
          src={HERO_VIDEO}
          poster="/videos/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <MediaPlaceholder label="Video demo sẽ đặt ở đây" aspect="aspect-[4/5]" className="rounded-3xl" />
      )}
    </section>
  );
}
