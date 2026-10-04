"""Build the static page's app-font subset; requires fonttools[woff]."""
import argparse
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--font', type=Path, required=True, help='Catheryne apps/desktop/fonts/NanumGothic-Bold.ttf')
args = parser.parse_args()
root = Path(__file__).resolve().parent.parent
characters = ''.join((root / path).read_text(encoding='utf-8') for path in ['catheryne/index.html', 'catheryne/app.js'])
# Include ASCII and the nonbreaking space used by the translated companion line.
characters += ''.join(chr(code) for code in range(32, 127)) + '\u00a0'
font = TTFont(args.font)
options = subset.Options()
options.flavor = 'woff2'
subsetter = subset.Subsetter(options=options)
subsetter.populate(text=characters)
subsetter.subset(font)
# A derivative must not retain the original OFL Reserved Font Names.
for record in font['name'].names:
    names = {1:'Catheryne Site', 2:'Bold', 3:'Catheryne Site Bold', 4:'Catheryne Site Bold', 6:'CatheryneSite-Bold', 16:'Catheryne Site', 17:'Bold'}
    if record.nameID in names:
        record.string = names[record.nameID].encode(record.getEncoding())
font.flavor = 'woff2'
target = root / 'catheryne/assets/catheryne-bold.woff2'
font.save(target)
print(f'{target.name}: {target.stat().st_size} bytes')
