import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ca-phe/10 py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Vision FnB · Làm tại Đà Nẵng
        </p>
        <nav className="flex gap-5">
          <Link href="/dieu-khoan" className="hover:text-nghe">
            Điều khoản sử dụng
          </Link>
          <Link href="/chinh-sach-bao-mat" className="hover:text-nghe">
            Chính sách bảo mật
          </Link>
        </nav>
      </div>
    </footer>
  );
}
