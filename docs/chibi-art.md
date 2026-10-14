# Chibi dễ thương · v2.4

Thay toàn bộ ảnh raster đang dùng bằng bộ hình mới qua built-in imagegen. Tu sĩ có đầu tròn lớn, thân nhỏ, má hồng, biểu cảm an nhiên; minh họa 2.5D với màu kem, xanh ngọc, hồng đào và tím nhạt. Các hình được tạo mới, không dùng tài nguyên của game khác.

| Nhóm | Đường dẫn trong dự án | Nội dung |
| --- | --- | --- |
| Bế quan PC | `dist/assets/retreat/realm-0.webp` đến `realm-9.webp` | 10 cảnh riêng từ phàm nhân đến Độ Kiếp |
| Bế quan điện thoại | `dist/assets/retreat/realm-0-mobile.webp` đến `realm-9-mobile.webp` | Bản 768×512 của cùng cảnh |
| Nhân vật | `dist/assets/characters.webp` | Atlas 4×2: tám nhân vật chibi, nền trong suốt |
| Tỷ thí | `dist/assets/battle-courtyard.webp` | Sân tập với hai vùng trống cho nhân vật |
| Tông môn | `dist/assets/sect-world.webp`, `sect-world-mobile.webp` | Núi, nhà chính, dược viên, khoáng mạch và sân tập |

Phàm nhân / Luyện Khí dùng áo giản dị ở sơn môn / rừng trúc. Trúc Cơ có áo xanh, thác và linh tinh. Kim Đan có áo vàng và linh đan. Nguyên Anh có áo tím và linh thể nhỏ. Hóa Thần có áo trắng xanh ở núi tuyết. Luyện Hư có đảo mây dưới trăng. Hợp Thể có vườn tiên và cây cổ thụ. Đại Thừa có cung điện bình minh. Độ Kiếp có pháp y vàng tím và linh long chibi.

## Quy trình và tối ưu

13 lượt imagegen riêng: atlas, bản đồ, sân đấu và 10 cảnh giới. Cảnh phàm nhân làm tham chiếu để giữ nhân vật và nét vẽ xuyên suốt. Prompt đầy đủ trong `docs/chibi-art-prompts.json`.

`tools/export-chibi-art.py` chỉ đổi kích thước và mã hóa WebP, không sửa nội dung ảnh. Đầu vào là JSON ánh xạ `characters`, `world`, `battle`, `realm0`…`realm9` tới PNG gốc. Atlas giữ alpha. Manifest ghi kích thước, chất lượng, byte, tên nguồn và SHA-256 của từng WebP.

Cảnh PC dưới 350 KB, cảnh điện thoại dưới 100 KB, atlas dưới 400 KB. Game chỉ tải tranh cảnh giới hiện tại, không tải sẵn cả bộ.

## Giao diện và bản lưu

`dist/chibi.css` được tải sau các stylesheet hiện có trong cả `index.html` và `legacy.html`. Nền kem / xanh nhạt, bảng sáng với chữ xanh đậm, nút xanh ngọc và góc bo mềm. Lớp phủ cảnh giảm độ tối để tranh rõ hơn. Icon SVG có nét bo tròn; favicon đổi thành linh liên cười.

Toàn bộ URL phiên bản JS, CSS và WebP đổi sang `v=2.4.0`. Khóa bản lưu, ID vật phẩm và tiến trình giữ nguyên. Gồm các chức năng v2.3 đã kiểm tra trong `docs/forging-v2-3.md`.

## Kiểm tra

- Xem trực tiếp các PNG đầu ra trước khi xuất bản.
- Kiểm tra WebP, số byte, SHA-256 và ngân sách ảnh trong manifest.
- `npm test`: logic game, luyện khí, bản lưu và toàn vẹn bộ ảnh.
- Kiểm tra bản chạy thật sau khi Pages triển khai; không dùng localhost qua trình duyệt đám mây.
