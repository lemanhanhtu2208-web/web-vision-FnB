# Vision FnB

Nền tảng AI tạo nội dung marketing cho quán F&B Việt Nam (cà phê, nhà hàng, tiệm bánh, trà sữa, đồ ăn vặt).

Stack: Next.js 15 (App Router, TypeScript) · Tailwind CSS v4 · Supabase · Vercel.
Kế hoạch giai đoạn 1: xem `ke-hoach-giai-doan-1.md` trong project.

## Chạy trên Windows

### 1. Cài công cụ (một lần)
- **Node.js 20 LTS trở lên**: tải bản LTS ở https://nodejs.org, cài mặc định.
  Kiểm tra trong PowerShell: `node -v` và `npm -v`.
- **Git**: https://git-scm.com/download/win (để mặc định).
- Trình soạn code: VS Code.

### 2. Lấy code
```powershell
git clone https://github.com/lemanhanhtu2208-web/web-vision-FnB.git
cd web-vision-FnB
npm install
```

### 3. Biến môi trường
```powershell
Copy-Item .env.example .env.local
```
Mở `.env.local` và điền:
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`:
  vào https://supabase.com → tạo project (region Singapore cho gần VN) → **Project Settings → API**.
- Các biến còn lại để trống, sẽ cần ở các bước sau.

> Biến có tiền tố `NEXT_PUBLIC_` sẽ lộ ra trình duyệt. Mọi API key bí mật (service role, AI, SePay) **không bao giờ** được có tiền tố này.

### 4. Chạy
```powershell
npm run dev
```
Mở http://localhost:3000.

Lệnh khác: `npm run build` (build production), `npm run lint` (kiểm tra code).

## Deploy lên Vercel
1. Đăng nhập https://vercel.com bằng GitHub → **Add New → Project** → chọn repo `web-vision-FnB`.
2. Ở **Environment Variables**, dán các biến giống `.env.local`.
3. Bấm **Deploy**. Mỗi lần push lên nhánh `main` Vercel tự deploy lại.

> Lưu ý: gói Hobby (miễn phí) của Vercel không cho dùng thương mại. Khi bắt đầu thu tiền thật cần lên Pro hoặc chuyển nơi deploy.

## Cấu trúc thư mục
```
app/            Trang và API (App Router)
lib/supabase/   client.ts (trình duyệt) · server.ts (server, theo phiên) · admin.ts (service role, chỉ server)
public/         Ảnh, video tĩnh
```
