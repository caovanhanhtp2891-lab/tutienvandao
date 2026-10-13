# Kiểm tra bế quan v2.1 · 13/10/2026

Đã thử trực tiếp bản GitHub Pages trong Chrome. Khung thử dùng iframe đúng kích thước; tiến trình thử không ghi đè dữ liệu người chơi.

| Màn hình | Viewport | Kích thước tài liệu | Cuộn toàn trang |
| --- | --- | --- | --- |
| PC | 1440 × 900 | 1440 × 900 | Không |
| Điện thoại | 390 × 844 | 390 × 844 | Không |
| Điện thoại nhỏ | 320 × 568 | 320 × 568 | Không |
| Điện thoại ngang | 844 × 390 | 844 × 390 | Không |
| Trang chơi thật | 1363 × 936 | 1363 × 936 | Không |

## Hình ảnh và chuyển cảnh

Đã chọn đủ 10 đại cảnh giới bằng bộ thử và xác minh đường dẫn tranh riêng `realm-0.webp` đến `realm-9.webp`. Số hạt linh khí lần lượt là 0, 6, 9, 12, 15, 17, 19, 21, 23, 25. Các cảnh còn có số lớp quầng sáng tăng dần.

Ảnh PC tải ở 1536 × 1024, ảnh điện thoại ở 768 × 512. Tại Độ Kiếp, cả bốn viewport đều tải xong đúng ảnh, không có lỗi tài nguyên trong nhật ký game. Tranh giữ cùng nhân vật và tư thế bế quan, khác môi trường / áo bào / linh lực theo cảnh giới. Có chế độ Đầy đủ / Nhẹ / Tắt; CSS tôn trọng thiết lập giảm chuyển động.

Khi đột phá, giao diện giữ tranh vừa tải thành nền trong lúc tải tranh tiếp theo. Đã xác minh cảnh Luyện Khí được giữ tạm, rồi Trúc Cơ tải xong và hiển thị. Không phải nhìn khung trống lúc đổi cảnh.

## Chức năng đã thao tác

- Điện thoại: đột phá thật trong bộ thử từ Luyện Khí tầng 9 sang Trúc Cơ tầng 1; tranh đổi sang `realm-2.webp`, kết quả ghi công kích 122 → 132, sinh lực 596 → 644.
- Điện thoại: mở Túi đồ → Thành tựu, nhận “Bước đầu nhập đạo”; trạng thái chuyển “Đã nhận”, nút nhận tiếp bị vô hiệu. Danh sách 13 thành tựu phân trang, các thẻ không tràn.
- Điện thoại: mở Tu luyện, kiểm tra điều kiện đột phá tiếp theo có tu vi, 480 linh thạch, 30 linh thảo, một Phá Cảnh Đan; nút chưa cho đột phá khi chưa đủ tầng / tu vi.
- Màn nhỏ: chọn Hiệu ứng Nhẹ trong Cài đặt, xác minh chế độ `reduced` được áp dụng cho màn bế quan.
- Trang chơi thật: mở dữ liệu v2 cũ, tiến trình tiếp tục (lịch game vẫn ở năm 1, ngày 03/01), không bắt đầu lại; Cài đặt có bản lưu dự phòng hợp lệ để phục hồi.

57 kiểm tra logic đạt trên máy phát triển và GitHub Actions: 19 quản lý v1, 25 hành trình v2, 13 hình theo cảnh giới / điều kiện / thành tựu / bản lưu. Bao gồm giữ tiến trình v2 trước cập nhật, không thưởng lại, bảo toàn bản lưu lỗi, phục hồi bản gần nhất và không ghi đè tiến trình bởi dữ liệu không hợp lệ.

[Ảnh bản chạy thật](retreat-v2-1-live.jpg). [Tranh và bộ prompt](retreat-art.md).

Kiểm tra iframe xác nhận kích thước bố cục; chưa thay thế thử nghiệm trên mọi phần cứng điện thoại. Các hộp thoại vẫn có cuộn nội bộ dự phòng cho chữ phóng to hoặc màn hình rất thấp.
