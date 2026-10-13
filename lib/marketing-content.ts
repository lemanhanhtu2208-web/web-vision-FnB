// Nội dung tĩnh của landing page. Sửa chữ ở đây, không cần đụng vào component.

export const stats = [
  // Placeholder: chưa có số liệu thật, KHÔNG điền số bịa.
  { value: "—", label: "quán đang dùng" },
  { value: "—", label: "bài đăng đã tạo" },
  { value: "—", label: "phút tiết kiệm mỗi bài" },
];

export const shopTypes = [
  {
    id: "ca-phe",
    name: "Cà phê",
    blurb: "Ly cà phê sữa đá, bạc xỉu, cold brew lên hình mát lạnh, caption chill đúng chất quán.",
    samples: ["Cà phê muối", "Bạc xỉu", "Cold brew cam sả"],
  },
  {
    id: "nha-hang",
    name: "Nhà hàng",
    blurb: "Món chính sang trọng, combo gia đình, set tiệc cuối tuần với giọng văn lịch sự.",
    samples: ["Lẩu cá kèo", "Gà nướng mật ong", "Set cơm gia đình"],
  },
  {
    id: "tiem-banh",
    name: "Tiệm bánh",
    blurb: "Bánh kem, bánh mì, bánh Trung thu với ánh sáng ấm, màu kem mềm mại.",
    samples: ["Bánh kem bắp", "Croissant bơ", "Bánh Trung thu"],
  },
  {
    id: "tra-sua",
    name: "Trà sữa",
    blurb: "Topping căng mọng, màu sắc rực rỡ, caption trẻ trung cho Gen Z.",
    samples: ["Trà sữa đường đen", "Trà đào cam sả", "Sữa tươi trân châu"],
  },
  {
    id: "an-vat",
    name: "Đồ ăn vặt",
    blurb: "Bánh tráng trộn, xiên que, chè: hình bắt mắt để chốt đơn trên TikTok và Zalo.",
    samples: ["Bánh tráng trộn", "Chè khúc bạch", "Xiên que nướng"],
  },
];

export const tools = [
  {
    name: "Lên Món",
    status: "live" as const,
    desc: "Tải ảnh món chụp bằng điện thoại, nhận ảnh đẹp như studio kèm caption tiếng Việt, đủ kích thước 1:1, 4:5, 9:16.",
  },
  {
    name: "Quay Món",
    status: "soon" as const,
    desc: "Biến ảnh món thành video ngắn 9:16 có chuyển động và nhạc nền.",
  },
  {
    name: "Review Món",
    status: "soon" as const,
    desc: "Video người review món ăn với giọng đọc AI tiếng Việt tự nhiên.",
  },
  {
    name: "Bộ nhận diện",
    status: "live" as const,
    desc: "Nhập tên quán, phong cách và logo. AI gợi ý màu, font và giọng văn rồi tự áp dụng cho mọi nội dung.",
  },
];

export const videoSamples = [
  "Cà phê muối buổi sáng",
  "Lẩu Thái cuối tuần",
  "Bánh Trung thu nhân trứng muối",
  "Trà sữa topping mới",
  "Bánh tráng trộn Đà Nẵng",
  "Chè Tết sum vầy",
];

export const packages = [
  { name: "Miễn phí", price: "0đ", credits: "10 credit", note: "≈ 3 bài đăng, có watermark", highlight: false },
  { name: "Nếm thử", price: "49.000đ", credits: "50 credit", note: "≈ 16 bài đăng", highlight: false },
  { name: "Quán nhỏ", price: "99.000đ", credits: "110 credit", note: "≈ 36 bài đăng", highlight: true },
  { name: "Quán đông", price: "199.000đ", credits: "240 credit", note: "≈ 80 bài đăng", highlight: false },
  { name: "Chuỗi", price: "499.000đ", credits: "650 credit", note: "≈ 216 bài đăng", highlight: false },
];

export const faqs = [
  {
    q: "Credit là gì, có hết hạn không?",
    a: "Credit là đơn vị để tạo nội dung. Mỗi bài đăng (ảnh nâng cấp + 3 kích thước + caption) tốn 3 credit. Credit nạp vào không hết hạn.",
  },
  {
    q: "Nạp tiền bằng cách nào?",
    a: "Chọn gói, quét mã VietQR bằng app ngân hàng bất kỳ. Hệ thống tự cộng credit sau khi nhận được tiền, thường trong vài phút.",
  },
  {
    q: "Nếu tạo lỗi thì có mất credit không?",
    a: "Không. Credit được tạm trừ khi bắt đầu tạo và tự hoàn lại nếu quá trình tạo bị lỗi.",
  },
  {
    q: "Gói miễn phí có giới hạn gì?",
    a: "Mỗi tài khoản đã xác minh được 10 credit một lần. Ảnh tạo từ gói miễn phí có watermark Vision FnB.",
  },
  {
    q: "Ảnh của quán mình có bị dùng cho việc khác không?",
    a: "Không. Ảnh bạn tải lên chỉ dùng để tạo nội dung cho bạn và được lưu riêng tư. Xem thêm ở Chính sách bảo mật.",
  },
  {
    q: "Có đăng thẳng lên Facebook, TikTok được không?",
    a: "Hiện tại bạn tải nội dung về rồi đăng. Lịch đăng bài và đăng trực tiếp đang được phát triển.",
  },
];
