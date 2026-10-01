import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const homeRoot = new URL('../', import.meta.url)
const entryFile = new URL('index.html', homeRoot)
const source = readFileSync(entryFile, 'utf8')
const versioned = source.replace(
  /(<(?:script|link)\b[^>]*?\b(?:src|href)=")([^"]+)(")/g,
  (match, prefix, reference, suffix) => {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) return match
    const url = new URL(reference, 'https://homepage.invalid/')
    const content = readFileSync(new URL(url.pathname.slice(1), homeRoot))
    const canonical = /\.(?:css|m?js|svg|json|html)$/i.test(url.pathname)
      ? content.toString('utf8').replace(/\r\n/g, '\n') : content
    const revision = createHash('sha256').update(canonical).digest('hex').slice(0, 12)
    url.searchParams.set('v', revision)
    const assetPath = reference.split(/[?#]/, 1)[0]
    return prefix + assetPath + url.search + url.hash + suffix
  },
)
if (versioned !== source) writeFileSync(entryFile, versioned)
console.log(versioned === source ? 'Homepage asset versions are current.' : 'Updated homepage asset versions.')
