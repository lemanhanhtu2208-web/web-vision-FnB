import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { ShopTypeTabs } from "@/components/marketing/shop-type-tabs";
import { Faq } from "@/components/marketing/faq";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { packages, stats, tools, videoSamples } from "@/lib/marketing-content";

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-label="Con số" className="border-y border-ca-phe/10 bg-white/50">
        <dl className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-4 py-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 text-xs sm:text-sm">{s.label}</dt>
              <dd className="text-2xl font-extrabold text-nghe sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section id="loai-quan" eyebrow="Hợp với quán bạn" title="Mỗi loại quán một chất riêng">
        <ShopTypeTabs />
      </Section>

      <Section id="cong-cu" eyebrow="Bộ công cụ" title="Từ một tấm ảnh món tới cả tuần nội dung" className="bg-ca-phe text-kem">
        <div className="grid gap-5 sm:grid-cols-2">
          {tools.map((t) => (
            <article key={t.name} className="rounded-2xl bg-kem/5 p-6 ring-1 ring-kem/15">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    t.status === "live" ? "bg-la-chuoi text-white" : "bg-kem/15"
                  }`}
                >
                  {t.status === "live" ? "Dùng ngay" : "Sắp ra mắt"}
                </span>
              </div>
              <p className="leading-relaxed opacity-90">{t.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Video mẫu" title="Nội dung ngắn cho TikTok và Reels">
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
          {videoSamples.map((v) => (
            <MediaPlaceholder key={v} label={v} aspect="aspect-[9/16]" className="w-44 shrink-0 snap-start sm:w-56" />
          ))}
        </div>
        <p className="mt-4 text-sm opacity-70">Video mẫu tạo bằng AI sẽ được ghi chú rõ khi đăng.</p>
      </Section>

      <Section id="bang-gia" eyebrow="Bảng giá" title="Nạp bao nhiêu dùng bấy nhiêu, credit không hết hạn" className="bg-white/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl p-5 ring-1 ${
                p.highlight ? "bg-ca-phe text-kem ring-ca-phe" : "bg-kem ring-ca-phe/10"
              }`}
            >
              {p.highlight && <span className="mb-2 text-xs font-bold uppercase text-nghe">Nhiều quán chọn</span>}
              <h3 className="font-bold">{p.name}</h3>
              <p className="mt-2 text-2xl font-extrabold">{p.price}</p>
              <p className="mt-1 font-semibold">{p.credits}</p>
              <p className="mt-1 text-sm opacity-80">{p.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm">
          Thanh toán bằng chuyển khoản qua mã VietQR. 1 bài đăng = 3 credit.
        </p>
      </Section>

      <Section id="hoi-dap" eyebrow="Hỏi đáp" title="Câu hỏi thường gặp">
        <Faq />
      </Section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-nghe px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Món ngon cần được nhìn thấy</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg">Đăng ký là có 10 credit để thử ngay với ảnh món của quán bạn.</p>
          <Link href="/dang-ky" className="mt-8 inline-block rounded-full bg-ca-phe px-8 py-3 font-semibold text-kem hover:bg-ca-phe/90">
            Bắt đầu miễn phí
          </Link>
        </div>
      </section>
    </>
  );
}
