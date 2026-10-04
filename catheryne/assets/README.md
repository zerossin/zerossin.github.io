# Catheryne landing assets

`app-background.webp` is a small decorative composition of the approved real
app captures (capabilities chat, the first Spiral Abyss capture, primogem ledger).
It stays behind the existing mascot; copy, actions and feature layout are retained.
The capture sources are the Catheryne promotion assets in zerossin-games.

`catheryne-bold.woff2` is a subset of the app's NanumGothic Bold for this static
English/Korean page. Its derivative family is named Catheryne Site to respect the
OFL Reserved Font Names; the glyph design is unchanged. See `OFL.txt`.
After changing page copy, regenerate with Python and `fonttools[woff]` installed:

```
python scripts/build-catheryne-font.py --font /path/to/catheryne/apps/desktop/fonts/NanumGothic-Bold.ttf
node scripts/version-assets.mjs
```
