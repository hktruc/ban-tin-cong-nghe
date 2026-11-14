# Bản tin công nghệ

Ấn bản 14/11/2026: 63 bài. Thêm 5 bài nghiên cứu ứng dụng AI Việt Nam; bảo toàn nguyên nội dung 58 bài cũ và thiết kế. Mục tiêu 5 bài đạt, thiếu 0.

## Nguồn và phạm vi
- ViNLI: COLING 2022, abstract và phần định nghĩa nhãn trong PDF. Phân biệt suy luận với giống từ.
- ViFactCheck: abstract arXiv, dataset card tác giả và repo chính thức. Trang AAAI truy cập trực tiếp bị chặn, không tuyên bố đọc toàn văn ở đó.
- ViSpamReviews: README gốc và abstract nghiên cứu metadata 2024. Nêu đúng giới hạn mục đích nghiên cứu/cổng truy cập.
- ViSP: trang NAACL 2025 và README gốc, chỉ nghiên cứu/giáo dục.
- ViNumFCR: trang INLG 2025 và PDF v2; không dùng các số hiệu năng chưa làm rõ để quảng bá.

Đây là phân tích nghiên cứu nền, không phải năm tin ra mắt mới. Phương pháp và ví dụ đề xuất chưa thực nghiệm; không gọi API trả phí, tải dữ liệu riêng hay tạo credentials. Nêu chi phí cần đo, không bịa báo giá. Các SVG là sơ đồ nguyên bản, không sao chép ảnh nguồn. Không tải hoặc tái phân phối dataset.

## Kiểm tra
Giữ 58 bài cũ theo đối chiếu JSON, ID duy nhất; kiểm cú pháp JS và XML SVG; render bằng Sharp và xem đủ năm sơ đồ, không cắt chữ. Chromium không chạy được do socket nên chưa có kiểm UI trình duyệt trong lượt này. Sửa nhãn ấn bản cũ còn lưu trong app.js để khớp tổng 63 bài và ngày hiện hành. Không đổi bố cục/CSS. Xác minh commit, Pages và nội dung live sau xuất bản.
