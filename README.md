# Tu tiên vấn đạo

## Thanh Vân Tông — Tiên môn nhàn du

Game web tiếng Việt về tu tiên và quản lý tông môn. Đây là mã nguồn của bản chơi thử **Thanh Vân Tông**, để tiếp tục phát triển trong dự án Tu tiên vấn đạo.

[Chơi trên GitHub Pages](https://caovanhanhtp2891-lab.github.io/tutienvandao/) · [Bản chơi thử riêng](https://thanh-van-tong.tart-prawn-9101.chatgpt.site).

### Tính năng hiện có

- Bản đồ SVG nguyên bản với 6 công trình có thể nâng cấp tới cấp 10.
- Chiêu mộ đệ tử, phân loại Thường / Hiếm / Thiên tài; bảo đảm Thiên tài mỗi 5 lần chiêu mộ.
- 5 linh căn ảnh hưởng sản lượng hoặc sát thương, giao việc tự động, tu luyện đệ tử tới cấp 50.
- 5 tài nguyên tự sản xuất theo thời gian; tích lũy khi nghỉ tối đa 8 giờ.
- 9 cảnh giới cho tông sư; đột phá tăng sức mạnh đội hình.
- Luyện và dùng 3 loại đan dược.
- Đội hình tối đa 5 đệ tử, chiến đấu theo lượt với kỹ năng tự thi triển sau 3 lượt.
- 5 bí cảnh, mỗi bí cảnh 3 tầng; chiến thắng mở khu vực tiếp theo.
- Nhiệm vụ có thưởng, nhật ký hoạt động, âm thanh thao tác.
- Tự lưu trên trình duyệt, xuất / nhập tiến trình JSON và bắt đầu lại có xác nhận.
- Giao diện thích ứng cho máy tính và điện thoại.

### Chạy trên máy

Tải mã nguồn hoặc clone kho:

```bash
git clone https://github.com/caovanhanhtp2891-lab/tutienvandao.git
cd tutienvandao
```

Game không cần cài thư viện hoặc build. Dùng Python 3 để phục vụ thư mục `dist`:

```bash
python -m http.server 8000 --directory dist
```

Mở **http://localhost:8000**. Trên Windows có thể dùng `py` thay cho `python`; trên macOS/Linux có thể dùng `python3`. Nếu có sẵn máy chủ tĩnh hoặc Live Server, đặt thư mục phục vụ là `dist`.

Không mở trực tiếp `index.html` bằng `file://`, vì JavaScript sử dụng ES modules. Phông chữ web có phông hệ thống dự phòng.

### Kiểm tra logic

Cần Node.js 22 hoặc mới hơn. Không cần chạy `npm install` vì dự án không có dependency.

```bash
npm test
```

19 kiểm tra bao gồm lưu / khôi phục tiến trình, giới hạn tài nguyên khi nghỉ, phân công đệ tử, nâng cấp, chiêu mộ, luyện đan, đột phá, chiến đấu, nhận thưởng và tiến triển qua cả 5 bí cảnh. GitHub Actions chạy kiểm tra khi push hoặc mở pull request.

Giao diện v1.1 có bản đồ, chân dung và sân đấu mới, tối ưu bố cục cho PC và điện thoại. Các màn được kiểm tra trực tiếp trong viewport 1440, 390 và 320 px. Xem [ghi chú hình ảnh và prompt](docs/visual-art.md) và [bản kiểm tra bố cục](https://caovanhanhtp2891-lab.github.io/tutienvandao/responsive-preview.html).

### Cấu trúc phát triển

| Tệp / thư mục | Vai trò |
| --- | --- |
| `dist/index.html` | Khung ứng dụng và hệ thống biểu tượng SVG |
| `dist/style.css` | Giao diện, bố cục thích ứng và hiệu ứng |
| `dist/game.js` | Logic độc lập: dữ liệu, sản xuất, đệ tử, cảnh giới và chiến đấu |
| `dist/app.js` | Tương tác giao diện, lưu tiến trình, đan dược và trận đấu |
| `dist/world.svg` | Bản đồ tông môn nguyên bản |
| `dist/icon.svg` | Biểu tượng game |
| `tests/game.test.mjs` | Kiểm tra logic bằng Node.js |
| `tools/draw-world.py` | Tạo lại bản đồ SVG từ mã Python |

`dist` chứa toàn bộ mã nguồn chạy của game, dù tên thư mục thường dùng cho đầu ra build. Có thể sửa trực tiếp các tệp ở đây.

### Thay đổi nội dung

- Công trình và năng suất: `BUILDINGS` trong `dist/game.js`.
- Linh căn và kỹ năng: `ELEMENTS`, `fighter()` và `battleStep()`.
- Cảnh giới và chi phí: `REALMS`, `realmCost()` và `breakthrough()`.
- Đan dược: `RECIPES`, `craft()` và `usePill()`.
- Bí cảnh và cân bằng: `CHAPTERS`, `beginBattle()` và `settleBattle()`.
- Giao diện các màn: các hàm `*Markup()` trong `dist/app.js`.

Tạo lại bản đồ:

```bash
python tools/draw-world.py
```

### Triển khai

Workflow `.github/workflows/pages.yml` kiểm tra JavaScript, chạy bộ kiểm tra game và xuất bản toàn bộ thư mục `dist` lên GitHub Pages khi cập nhật `main`. Có thể chạy lại thủ công từ **Actions → Deploy game to GitHub Pages → Run workflow**.

Lần đầu tiên, vào **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions** để bật Pages cho kho. Đường dẫn sau khi triển khai thành công: **https://caovanhanhtp2891-lab.github.io/tutienvandao/**.

Không có lệnh build. Các đường dẫn tài nguyên là tương đối, phù hợp hosting trong thư mục con. `dist/.nojekyll` giữ nguyên các tài nguyên tĩnh nếu dùng chế độ xuất bản từ nhánh.

### Giới hạn bản đầu tiên

Game hiện dành cho một người chơi. Chưa có tài khoản, máy chủ, PvP, bảng xếp hạng liên thiết bị hoặc đồng bộ đám mây. Tiến trình lưu trong localStorage trên từng trình duyệt; cần xuất bản lưu trước khi xóa dữ liệu trình duyệt hoặc chuyển thiết bị. Thời gian và tài nguyên do thiết bị tính, phù hợp bản chơi đơn.

### Nguồn cảm hứng

Vòng chơi quản lý tông môn và tu tiên được tham khảo ở mức thể loại từ mô tả công khai của [Ta Làm Tông Sư Trong Tiên Môn](https://apps.apple.com/vn/app/id6749835889). Mã nguồn, bản đồ SVG, nhân vật và cân bằng của bản này được thiết kế riêng.
