# Giao diện Thanh Vân Tông v1.1

Phong cách: xanh ngọc đậm, vàng cổ và tranh tu tiên chi tiết. Tài nguyên và điều hướng được bố trí lại để thao tác bằng chuột hoặc chạm.

Hình ảnh được tạo bằng công cụ ImageGen tích hợp, sau đó đóng gói WebP cho game. Kênh alpha của bộ chân dung được giữ lại. Không dùng CLI hay API key. Các tệp gốc của lần tạo được giữ riêng; những tệp dưới đây là bản tối ưu được dùng trong mã nguồn:

| Tệp | Vai trò |
| --- | --- |
| `dist/assets/sect-world.webp` | Bản đồ cho PC và máy tính bảng |
| `dist/assets/sect-world-mobile.webp` | Bản đồ nhẹ hơn cho điện thoại |
| `dist/assets/characters.webp` | Atlas 4 × 2: sáu đệ tử, tông sư và linh hồ |
| `dist/assets/battle-courtyard.webp` | Sân đấu và nền bí cảnh |

Bố cục đổi tại 1060 px và 700 px. Điện thoại dùng thanh điều hướng ở đáy màn hình, hỗ trợ safe area, các nút chính từ 42–44 px và cửa sổ vừa chiều rộng thiết bị. `dist/responsive-preview.html` đặt game trong iframe có chiều rộng thật 1440 px và 390 px để kiểm tra media query, không chỉ thu nhỏ ảnh chụp. Tham số `preview=1` tạo bản chơi riêng và không ghi đè dữ liệu đã lưu.

Logic và định dạng bản lưu của phiên bản 1.0 được giữ tương thích.

## Prompt tạo hình ảnh

## Bản đồ tông môn

```
Use case: stylized-concept. Asset type: finished painted background for an original Vietnamese xianxia cultivation sect management GAME, landscape 1536x1024, no user interface. Create an exquisitely detailed hand-painted 2.5D isometric fantasy mountain sect estate, cinematic yet calm, lush emerald jade green hills, ancient Chinese dark teal tiled roofs with weathered golden details, pale stone pathways, turquoise lotus pond lower left, streams and a small curved bridge, cloud sea, distant dramatic mountains, ancient tall pine and ginkgo trees, warm lanterns, luminous magical crystal. Professional premium game concept illustration quality, crisp readable silhouettes, restrained beautiful atmospheric lighting with golden morning light. Precisely lay out SIX distinct identifiable small facilities with these approximate relative centers: grand two-tier main hall at x52%, y38%; timber lodge and bamboo grove at x18%, y52%; terraced herbal gardens and small pavilion at x29%,y73%; mineral quarry and tiny workshop at x82%,y52%; round circular glowing jade cultivation platform at x75%,y78%; alchemy pavilion and glowing furnace at x50%,y72%. Mountain horizon occupies top 18%, temple district occupies central and lower landscape. View from moderately high three-quarter overhead angle, natural gently rolling estate, winding paths connect these buildings. No huge foreground elements obscuring the center. No text, no symbols that look like letters, no logos, no watermarks, no people, no UI labels or buttons. This is finished usable artwork for a real browser game, not a mockup or screenshot.
```

## Bộ chân dung nhân vật

```
Use case: stylized-concept. Asset type: production CHARACTER PORTRAIT ATLAS for original xianxia fantasy game. A transparent-background atlas exactly 4 columns by 2 rows (8 equal square cells), landscape overall 2048x1024. Eight completely separate centered waist-up chibi young ADULT cultivators, premium polished hand-painted anime game character art, charming expressive faces, beautiful silk robes with tiny gold embroidery, highly detailed hair and facial rendering. Each character must be fully contained inside its own identical square cell with 8% transparent margin on all sides, no overlap between cells, no ground or background, no UI. All portraits face camera or slight 3/4, consistent scale, same soft studio lighting and beautiful jade/antique gold Chinese immortal cultivation visual style. Upper row left to right: 1 female jade-green healer with long black hair and small leafy hair ornament holding a delicate glowing jade branch; 2 male white-and-gold swordsman with long black hair in a topknot holding the hilt of a silver sword; 3 male blue-robed water mage, long navy-black hair, small pale blue glowing water orb; 4 female red-robed fire cultivator with long auburn hair and glowing flame at shoulder. Bottom row left to right: 5 female lavender celestial alchemist with silvery-white hair and a pill bottle; 6 male ochre and green mountain guardian with brown hair and strong calm expression; 7 male sect master in elegant ivory-white and jade robe, long black hair tied in a bun, serene smile, jade ornament, round subtle gold halo behind head included in transparent artwork; 8 a tiny magical white-and-turquoise spirit fox with elegant fluffy ears and jade markings, cute intelligent eyes. No text, no watermarks, no rectangles framing cells, no dark background. Output real transparent alpha outside characters. Exactly EIGHT portraits, do not add anything else.
```

## Sân chiến đấu

```
Use case: stylized-concept. Asset type: original xianxia battle arena background for a professional browser game. Landscape 1536x1024. Exquisitely painted 2.5D fantasy sacred bamboo forest courtyard, polished stone circular floor wide open in the foreground and middle (the bottom 60% must remain open readable flat space for fighting characters). Forest and ancient temple gate at rear center, layered jade green bamboo and ginkgo trees, hanging warm gold lanterns at edges, mossy stone lanterns, luminous small fireflies, misty distant mountains, a glimmering turquoise stream at far edges. High-end hand-painted game environmental art, jade emerald and forest green, antique gold highlights, rich cinematic light, atmospheric perspective, detailed materials, balanced composition, slightly elevated three-quarter camera, restrained saturation, pleasing elegance. No people, no monsters, no text, no logos, no user interface or buttons. Finished usable background art, not a UI mockup.
```
