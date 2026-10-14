# Luyện khí · v2.3

## Kiểm tra bản hiện tại

Bản v2.2 là game chơi đơn chạy ES modules trực tiếp trong `dist`, không có backend hay bước build. Hành trình gồm khảo hạch sáu tông môn, chín đại cảnh giới sau phàm nhân, nhiệm vụ, bí cảnh, tỷ thí, quan hệ và khai tông. Trước thay đổi, cả 58 bài kiểm tra đạt.

Pháp bảo và công pháp rơi có thể trùng; công pháp đã học không có cách sử dụng các bản dư. Luyện khí tạo thêm mục tiêu phát triển trang bị và đường chuyển đồ trùng thành nguyên liệu.

## Cường hóa pháp bảo

Vào **Tu luyện → Luyện khí**, hoặc **Túi đồ → Pháp bảo → Luyện khí**. Chỉ pháp bảo đang sở hữu được cường hóa. Mỗi lần tăng một cấp, chắc chắn thành công, không tiêu hao pháp bảo.

Chỉ số của pháp bảo = làm tròn(chỉ số gốc × (1 + 0,15 × cấp)). Chỉ tăng công kích, phòng ngự và sinh lực của pháp bảo; chỉ số nền nhân vật, công pháp và bạn hữu vẫn tính riêng. Đổi trang bị hoặc nhận thêm bản trùng giữ cấp cường hóa theo loại pháp bảo. Tối đa +10.

| Đại cảnh giới | Cấp cường hóa tối đa |
| --- | ---: |
| Luyện Khí | +2 |
| Trúc Cơ | +4 |
| Kim Đan | +6 |
| Nguyên Anh | +8 |
| Hóa Thần trở lên | +10 |

Chi phí cấp tiếp theo = 40 × hệ số phẩm chất × cấp tiếp theo linh thạch, và 4 × hệ số phẩm chất × cấp tiếp theo linh khoáng. Ví dụ Thanh Phong Kiếm +0 → +1 cần 80 thạch, 8 khoáng; +1 → +2 cần 160 thạch, 16 khoáng.

| Phẩm chất | Hệ số | Phân giải một bản: linh thạch | Linh khoáng |
| --- | ---: | ---: | ---: |
| Phàm phẩm | 1 | 15 | 2 |
| Linh phẩm | 2 | 30 | 4 |
| Huyền phẩm | 4 | 60 | 8 |
| Địa phẩm | 7 | 105 | 14 |

## Phân giải

Vào **Tu luyện → Phân giải**. Mỗi thao tác tiêu hao đúng một bản và nhận nguyên liệu ngay.

- Pháp bảo luôn giữ ít nhất một bản, kể cả pháp bảo chưa trang bị. Cấp cường hóa và pháp bảo đang dùng không bị mất.
- Công pháp chưa lĩnh ngộ luôn giữ một bản. Công pháp đã lĩnh ngộ có thể phân giải tất cả bản vật phẩm dư; kiến thức đã học và công pháp đang vận dụng giữ nguyên.
- Đan dược không phân giải được. Không nhận nguyên liệu vượt giới hạn kho.
- Khi đang chiến đấu, cả cường hóa và phân giải đều bị chặn trước khi tiêu hao nguyên liệu. Trận đấu giữ chỉ số tại thời điểm bắt đầu.

Linh khoáng còn nhận từ bí cảnh và nhiệm vụ từ Ngoại môn. Nút **Kiếm linh khoáng** dẫn thẳng đến danh sách bí cảnh.

## Sửa cốt truyện

Trước đây có thể bắt đầu tỷ thí từ cốt truyện, đóng hộp thoại rồi chọn một cách giải quyết khác. Sự kiện bị xóa trước khi `settleBattle` trả thưởng. `resolveEvent` nay từ chối mọi lựa chọn trong khi có trận đang diễn ra, giữ sự kiện và phần thưởng một lần khi kết thúc.

## Lưu tiến trình

Giữ `version: 2` và khóa `thanh-van-tong-v2`. Trường mới `enhancements` là bản đồ ID pháp bảo → cấp; không bắt buộc trong bản lưu cũ. Khi đọc bản cũ, thêm bản đồ trống, giữ nhân vật, vật phẩm, trận đấu và tiến trình. Nhập cấp âm, cấp trên 10, số lẻ, kiểu dữ liệu sai, ID lạ hoặc pháp bảo không sở hữu bị từ chối. Bản dự phòng cũ vẫn hợp lệ.

Các URL module của hành trình, tiến trình và lưu game đổi đồng bộ sang `v=2.3.0` để trình duyệt lấy mã mới. Tranh v2.2 được giữ nguyên.

## Xác nhận

- `npm test`: 69/69 đạt, gồm 11 bài mới kiểm tra tiêu hao chính xác, giới hạn theo cảnh giới, chỉ số trang bị, bảo vệ vật phẩm, bản lưu cũ / dự phòng, nhập dữ liệu lỗi, tải lại trận đấu và lỗi cốt truyện.
- Kiểm tra cú pháp tất cả JavaScript trong `dist` và kiểm tra khoảng trắng của diff.
- Chưa xác nhận trực quan các màn mới trên PC / điện thoại: môi trường không có Chromium cục bộ, tải trình duyệt bị chính sách mạng chặn; trình duyệt đám mây không truy cập được localhost. Cần kiểm tra các tab Luyện khí / Phân giải trên 1440×900, 390×844, 320×568 và 844×390 trước khi phát hành.
