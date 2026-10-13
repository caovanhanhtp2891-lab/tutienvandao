# Kiểm tra bản hình ảnh tự nhiên v2.2

Ngày: 2026-10-13. Bản chạy: https://caovanhanhtp2891-lab.github.io/tutienvandao/

Ảnh được thay trong commit `a43597723a0cb97f68cff98fd5333ccae43787eb`. Khung ảnh điện thoại được chỉnh trong commit `d5024c3c2f2b2ded01843883200ef27d560a7cb3`.

## Kết quả

- 58/58 kiểm tra Node đạt: cơ chế chơi v1/v2, thời gian offline, khảo hạch, tỷ thí, đột phá, thành tựu và bản lưu. Kiểm tra mới xác nhận 24 ảnh có dữ liệu WebP hoàn chỉnh và đúng dung lượng trong manifest.
- 24 ảnh được giải mã bằng Pillow, đúng kích thước và SHA-256 trong `realistic-art-manifest.json`. Blob ảnh gửi lên GitHub được đối chiếu SHA-1 Git, không thiếu dữ liệu.
- Kiểm tra UI thực tế trên GitHub Pages: 10 cảnh giới × 4 viewport = 40 trạng thái. Tất cả ảnh tải xong, đúng cảnh giới, không có vòng sáng quay, không tràn chiều ngang/dọc. Kết quả DOM nằm trong `realistic-art-viewport-checks.json`.
- Khung chơi PC: 1440 × 900. Điện thoại: 390 × 844. Điện thoại nhỏ: 320 × 568. Điện thoại ngang: 844 × 390. Cả 40 trạng thái dùng CSS `retreat.css?v=2.2.1`.
- PC dùng tranh 1536 × 1024; điện thoại dọc dùng tranh 768 × 512. Điện thoại ngang dùng bản PC theo chiều rộng viewport. Ảnh bế quan điện thoại 55–95 KB, không cần tải cả 10 cảnh giới khi mở game.
- Kiểm tra trực quan: khuôn mặt, tóc, áo bào, tay và chân ngồi xếp bằng; cảnh và ánh sáng thay đổi; nhân vật hiện trọn hơn trên điện thoại. Tiêu đề nhỏ hơn, không đè gương mặt. Màn chính giữ kích thước cố định, chức năng dài tiếp tục mở trong màn riêng.
- Trong bản xem thử, bấm đột phá Luyện Khí → Trúc Cơ: cảnh chính và ảnh thông báo chuyển đúng sang ảnh Trúc Cơ; thông báo chỉ số hiện đầy đủ.
- Mở Bí cảnh → Trúc Lâm Cốc trên điện thoại: nền sân đấu dùng `battle-courtyard.webp?v=2.2.0`, cả hai chân dung dùng atlas mới. Các nút và nội dung cửa sổ nằm trong khung.
- Mở bản quản lý v1: bản đồ mới và atlas mới tải đúng; công trình, nút thao tác vẫn tương ứng với vị trí trên bản đồ. Bỏ bộ lọc đổi màu để hình giữ màu tự nhiên.
- Mở trang chơi chính (1363 × 936): ảnh mới tải đúng, không tràn màn hình. Không nhập hay đặt lại tiến trình của người chơi khi kiểm tra; các thao tác chơi dùng `preview=1`.

Ảnh chứng minh: [màn chơi thật](realistic-art-live.jpg) · [bốn màn hình](realistic-art-responsive.jpg).

Nguồn ảnh, công cụ và toàn bộ prompt: [realistic-art.md](realistic-art.md).
