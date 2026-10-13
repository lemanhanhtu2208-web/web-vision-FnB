import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vision FnB – Nội dung marketing AI cho quán F&B Việt",
  description:
    "Tạo ảnh món, caption tiếng Việt và video quảng cáo cho quán cà phê, nhà hàng, tiệm bánh, trà sữa.",
};

export const viewport: Viewport = {
  themeColor: "#3B2418",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnam.variable} antialiased`}>{children}</body>
    </html>
  );
}
