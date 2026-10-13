import Link from "next/link";

const nav = [
  { href: "/#cong-cu", label: "Công cụ" },
  { href: "/#loai-quan", label: "Loại quán" },
  { href: "/#bang-gia", label: "Bảng giá" },
  { href: "/#hoi-dap", label: "Hỏi đáp" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ca-phe/10 bg-kem/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Vision <span className="text-nghe">FnB</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-nghe">
              {n.label}
            </a>
          ))}
        </nav>
        <Link
          href="/dang-ky"
          className="rounded-full bg-ca-phe px-4 py-2 text-sm font-semibold text-kem hover:bg-ca-phe/90"
        >
          Dùng thử miễn phí
        </Link>
      </div>
    </header>
  );
}
