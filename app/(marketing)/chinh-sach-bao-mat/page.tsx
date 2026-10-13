import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Chính sách bảo mật – Vision FnB" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Chính sách bảo mật" updated="13/10/2026">
      <p>
        Chính sách này giải thích Vision FnB thu thập, sử dụng và bảo vệ dữ liệu cá nhân của bạn như thế nào, theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và các quy định liên quan.
      </p>
      <h2>1. Dữ liệu chúng tôi thu thập</h2>
      <ul>
        <li>Thông tin tài khoản: email, tên hiển thị, ảnh đại diện (nếu đăng nhập Google).</li>
        <li>Thông tin quán: tên quán, mô tả, logo, ảnh món và nội dung bạn tải lên hoặc tạo ra.</li>
        <li>Thông tin giao dịch: số tiền, thời gian, nội dung chuyển khoản. Chúng tôi không lưu mật khẩu hay thông tin đăng nhập ngân hàng.</li>
        <li>Dữ liệu kỹ thuật: địa chỉ IP, loại trình duyệt, mã nhận diện thiết bị dạng băm, dùng để chống gian lận và lạm dụng gói miễn phí.</li>
      </ul>
      <h2>2. Mục đích sử dụng</h2>
      <ul>
        <li>Cung cấp Dịch vụ: tạo, lưu và cho bạn tải lại nội dung.</li>
        <li>Xử lý thanh toán và cộng credit.</li>
        <li>Chống gian lận, bảo vệ hệ thống.</li>
        <li>Liên hệ hỗ trợ và thông báo thay đổi quan trọng.</li>
      </ul>
      <h2>3. Chia sẻ với bên thứ ba</h2>
      <p>Chúng tôi không bán dữ liệu của bạn. Dữ liệu chỉ được chia sẻ với các nhà cung cấp cần thiết để vận hành:</p>
      <ul>
        <li>Lưu trữ và xác thực: Supabase. Hosting: Vercel.</li>
        <li>Xử lý AI: [Anthropic, Google, fal.ai]. Ảnh và mô tả được gửi tới họ chỉ để tạo nội dung theo yêu cầu của bạn.</li>
        <li>Đối soát thanh toán: [SePay] và ngân hàng.</li>
      </ul>
      <p>Một số nhà cung cấp đặt máy chủ ở nước ngoài, nên dữ liệu có thể được chuyển ra ngoài Việt Nam.</p>
      <h2>4. Lưu trữ và bảo mật</h2>
      <ul>
        <li>Ảnh và nội dung được lưu riêng tư, chỉ bạn xem được qua liên kết có thời hạn.</li>
        <li>Dữ liệu được giữ khi tài khoản còn hoạt động. Khi bạn yêu cầu xóa tài khoản, chúng tôi xóa trong vòng [30] ngày, trừ dữ liệu giao dịch phải lưu theo quy định.</li>
      </ul>
      <h2>5. Quyền của bạn</h2>
      <p>Bạn có quyền xem, sửa, tải về, yêu cầu xóa dữ liệu hoặc rút lại sự đồng ý bằng cách liên hệ [email hỗ trợ].</p>
      <h2>6. Cookie</h2>
      <p>Chúng tôi chỉ dùng cookie cần thiết để giữ phiên đăng nhập. [Bổ sung nếu sau này dùng công cụ phân tích.]</p>
      <h2>7. Liên hệ</h2>
      <p>[Họ tên chủ sở hữu] · [email hỗ trợ] · [địa chỉ], Đà Nẵng</p>
    </LegalPage>
  );
}
