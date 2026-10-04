import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const homeRoot = new URL('../', import.meta.url)
function versionReference(reference, entryPath) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) return reference
  const url = new URL(reference, 'https://homepage.invalid/' + entryPath)
  const content = readFileSync(new URL(url.pathname.slice(1), homeRoot))
  const canonical = /\.(?:css|m?js|svg|json|html)$/i.test(url.pathname)
    ? content.toString('utf8').replace(/\r\n/g, '\n') : content
  url.searchParams.set('v', createHash('sha256').update(canonical).digest('hex').slice(0, 12))
  return reference.split(/[?#]/, 1)[0] + url.search + url.hash
}

// Version the font before hashing the stylesheet that references it.
for (const entryPath of ['catheryne/style.css']) {
  const file = new URL(entryPath, homeRoot)
  const source = readFileSync(file, 'utf8')
  const versioned = source.replace(/url\("([^"]+)"\)/g,
    (_, reference) => `url("${versionReference(reference, entryPath)}")`)
  if (versioned !== source) writeFileSync(file, versioned)
}

for (const entryPath of ['index.html', 'catheryne/index.html']) {
  const entryFile = new URL(entryPath, homeRoot)
  const source = readFileSync(entryFile, 'utf8')
  const versioned = source.replace(
    /(<(?:script|link|img)\b[^>]*?\b(?:src|href)=")([^"]+)(")/g,
    (_, prefix, reference, suffix) => prefix + versionReference(reference, entryPath) + suffix,
  )
  if (versioned !== source) writeFileSync(entryFile, versioned)
  console.log(versioned === source ? 'Homepage asset versions are current.' : 'Updated homepage asset versions.')
}
