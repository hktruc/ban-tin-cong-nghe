# Bản tin công nghệ

Website tĩnh tổng hợp các bài phân tích AI và công nghệ, ưu tiên nguồn trực tiếp, phân biệt tuyên bố nhà cung cấp với kiểm chứng độc lập và dùng minh họa SVG nguyên bản.

Ấn bản 07/11/2026 gồm 24 bài, giữ nguyên 18 bài cũ và bổ sung 6 bài: 5 bài AI Việt Nam (đào tạo AI RMIT–Bộ GDĐT, PhoBERT/VnCoreNLP, PhoWhisper, VNPT SmartVoice, PhoMT) cùng 1 bài quốc tế về Docling.

Ngày kiểm tra nguồn được tách khỏi ngày sự kiện. Chương trình RMIT–Bộ GDĐT được nguồn ngày 19/10/2026 giới thiệu với lịch 17/10–07/11/2026; bài không xác nhận chương trình đã kết thúc, còn nhận đăng ký hoặc đã đạt hiệu quả. Các bài PhoBERT, PhoWhisper, PhoMT và Docling dùng tư liệu nền, không được trình bày như thông báo sản phẩm mới. Mọi phương pháp thử trong 6 bài đều là đề xuất chưa thực hiện.

Các giới hạn đáng chú ý được ghi trong bài: giấy phép PhoBERT thay đổi theo phiên bản; VnCoreNLP có giấy phép riêng; PhoMT chỉ dùng cho nghiên cứu/giáo dục và không được tái phân phối; VNPT có hạn chế với bản dùng thử. Giá VNPT được kiểm tra trên trang chính thức ngày 07/11/2026, chưa gồm VAT và cần xác nhận lại trước mua. Không thực hiện giao dịch, tạo tài khoản, tải bộ dữ liệu hoặc gửi tài liệu riêng để viết các bài này.

## Quyền sử dụng

- Nội dung và sơ đồ minh họa trong repository là nội dung biên tập nguyên bản.
- Đường dẫn ngoài dùng để dẫn nguồn; nội dung tại nguồn thuộc chủ sở hữu tương ứng.
- Không có biểu mẫu thu thập dữ liệu hoặc mã theo dõi do bản tin cài đặt.

## Chạy website

Mở `index.html` hoặc phục vụ thư mục bằng một máy chủ HTTP tĩnh. Không cần bước build hay phụ thuộc bên ngoài.

## Kiểm tra

- `node --check content.js`
- `node --check app.js`
- Kiểm tra trang chủ, chuyên mục, bài viết, nguồn, ảnh, tìm kiếm thường/rỗng/không kết quả, sao chép và phương án khi bị từ chối, Back/Forward, menu di động và tràn ngang.
