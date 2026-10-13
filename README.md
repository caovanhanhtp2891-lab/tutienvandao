# Tu Tiên Vấn Đạo · v2.0

Game tu tiên tiếng Việt cho PC và điện thoại, bắt đầu từ một phàm nhân và phát triển đến tông chủ hoặc chưởng môn.

**[Chơi trên GitHub Pages](https://caovanhanhtp2891-lab.github.io/tutienvandao/)** · [Kiểm tra bốn kích thước màn hình](https://caovanhanhtp2891-lab.github.io/tutienvandao/responsive-preview.html).

## Hành trình v2

- Bắt đầu là phàm nhân 16 tuổi. Đặt tên, chọn nam / nữ tu và diện mạo.
- Đo linh căn, tư chất; chọn một trong sáu tông môn và vượt ba câu khảo hạch đạo tâm. Linh căn, tư chất giữ nguyên khi khảo hạch lại.
- Tự tu luyện, tăng tầng; đột phá đại cảnh giới khi đủ tu vi và vật liệu. Có 9 cảnh giới từ Luyện Khí đến Độ Kiếp.
- 8 nhiệm vụ tông môn, nhận cống hiến đổi 8 loại vật phẩm. Tổng cống hiến cả đời được lưu riêng, việc đổi đồ không làm mất điều kiện thăng chức.
- Lịch luyện, giao lưu tông môn, 5 bí cảnh; ngẫu nhiên nhận công pháp, đan dược, thảo dược, pháp bảo; kết giao bạn hữu hoặc nảy sinh hiềm khích.
- Tỷ thí lên 8 chức danh: Tạp dịch → Ngoại môn → Nội môn → Trọng tâm → Chân truyền → Thánh tử / Thánh nữ → Trưởng lão → Chưởng môn.
- Đại tỷ mỗi năm game gồm ba vòng. Nhận thưởng từng vòng; quán quân nhận công pháp quý. Lưu tối đa ba kỳ gần nhất khi vắng lâu, giữ kỳ đang đấu.
- Đến Nguyên Anh có thể rời tông môn, đặt tên tông môn riêng, nâng 6 công trình, chiêu mộ và phân công đệ tử. Có thể ở lại để tiếp tục thăng chức.
- 5 tình huống cốt truyện với các lựa chọn thực sự ảnh hưởng tài nguyên, quan hệ và đạo tâm. Bạn hữu tăng công kích; kẻ thù có thể tìm đến cửa.
- Chiến đấu theo lượt tự động, kỹ năng mỗi ba lượt, tốc độ ×1 / ×3; trận đấu có thể tiếp tục sau khi tải lại.
- Tự lưu, xuất / nhập bản lưu JSON. Bản quản lý v1 và tiến trình cũ còn ở [legacy.html](https://caovanhanhtp2891-lab.github.io/tutienvandao/legacy.html).

## Thời gian và màn hình

**1 giây thực = 1 phút game**, kể cả khi offline. Lịch có 365 ngày/năm, tương ứng **6 ngày 2 giờ thực** cho một năm game. Đồng hồ thế giới và tu luyện v2 không có giới hạn 8 giờ. Hoạt động đang thực hiện hoàn thành và nhận thưởng một lần khi quay lại; không tự lặp nhiệm vụ.

[Kết quả kiểm tra giao diện](docs/ui-checks-v2.md) · [Ảnh màn chơi](docs/journey-v2-live.jpg).

Màn chính dùng `100dvh` và không cuộn toàn trang. Nhiệm vụ, tu luyện, hoạt động, kho đồ mở thành màn riêng; danh sách dùng nút Trước / Sau. Hỗ trợ màn hình PC, điện thoại nhỏ, ngang và vùng an toàn thiết bị. Hộp thoại giới hạn trong viewport; có cuộn nội bộ dự phòng cho phông chữ lớn hoặc màn hình rất thấp.

Tông môn tự lập dùng hệ thống sản xuất của v1, có kho tài nguyên riêng và giới hạn sản xuất offline 8 giờ. Giới hạn này không ảnh hưởng đồng hồ, tu vi hoặc lịch đại tỷ của nhân vật.

## Chạy và kiểm tra

Không có dependency hoặc bước build. Phục vụ thư mục `dist` bằng HTTP:

```bash
git clone https://github.com/caovanhanhtp2891-lab/tutienvandao.git
cd tutienvandao
python -m http.server 8000 --directory dist
```

Mở `http://localhost:8000`. Windows có thể dùng `py`, macOS/Linux có thể dùng `python3`. ES modules cần HTTP, không mở bằng `file://`.

Kiểm tra với Node.js 22 trở lên:

```bash
npm test
```

44 kiểm tra logic bao gồm 19 kiểm tra quản lý v1 và 25 kiểm tra hành trình v2: khảo hạch, thời gian, offline, năm, phần thưởng một lần, giao lưu, quan hệ, chiến đấu, thăng chức, khai tông và nhập tiến trình lỗi. GitHub Actions chạy kiểm tra và triển khai trên mỗi lần cập nhật `main`.

## Mã nguồn

| Tệp | Vai trò |
| --- | --- |
| `dist/index.html`, `dist/journey.css` | Khung game v2 và bố cục vừa màn hình |
| `dist/journey.js` | Khảo hạch, đồng hồ, hành trình, nhiệm vụ, vật phẩm, quan hệ và chiến đấu |
| `dist/adventure-app.js` | Các màn chức năng, hành động, lưu tiến trình |
| `dist/legacy.html`, `dist/style.css`, `dist/app.js` | Giao diện quản lý v1 được giữ lại |
| `dist/game.js` | Sản xuất, công trình và đệ tử cho tông môn tự lập / v1 |
| `dist/assets/` | Tranh và bộ chân dung WebP thiết kế riêng |
| `tests/` | Kiểm tra logic v1 / v2 bằng Node.js |
| `docs/journey-v2.md` | Quy tắc tiến trình, cân bằng, đường kiếm vật liệu |

Sửa trực tiếp các tệp trong `dist`. Các đường dẫn là tương đối nên hỗ trợ GitHub Pages trong thư mục con. [Ghi chú hình ảnh](docs/visual-art.md) lưu thiết kế và prompt của các hình gốc.

## Triển khai và giới hạn

Workflow `.github/workflows/pages.yml` xuất bản `dist` lên GitHub Pages sau khi kiểm tra thành công. Pages của kho đã được bật bằng nguồn GitHub Actions.

Đây là game chơi đơn, lưu trên trình duyệt từng thiết bị. Chưa có tài khoản, đồng bộ đám mây, PvP trực tuyến hoặc bảng xếp hạng đa người. Thời gian dựa vào đồng hồ thiết bị; xuất bản lưu nếu chuyển máy hoặc xóa dữ liệu trình duyệt.

Cảm hứng thuộc thể loại quản lý tông môn và tu tiên; mã nguồn, hình ảnh và nội dung game được thiết kế riêng, không sử dụng tài nguyên của game trên App Store.
