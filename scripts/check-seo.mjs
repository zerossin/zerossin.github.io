// 모든 HTML 페이지의 canonical·og:url 이 대표 주소(zerossin.com)인지, sitemap.xml·robots.txt 가
// 맞게 연결됐는지 확인한다. 사용: node scripts/check-seo.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ORIGIN = 'https://zerossin.com'
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const skip = new Set(['.git', 'node_modules', 'assets', 'shared'])
const errors = []

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) return skip.has(name) ? [] : htmlFiles(p)
    return name.endsWith('.html') ? [p] : []
  })
}

function expectedUrl(file) {
  const rel = relative(root, file).split(sep).join('/')
  if (rel === 'index.html') return `${ORIGIN}/`
  if (rel.endsWith('/index.html')) return `${ORIGIN}/${rel.slice(0, -'index.html'.length)}`
  return `${ORIGIN}/${rel}`
}

const attr = (tag, name) => new RegExp(`${name}\s*=\s*"([^"]*)"`, 'i').exec(tag)?.[1]

for (const file of htmlFiles(root)) {
  const html = readFileSync(file, 'utf8')
  const want = expectedUrl(file)
  const name = relative(root, file)
  const canon = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/gi)].map((m) => attr(m[0], 'href'))
  if (canon.length !== 1) errors.push(`${name}: canonical ${canon.length}개`)
  else if (canon[0] !== want) errors.push(`${name}: canonical ${canon[0]} (기대 ${want})`)
  const og = [...html.matchAll(/<meta\b[^>]*property="og:url"[^>]*>/gi)].map((m) => attr(m[0], 'content'))
  if (og.length > 1 || (og.length === 1 && og[0] !== want)) errors.push(`${name}: og:url ${og.join(',')} (기대 ${want})`)
}

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8')
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
for (const must of [`${ORIGIN}/`, `${ORIGIN}/catheryne/`]) {
  if (!locs.includes(must)) errors.push(`sitemap.xml: ${must} 없음`)
}
for (const loc of locs) {
  if (!loc.startsWith(`${ORIGIN}/`)) errors.push(`sitemap.xml: 대표 주소가 아닌 ${loc}`)
}
if (!readFileSync(join(root, 'robots.txt'), 'utf8').includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) {
  errors.push('robots.txt: Sitemap 줄 없음')
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log('seo ok')
