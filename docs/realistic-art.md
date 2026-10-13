# Bộ hình ảnh tự nhiên · v2.2

Ngày: 2026-10-13. Công cụ: built-in imagegen (không dùng CLI/API). Đây là ảnh tạo mới theo phong cách điện ảnh chân thực, không phải ảnh chụp một người hay địa điểm có thật. Bộ hình trước đã được thay trong toàn bộ tài nguyên raster đang dùng.

13 ảnh gốc: 10 cảnh bế quan, một atlas gồm 8 chân dung, sân tỷ thí và bản đồ tông môn. 24 file WebP phục vụ PC/điện thoại. Chỉ chuyển định dạng và thay đổi kích thước bằng Pillow; không sửa nội dung hình bằng mã.

Định hướng: da có kết cấu, gương mặt tự nhiên, quần áo có đường may và trọng lượng, gỗ/đá cũ, cây cối và địa hình hợp lý, ánh sáng dịu. Loại bỏ vòng hào quang, long ảnh, linh thể khổng lồ và các chi tiết trang trí phát quang. Mỗi đại cảnh giới có cảnh, sắc áo và ánh sáng riêng. Giảm hạt CSS từ tối đa 25 xuống 10 (chế độ Nhẹ: tối đa 2), bỏ vòng quay và bỏ bộ lọc đổi màu chân dung/sân đấu v1.

## File trong dự án

| File | Kích thước | Dung lượng |
| --- | --- | --- |
| `dist/assets/retreat/realm-0.webp` | 1536 × 1024 | 214.6 KB |
| `dist/assets/retreat/realm-0-mobile.webp` | 768 × 512 | 71.8 KB |
| `dist/assets/retreat/realm-1.webp` | 1536 × 1024 | 257.4 KB |
| `dist/assets/retreat/realm-1-mobile.webp` | 768 × 512 | 93.8 KB |
| `dist/assets/retreat/realm-2.webp` | 1536 × 1024 | 231.1 KB |
| `dist/assets/retreat/realm-2-mobile.webp` | 768 × 512 | 83.6 KB |
| `dist/assets/retreat/realm-3.webp` | 1536 × 1024 | 264.9 KB |
| `dist/assets/retreat/realm-3-mobile.webp` | 768 × 512 | 88.5 KB |
| `dist/assets/retreat/realm-4.webp` | 1536 × 1024 | 202.2 KB |
| `dist/assets/retreat/realm-4-mobile.webp` | 768 × 512 | 66.1 KB |
| `dist/assets/retreat/realm-5.webp` | 1536 × 1024 | 221.1 KB |
| `dist/assets/retreat/realm-5-mobile.webp` | 768 × 512 | 77.1 KB |
| `dist/assets/retreat/realm-6.webp` | 1536 × 1024 | 172.5 KB |
| `dist/assets/retreat/realm-6-mobile.webp` | 768 × 512 | 54.0 KB |
| `dist/assets/retreat/realm-7.webp` | 1536 × 1024 | 276.6 KB |
| `dist/assets/retreat/realm-7-mobile.webp` | 768 × 512 | 95.1 KB |
| `dist/assets/retreat/realm-8.webp` | 1536 × 1024 | 198.2 KB |
| `dist/assets/retreat/realm-8-mobile.webp` | 768 × 512 | 66.6 KB |
| `dist/assets/retreat/realm-9.webp` | 1536 × 1024 | 191.5 KB |
| `dist/assets/retreat/realm-9-mobile.webp` | 768 × 512 | 61.9 KB |
| `dist/assets/characters.webp` | 1536 × 768 | 312.6 KB |
| `dist/assets/battle-courtyard.webp` | 1280 × 853 | 255.8 KB |
| `dist/assets/sect-world.webp` | 1536 × 1024 | 388.8 KB |
| `dist/assets/sect-world-mobile.webp` | 768 × 512 | 104.6 KB |

Các đường dẫn trên nằm trong `/workspace/scratch/ee449f37a6ce/tutienvandao/` và được đồng bộ về GitHub. Tất cả URL ảnh đã có phiên bản `?v=2.2.0` để trình duyệt lấy đúng bộ ảnh mới. Bản lưu, khóa localStorage và cơ chế tu luyện không thay đổi.

## Prompt cuối cùng

### base

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-6b7d3467-6c8b-4e46-a35a-65b3415aaee9.png`.

```text
Use case: photorealistic-natural.
Asset type: full-screen background for a Vietnamese cultivation RPG, realm 0 mortal. Create a LANDSCAPE 1536x1024 realistic live-action historical film still, not an illustration.
Scene: a small, believable hillside monastery courtyard at the edge of a bamboo grove, rough grey sandstone paving, one simple dark timber pavilion at the right edge, distant forested mountain slopes and a little early-morning mist. This should look like a real location and practical costume set.
Subject: a fictional East Asian man about 29, ordinary handsome but not idealized, realistic slightly sun-weathered skin, fine pores, faint facial imperfections, black hair loosely tied in a practical half bun. He sits cross-legged on a worn plain stone slab, eyes gently closed, hands naturally resting one on the other in his lap, correct anatomy. Simple pale flax linen robe, charcoal sash, visible seams, real folds and fabric weight, no jewelry. Entire seated body and crossed legs visible.
Composition: subject center at 52% image width, face near 40% image height, crossed legs end near 77%; medium-wide 40mm camera at seated eye level, subject occupies roughly middle third of width. Quiet uncluttered side areas for game panels. Moderate depth of field, subject crisp, location still readable.
Lighting: soft overcast morning daylight through bamboo, physically plausible shadows and atmospheric perspective, subdued sage, grey and warm stone tones, natural restrained contrast.
Materials: damp stone with small chips, irregular moss patches, believable bamboo leaves, matte cloth, actual human skin texture.
Avoid: anime, painted concept art, doll face, beauty-retouched skin, plastic skin, CGI game render, glossy HDR, excessive sharpness, orange-teal grade, enchanted lights, floating temples or rocks, impossible mountains, decorative halo or mandala, glowing eyes, lettering, UI, watermark. Grounded cinematic realism is the priority.
```

### arena

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-6a73c4fa-da1d-45cf-b3bb-5d845dc98a53.png`.

```text
Use case: photorealistic-natural.
Asset type: battle courtyard background for a historical cultivation web RPG.
Create a landscape 1536x1024 live-action period-drama location photograph of an empty practical martial-arts courtyard. Low camera looking slightly down across a broad oval of worn grey flagstones, uncluttered central and lower 70% for two fighters. At the rear, one modest real timber monastery gate and shallow stone stairs, cedar trees and bamboo along edges, forested low mountain in background. Architecture structurally believable with plain grey clay tile roofs and aged wood, no gold ornament. A shallow engraved training circle may be visible in the paving, subtle and physically carved, not illuminated. Overcast afternoon natural light, calm dark green foliage and warm grey stone, realistic shadows. Natural texture and soft photographic detail, rain stains, hairline cracks, a few fallen leaves, slight atmospheric depth.
Avoid illustration, anime, concept art, CGI, glossy HDR, symmetrical repeated fake details, excessive temples, fantasy mountain spires, turquoise glow, magic crystals, floating objects, text, people, animals, UI, watermark. Looks like a beautiful real filming location.
```

### world

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-783582ac-b358-4181-98f8-e76e2070027d.png`.

```text
Use case: photorealistic-natural.
Asset type: aerial world background for a cultivation sect management web game.
Landscape 1536x1024. A believable aerial photograph, oblique drone view of a secluded traditional East Asian hillside monastery campus on connected solid mountain terraces. Six distinct small structures: main monastery hall in upper middle, quiet wooden study hall on left middle, modest workshop/mining shed beside a natural stone outcrop on right middle, small apothecary hall with bronze outdoor cauldron in lower middle, herb garden and a natural pond lower left, circular stone meditation terrace lower right. Preserve clear spacing and paths between structures for game map buttons; keep all six inside the central 85% of the image.
Real traditional dark timber and grey tiled roofs, modest bronze fittings rather than golden palace ornament, narrow stone paths with sensible stairs, forest and bamboo around the edges. The whole campus sits on a continuous forested hillside; hazy, softly rolling rocky mountains far beyond. No abyss between buildings. Autumn early-morning sun, soft shadows, earthy greens and stone greys, realistic scale and material texture, coherent architecture, elegant but lived-in.
Avoid illustrated isometric game art, miniature tilt-shift look, plastic CGI, neon turquoise water, luminous crystals, glowing circles, fantasy waterfalls, floating islands, absurd tall rock spires, ornate dragons on roofs, repeated impossible architectural details, text, UI or watermark. Aim for grounded real-location cinematography.
```

### realm1

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-f79e67ba-5948-4e8a-ba11-5353c3c12a19.png`.

```text
Use case: identity-preserve / photorealistic-natural. Asset type: landscape 1536x1024 full-screen historical cultivation RPG scene.
Input image: reference for the man's identity and natural photographic rendering ONLY. Create a new scene from the brief. Keep the SAME fictional adult East Asian man, same realistic face with faint moustache and skin texture, black half-bun, closed eyes, calm expression, cross-legged meditation, hands naturally resting together in lap. Keep true human anatomy.
Composition: move camera a little farther back than reference, medium-wide seated-eye-level 40mm shot, subject centered at 52% width, face at 38% height, full seated body ending around 78% height, quiet space at left/right for game panels. Must see entire crossed legs. Scene must look like a real live-action costume-drama frame on a practical location. Real woven textiles, sensible costume construction, natural wood, aged stone, believable terrain and atmospheric perspective.
Realm scene: Luyện Khí. A quiet jade-green cotton robe over cream linen, simple dark sash, no armor or crown. Seated on an old stone terrace next to bamboo, a narrow natural stream beyond, gentle spring daylight and fresh green leaves. A few dust flecks catching sunlight, absolutely no luminous aura. New novice cultivator settled into the monastery. Muted moss, charcoal and off-white palette.
Constraints: The man must remain a real human. Any hint of spiritual power is subtle like light in air, not flashy fantasy decoration. No anime, illustration, doll face, plastic CGI, retouched skin, floating rocks or temples, magic portal, halos, giant glowing lotus, neon colors, text, UI or watermark.
```

### realm2

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-92ccbab0-1c97-478c-b0e5-aad273a85049.png`.

```text
Use case: identity-preserve / photorealistic-natural. Asset type: landscape 1536x1024 full-screen historical cultivation RPG scene.
Input image: reference for the man's identity and natural photographic rendering ONLY. Create a new scene from the brief. Keep the SAME fictional adult East Asian man, same realistic face with faint moustache and skin texture, black half-bun, closed eyes, calm expression, cross-legged meditation, hands naturally resting together in lap. Keep true human anatomy.
Composition: move camera a little farther back than reference, medium-wide seated-eye-level 40mm shot, subject centered at 52% width, face at 38% height, full seated body ending around 78% height, quiet space at left/right for game panels. Must see entire crossed legs. Scene must look like a real live-action costume-drama frame on a practical location. Real woven textiles, sensible costume construction, natural wood, aged stone, believable terrain and atmospheric perspective.
Realm scene: Trúc Cơ. A well-fitted slate-blue woven robe and ivory collar, simple cloth wrist wraps. Seated on a low worn circular stone platform in a cedar grove beside a small real mountain waterfall. After-rain cool dawn light, barely visible river mist at ankle level, dark stone with damp patches. One tiny softly lit stone lantern at far edge, otherwise natural light. No lit carving, no glowing circles. Calm stable discipline, grey-blue and cedar green.
Constraints: The man must remain a real human. Any hint of spiritual power is subtle like light in air, not flashy fantasy decoration. No anime, illustration, doll face, plastic CGI, retouched skin, floating rocks or temples, magic portal, halos, giant glowing lotus, neon colors, text, UI or watermark.
```

### realm3

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-b4ad1e58-f616-49cf-a160-726479eb983c.png`.

```text
Use case: identity-preserve / photorealistic-natural. Asset type: landscape 1536x1024 full-screen historical cultivation RPG scene.
Input image: reference for the man's identity and natural photographic rendering ONLY. Create a new scene from the brief. Keep the SAME fictional adult East Asian man, same realistic face with faint moustache and skin texture, black half-bun, closed eyes, calm expression, cross-legged meditation, hands naturally resting together in lap. Keep true human anatomy.
Composition: move camera a little farther back than reference, medium-wide seated-eye-level 40mm shot, subject centered at 52% width, face at 38% height, full seated body ending around 78% height, quiet space at left/right for game panels. Must see entire crossed legs. Scene must look like a real live-action costume-drama frame on a practical location. Real woven textiles, sensible costume construction, natural wood, aged stone, believable terrain and atmospheric perspective.
Realm scene: Kim Đan. A natural undyed silk-linen robe with an understated ochre inner collar and thin bronze-colored woven trim, no ornate armor. Seated in a peaceful old monastery courtyard, ginkgo tree at the edge, late-autumn honey-colored sunlight from the side, realistic golden dust caught in the beam. A very subtle warm reflection close to hands, barely distinguishable from sunlight, no floating orb. Golden realm conveyed by natural autumn light and cloth, weathered timber and stone.
Constraints: The man must remain a real human. Any hint of spiritual power is subtle like light in air, not flashy fantasy decoration. No anime, illustration, doll face, plastic CGI, retouched skin, floating rocks or temples, magic portal, halos, giant glowing lotus, neon colors, text, UI or watermark.
```

### realm4

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-5849cd4a-81ee-4ba7-9e78-9524404c0f57.png`.

```text
Use case: identity-preserve / photorealistic-natural. Asset type: landscape 1536x1024 full-screen historical cultivation RPG scene.
Input image: reference for the man's identity and natural photographic rendering ONLY. Create a new scene from the brief. Keep the SAME fictional adult East Asian man, same realistic face with faint moustache and skin texture, black half-bun, closed eyes, calm expression, cross-legged meditation, hands naturally resting together in lap. Keep true human anatomy.
Composition: move camera a little farther back than reference, medium-wide seated-eye-level 40mm shot, subject centered at 52% width, face at 38% height, full seated body ending around 78% height, quiet space at left/right for game panels. Must see entire crossed legs. Scene must look like a real live-action costume-drama frame on a practical location. Real woven textiles, sensible costume construction, natural wood, aged stone, believable terrain and atmospheric perspective.
Realm scene: Nguyên Anh. A muted plum-grey robe layered over ivory linen, minimal embroidery. Seated on a stone terrace beside a lake in the mountains at dusk, actual distant wooded slopes, a simple pavilion at far side. Natural blue-hour twilight with a lavender horizon and two small warm practical lanterns on the edges. Gentle haze over lake, slightly shimmering small reflections on water. No duplicate ghost person, no aura figure, no radiant mandala. Dark plum, warm skin and blue-grey water.
Constraints: The man must remain a real human. Any hint of spiritual power is subtle like light in air, not flashy fantasy decoration. No anime, illustration, doll face, plastic CGI, retouched skin, floating rocks or temples, magic portal, halos, giant glowing lotus, neon colors, text, UI or watermark.
```

### characters

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-7c7b2c69-77f3-4efe-9e20-53601ab8c888.png`.

```text
Use case: photorealistic-natural / identity-preserve.
Asset type: ONE transparent character portrait sprite atlas for a web RPG. Make a 1536x768 image containing exactly EIGHT separate chest-up cutout portraits in an EXACT uniform 4 columns x 2 rows grid, each cell 384x384. No gutters that shift the cell centers, each portrait is centered entirely within its own square, head top near 8%, shoulders end at bottom, edges never overlap adjoining cells. Genuine alpha transparency outside each cutout, no background rectangles or contact shadows, no borders, no text.
Input reference: SAME man in image for cell 7 (bottom row third column), keep his grounded facial identity, black half-bun and faint moustache, now eyes open and wearing cream robe with dark sage collar.
Other slots, read left to right:
1 (top left): East Asian adult woman around 27, dark hair tied back, practical muted sage herbalist linen robe, natural calm face.
2 (top second): East Asian man around 32, black tied hair, off-white swordsman robe, subdued bronze sash, no weapon in frame.
3 (top third): East Asian man around 40, navy-blue woven scholar robe, realistic mature face, neatly tied dark hair.
4 (top right): East Asian adult woman around 31, deep rust-red cotton martial robe, plain dark tied hair.
5 (bottom left): East Asian woman around 46, small strands of grey in black tied hair, muted grey-purple apothecary robe, believable kind mature face.
6 (bottom second): East Asian man around 38, sturdy face, brown leather over dark moss linen, simple practical guard costume.
7 (bottom third): reference man's realistic face as specified.
8 (bottom right): realistic small white fox seated, actual fox proportions, natural pale fur and amber eyes, single bushy tail, no jewelry, magical glow or extra tails.
Style: portraits look like real actors wearing practical historical costumes, soft neutral daylight from front left, real skin pores, mild asymmetry, no beauty-filter finish. No extravagant headdresses or filigree, no spells, no halos, no anime or doll eyes, no glossy CGI, no illustration, no letter labels. Readable at small avatar size, generous visible faces.
```

### realm5

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-b280060d-c1c1-4e41-b774-08c90cc86a37.png`.

```text
Use case: identity-preserve / photorealistic-natural.
Asset type: landscape 1536x1024 full-screen scene of an advanced cultivator in a Vietnamese web RPG.
Input image: reference ONLY for the same man's identity, meditation pose and natural photographic rendering. The SAME fictional East Asian adult man with real skin pores, faint moustache, black half-bun, eyes closed, hands resting naturally together in lap. Correct human anatomy; fully visible seated cross-legged body.
Composition: medium-wide 40mm camera, seated eye level, subject centered at 52% width; stand the camera farther back than the reference, top of head about 34%, face near 40%, crossed legs end near 78% image height. Quiet usable space at the sides for game panels. Realistic live-action historical drama, natural proportions, real-world terrain, authentic sewn clothes with restrained detail.
Specific realm: Hóa Thần. Seated on a weathered stone terrace at a modest high-mountain retreat in winter. Real snow patches along the edges, one cedar, distant believable snow-covered mountain ridges. Layered pale stone-grey wool and silk robe, narrow silver-grey woven trim, dark sash, practical heavy fabric pooling over the crossed legs. Soft bright winter sky and cool reflected light, slight gentle haze. A serene strong presence conveyed by beautiful natural location and lighting, not a giant apparition. Warm natural skin, silver-grey and muted sky blue.
Avoid: illustration, painted concept art, anime, doll face, glossy game CGI, plastic or retouched skin, excessive HDR sharpness, wildly saturated hues, ornate repeated decoration, enchanted glowing crystals, huge light rings, impossible floating architecture, text, watermark or UI. Natural historical film imagery with understated spirituality.
```

### realm6

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-489188cc-d336-4724-9cb7-802430c7254d.png`.

```text
Use case: identity-preserve / photorealistic-natural.
Asset type: landscape 1536x1024 full-screen scene of an advanced cultivator in a Vietnamese web RPG.
Input image: reference ONLY for the same man's identity, meditation pose and natural photographic rendering. The SAME fictional East Asian adult man with real skin pores, faint moustache, black half-bun, eyes closed, hands resting naturally together in lap. Correct human anatomy; fully visible seated cross-legged body.
Composition: medium-wide 40mm camera, seated eye level, subject centered at 52% width; stand the camera farther back than the reference, top of head about 34%, face near 40%, crossed legs end near 78% image height. Quiet usable space at the sides for game panels. Realistic live-action historical drama, natural proportions, real-world terrain, authentic sewn clothes with restrained detail.
Specific realm: Luyện Hư. Seated on a solid flat rock terrace beside a real mountain cliff at early nightfall, distant wooded valleys and a horizon band of dusk, a few subtle stars only in the upper sky. Deep slate-indigo matte silk robe with simple ivory collar and understated silver stitching. Two small shielded oil lanterns at the far edges cast physically plausible warm light onto weathered stone, gentle moonlight makes the man visible. Ordinary real sky, no visible galaxy or nebula, no portal or floating debris. Quiet contemplative blue and amber palette.
Avoid: illustration, painted concept art, anime, doll face, glossy game CGI, plastic or retouched skin, excessive HDR sharpness, wildly saturated hues, ornate repeated decoration, enchanted glowing crystals, huge light rings, impossible floating architecture, text, watermark or UI. Natural historical film imagery with understated spirituality.
```

### realm7

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-dbd1d46f-6fef-4f78-95be-3bf84255d0c4.png`.

```text
Use case: identity-preserve / photorealistic-natural.
Asset type: landscape 1536x1024 full-screen scene of an advanced cultivator in a Vietnamese web RPG.
Input image: reference ONLY for the same man's identity, meditation pose and natural photographic rendering. The SAME fictional East Asian adult man with real skin pores, faint moustache, black half-bun, eyes closed, hands resting naturally together in lap. Correct human anatomy; fully visible seated cross-legged body.
Composition: medium-wide 40mm camera, seated eye level, subject centered at 52% width; stand the camera farther back than the reference, top of head about 34%, face near 40%, crossed legs end near 78% image height. Quiet usable space at the sides for game panels. Realistic live-action historical drama, natural proportions, real-world terrain, authentic sewn clothes with restrained detail.
Specific realm: Hợp Thể. A spring forest retreat: ancient cedar tree at left, mossy sandstone terrace, a few pale flowering branches at the right edge, layers of normal forested mountains beyond. Natural early-morning sunbeams through sparse leaves, fine mist at ground level. Muted sage silk-linen outer robe over cream, delicate dull bronze woven hem, no armor. A master in harmony with nature. Beautiful skin and textile texture, real wood bark and scattered petals. No yin-yang disc, no magical body duplicate, no giant aura. Gentle warm greens and ivory.
Avoid: illustration, painted concept art, anime, doll face, glossy game CGI, plastic or retouched skin, excessive HDR sharpness, wildly saturated hues, ornate repeated decoration, enchanted glowing crystals, huge light rings, impossible floating architecture, text, watermark or UI. Natural historical film imagery with understated spirituality.
```

### realm8

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-ed0a3009-6385-4a07-9ae8-ca669e1d953c.png`.

```text
Use case: identity-preserve / photorealistic-natural.
Asset type: landscape 1536x1024 full-screen scene of an advanced cultivator in a Vietnamese web RPG.
Input image: reference ONLY for the same man's identity, meditation pose and natural photographic rendering. The SAME fictional East Asian adult man with real skin pores, faint moustache, black half-bun, eyes closed, hands resting naturally together in lap. Correct human anatomy; fully visible seated cross-legged body.
Composition: medium-wide 40mm camera, seated eye level, subject centered at 52% width; stand the camera farther back than the reference, top of head about 34%, face near 40%, crossed legs end near 78% image height. Quiet usable space at the sides for game panels. Realistic live-action historical drama, natural proportions, real-world terrain, authentic sewn clothes with restrained detail.
Specific realm: Đại Thừa. A simple solid granite meditation terrace on a real high mountain summit above a sea of low clouds, distant real mountain peaks, a low practical stone balustrade at edges. Sunrise light streams from the left across his natural ivory silk-linen robe with understated aged-gold woven collar trim and charcoal sash. Sparse sensible embroidery rather than fantasy armor. Sunrise creates a soft, physically plausible rim light on hair and shoulders; a few drifting dust flecks near ground. Majestic spacious view with serene posture. No dragons, no radiant lotus throne, no ornamental halos, no floating temples, no golden spray. Warm sunrise gold and granite grey, restrained highlight contrast.
Avoid: illustration, painted concept art, anime, doll face, glossy game CGI, plastic or retouched skin, excessive HDR sharpness, wildly saturated hues, ornate repeated decoration, enchanted glowing crystals, huge light rings, impossible floating architecture, text, watermark or UI. Natural historical film imagery with understated spirituality.
```

### realm9

Nguồn gốc tạo: `/workspace/scratch/ee449f37a6ce/generated_images/exec-6a33ad27-666e-4eac-baaa-aa70e44eaeb3.png`.

```text
Use case: identity-preserve / photorealistic-natural.
Asset type: landscape 1536x1024 full-screen scene of an advanced cultivator in a Vietnamese web RPG.
Input image: reference ONLY for the same man's identity, meditation pose and natural photographic rendering. The SAME fictional East Asian adult man with real skin pores, faint moustache, black half-bun, eyes closed, hands resting naturally together in lap. Correct human anatomy; fully visible seated cross-legged body.
Composition: medium-wide 40mm camera, seated eye level, subject centered at 52% width; stand the camera farther back than the reference, top of head about 34%, face near 40%, crossed legs end near 78% image height. Quiet usable space at the sides for game panels. Realistic live-action historical drama, natural proportions, real-world terrain, authentic sewn clothes with restrained detail.
Specific realm: Độ Kiếp. Same man meditating calmly on an old broad stone terrace on a real rugged mountain during a gathering storm. Dramatic but believable dark rain clouds, one distant narrow fork of lightning far behind him near the LEFT sky, subtle cool light spill on wet stone. His layered charcoal-grey silk robe with off-white inner collar moves a little in a real wind, damp heavy folds and practical cloth belt, no crown. Dark mountain silhouettes and wind-bent pine trees at outer edges. The man remains fully visible with soft natural skylight and a small warm lamp at right. Photographic exposure retains skin detail. Restrained storm cinematography, not magical electric neon. No lightning striking his head, no floating body, no fire, no luminous runes, no portal, no celestial beings.
Avoid: illustration, painted concept art, anime, doll face, glossy game CGI, plastic or retouched skin, excessive HDR sharpness, wildly saturated hues, ornate repeated decoration, enchanted glowing crystals, huge light rings, impossible floating architecture, text, watermark or UI. Natural historical film imagery with understated spirituality.
```
