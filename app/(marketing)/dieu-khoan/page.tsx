import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Điều khoản sử dụng – Vision FnB" };

export default function TermsPage() {
  return (
    <LegalPage title="Điều khoản sử dụng" updated="13/10/2026">
      <p>
        Điều khoản này áp dụng khi bạn dùng website và dịch vụ Vision FnB (&quot;Dịch vụ&quot;) do [Họ tên chủ sở hữu / tên hộ kinh doanh], địa chỉ [địa chỉ], Đà Nẵng, cung cấp. Khi tạo tài khoản, bạn đồng ý với các điều khoản dưới đây.
      </p>
      <h2>1. Tài khoản</h2>
      <ul>
        <li>Bạn cần cung cấp email hợp lệ hoặc đăng nhập bằng Google và tự bảo mật tài khoản.</li>
        <li>Mỗi người chỉ dùng một tài khoản để nhận credit miễn phí. Chúng tôi có quyền thu hồi credit miễn phí hoặc khóa tài khoản tạo ra để lạm dụng.</li>
      </ul>
      <h2>2. Credit và thanh toán</h2>
      <ul>
        <li>Credit là đơn vị sử dụng Dịch vụ, không phải tiền tệ, không quy đổi ra tiền mặt và không chuyển nhượng.</li>
        <li>Credit đã nạp không hết hạn khi Dịch vụ còn hoạt động.</li>
        <li>Thanh toán bằng chuyển khoản ngân hàng/VietQR. Credit được cộng khi hệ thống ghi nhận đúng số tiền và nội dung chuyển khoản. Nếu chuyển sai nội dung, vui lòng liên hệ [email hỗ trợ] để được đối soát.</li>
        <li>Credit được trừ khi bắt đầu tạo nội dung và tự hoàn lại nếu quá trình tạo lỗi do hệ thống.</li>
        <li>Chính sách hoàn tiền: [điền chính sách, ví dụ hoàn tiền phần credit chưa dùng trong 7 ngày kể từ khi nạp].</li>
      </ul>
      <h2>3. Nội dung bạn tải lên và nội dung được tạo</h2>
      <ul>
        <li>Bạn giữ quyền với ảnh, logo, mô tả bạn tải lên và cam kết có quyền sử dụng chúng.</li>
        <li>Bạn được dùng nội dung do Dịch vụ tạo ra cho mục đích kinh doanh của mình. Nội dung từ gói miễn phí có watermark.</li>
        <li>Nội dung do AI tạo có thể chưa chính xác. Bạn tự kiểm tra trước khi đăng, đặc biệt là giá, khuyến mãi và thông tin sức khỏe.</li>
      </ul>
      <h2>4. Hành vi bị cấm</h2>
      <ul>
        <li>Tải lên nội dung vi phạm pháp luật Việt Nam, xâm phạm bản quyền, nhãn hiệu hoặc hình ảnh của người khác.</li>
        <li>Tạo quảng cáo sai sự thật, gây hiểu lầm về món ăn hoặc về đối thủ.</li>
        <li>Dùng công cụ tự động, tạo nhiều tài khoản hoặc tìm cách vượt qua giới hạn của Dịch vụ.</li>
      </ul>
      <h2>5. Giới hạn trách nhiệm</h2>
      <p>
        Dịch vụ được cung cấp &quot;như hiện có&quot;. Chúng tôi không chịu trách nhiệm cho thiệt hại gián tiếp phát sinh từ việc dùng nội dung được tạo. Trách nhiệm tối đa không vượt quá số tiền bạn đã nạp trong 3 tháng gần nhất.
      </p>
      <h2>6. Thay đổi và chấm dứt</h2>
      <p>
        Chúng tôi có thể cập nhật điều khoản và sẽ thông báo trên website hoặc qua email. Nếu Dịch vụ ngừng hoạt động, credit chưa dùng sẽ được xử lý theo [điền phương án].
      </p>
      <h2>7. Liên hệ</h2>
      <p>Email: [email hỗ trợ] · Zalo: [số Zalo]</p>
    </LegalPage>
  );
}
