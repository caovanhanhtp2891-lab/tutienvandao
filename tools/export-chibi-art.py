"""Convert imagegen outputs into game WebP assets; never alter their content.

Usage: python tools/export-chibi-art.py /absolute/path/to/source-map.json
The JSON maps realm0..realm9, characters, battle and world to PNG paths.
"""
import hashlib
from io import BytesIO
import json
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sources = json.loads(Path(sys.argv[1]).read_text())
manifest = []

def export(key, path, size, quality, budget):
    source = Path(sources[key])
    with Image.open(source) as image:
        image = image.resize(size, Image.Resampling.LANCZOS)
        target = ROOT / path
        target.parent.mkdir(parents=True, exist_ok=True)
        while True:
            output = BytesIO()
            image.save(output, 'WEBP', quality=quality, method=4)
            data = output.getvalue()
            if len(data) < budget or quality <= 55:
                break
            quality -= 3
    assert len(data) < budget, path
    target.write_bytes(data)
    manifest.append(dict(path=path, width=size[0], height=size[1], bytes=len(data),
                         quality=quality, source=source.name,
                         sha256=hashlib.sha256(data).hexdigest()))

for realm in range(10):
    export(f'realm{realm}', f'dist/assets/retreat/realm-{realm}.webp', (1536,1024), 78, 350000)
    export(f'realm{realm}', f'dist/assets/retreat/realm-{realm}-mobile.webp', (768,512), 74, 100000)
export('characters', 'dist/assets/characters.webp', (1024,512), 84, 400000)
export('battle', 'dist/assets/battle-courtyard.webp', (1280,853), 78, 350000)
export('world', 'dist/assets/sect-world.webp', (1536,1024), 76, 350000)
export('world', 'dist/assets/sect-world-mobile.webp', (768,512), 74, 100000)
(ROOT/'docs/chibi-art-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n')
print(json.dumps(dict(files=len(manifest), total_bytes=sum(x['bytes'] for x in manifest),
                      largest=max(x['bytes'] for x in manifest)), indent=2))
