# Kiểm tra giao diện hành trình v2

Kiểm tra trực tiếp bản GitHub Pages bằng Chrome ngày 13/10/2026. `responsive-preview.html` tạo iframe đúng kích thước, giữ tiến trình thử riêng và không ghi localStorage.

| Viewport | Kích thước tài liệu | Cuộn toàn trang |
| --- | --- | --- |
| PC 1440 × 900 | 1440 × 900 | Không |
| Điện thoại 390 × 844 | 390 × 844 | Không |
| Điện thoại nhỏ 320 × 568 | 320 × 568 | Không |
| Điện thoại ngang 844 × 390 | 844 × 390 | Không |

Đã kiểm tra màn chính ở cả bốn kích thước. Chân dung dùng ô vuông đúng tỷ lệ của atlas, không kéo giãn hình. Màn chức năng thay nội dung trung tâm; danh sách phân trang thay vì kéo dài trang.

Các thao tác đã chơi thử:

- Điện thoại: mở sáu tông môn, đo linh căn / tư chất, vượt ba câu khảo hạch, nhập Thanh Vân Tông, nhận nhiệm vụ.
- Màn nhỏ và ngang: chọn tông môn và dùng phân trang; nút hành động nằm trong khung, thẻ không tràn. Hộp khảo hạch trên 320 × 568 có nội dung 310 px trong hộp 375 px, không phải kéo toàn trang.
- PC: từ giai đoạn Nguyên Anh, đăng ký tỷ thí Trưởng lão, chạy chiến đấu ×3.
- Điện thoại: thi đấu ba vòng đại tỷ, nhận phần thưởng cuối 500 linh thạch, 300 cống hiến, Thái Hư Thiên Đạo.
- Màn nhỏ: khai Thiên Vân Tông, nâng Tông Môn Điện, chiêu mộ, đổi Mộc Thanh sang đốn linh mộc và mở kho pháp bảo.
- Mở cốt truyện xích mích đồng môn, hiển thị các lựa chọn giải quyết.

44 kiểm tra logic chạy thành công ở máy phát triển và GitHub Actions. Bao gồm giữ đại tỷ đang đấu khi vắng nhiều năm, phần thưởng không lặp, tỷ lệ thời gian và bảo toàn bản lưu v2 khi bổ sung hiển thị vòng thi.

Game sử dụng `100dvh`, vùng an toàn, điều hướng cố định và danh sách có Trước / Sau. Hộp thoại có giới hạn chiều cao và cuộn nội bộ dự phòng cho chữ phóng to hoặc viewport rất thấp. Kiểm tra bằng iframe không thay thế thử nghiệm trên mọi phần cứng / trình duyệt điện thoại; người dùng vẫn có thể cần thử thiết bị cụ thể.
