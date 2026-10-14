# Kiểm tra bản chạy thật · v2.4.1

Ngày 14/10/2026, kiểm tra trực tiếp trên GitHub Pages sau khi phát hành. Dùng `responsive-preview.html?scenario=member`; các khung xem thử không ghi tiến trình của người chơi.

| Viewport | Bế quan | Luyện khí / Phân giải | Ảnh được chọn |
| --- | --- | --- | --- |
| PC 1440×900 | Khung 1440×900, ảnh chibi tải đủ | Cường hóa và đổi tab hoạt động | `realm-1.webp?v=2.4.1`, rộng 1536 px |
| Điện thoại 390×844 | Khung 390×844 | Cường hóa và đổi tab hoạt động | `realm-1-mobile.webp?v=2.4.1`, rộng 768 px |
| Điện thoại nhỏ 320×568 | Khung 320×568 | Một thẻ / trang; nút cường hóa dùng được | `realm-1-mobile.webp?v=2.4.1`, rộng 768 px |
| Ngang 844×390 | Khung 844×390 | Cường hóa và đổi tab hoạt động | `realm-1.webp?v=2.4.1`, rộng 1536 px |

Ở cả bốn khung: Mộc Kiếm +0 → +1 đổi công kích pháp bảo từ 8 thành 9; tài nguyên từ 600 thạch / 90 khoáng thành 560 thạch / 86 khoáng. Màn Phân giải hiển thị “Chưa có đồ trùng” và giải thích việc giữ lại một bản. Chuyển về Bế quan thành công.

Màn chơi chính đã được mở và chụp lại: avatar chibi, cảnh phàm nhân chibi và giao diện pastel đều hiện đúng. Bản sửa v2.4.1 giải quyết URL WebP trong template cảnh giới còn mang phiên bản cũ; toàn bộ tài nguyên nay dùng `v=2.4.1`.

![Màn chơi GitHub Pages](chibi-live.jpg)

69/69 kiểm tra Node đạt; CI kiểm tra và triển khai Pages thành công. Toàn bộ 24 WebP đã được giải mã và đối chiếu kích thước, byte và SHA-256 trước khi đẩy lên; các blob và cây mã trên GitHub khớp bản đã kiểm tra.
