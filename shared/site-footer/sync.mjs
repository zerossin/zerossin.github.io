import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'

const here = dirname(fileURLToPath(import.meta.url))
const specification = JSON.parse(readFileSync(resolve(here, 'footer.json'), 'utf8'))
const stylesheet = readFileSync(resolve(here, 'footer.css'), 'utf8')
const stamp = createHash('sha256').update(JSON.stringify(specification) + stylesheet).digest('hex').slice(0, 12)
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))

/** One markup owner for React, Vue and static pages; no runtime fetch or script. */
export function renderFooter(project, notices = '') {
  const links = [...specification.links.map(link => ({ ...link })), ...(project.links || [])]
  if (project.contact) links[2].href = project.contact
  const locale = project.locale || 'ko'
  const anchors = links.map(link => {
    if (!/^(https:\/\/|mailto:|\/[^/])/.test(link.href)) throw new Error('Unsupported footer link: ' + link.href)
    const external = link.href.startsWith('https://')
    const translation = locale === 'en' ? ` data-text="footer${link.label.en}"` : ''
    return `<a href="${escape(link.href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}${translation}>${escape(link.label[locale])}</a>`
  }).join('')
  return `<footer class="zerossin-footer"><small>© ${escape(specification.owner)}</small><nav aria-label="${locale === 'ko' ? '사이트 정보' : 'Site information'}">${anchors}</nav>${notices ? `<div class="zerossin-footer-notices">${notices}</div>` : ''}</footer>`
}

export function syncFooter({ check = false, repositoriesRoot = resolve(here, '../../..') } = {}) {
  const generated = `Generated from zerossin.github.io/shared/site-footer (sha256:${stamp}). Do not edit; run sync.mjs.`
  let failures = 0
  const output = (path, value) => {
    let previous
    try { previous = readFileSync(path, 'utf8') } catch { /* Missing generated artifact. */ }
    if (previous === value) return
    if (check) { console.error('Footer differs: ' + path); failures++; return }
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, value)
    console.log('Updated ' + path)
  }
  for (const [name, project] of Object.entries(specification.projects)) {
    const repository = resolve(repositoriesRoot, project.repository)
    output(resolve(repository, project.css), `/* ${generated} */\n${stylesheet}`)
    if (project.module) output(resolve(repository, project.module), `// ${generated}\nexport const siteFooterHtml = ${JSON.stringify(renderFooter(project))}\n`)
    if (project.page) {
      const path = resolve(repository, project.page)
      const source = readFileSync(path, 'utf8')
      const range = /<!-- zerossin-footer:start -->[\s\S]*?<!-- zerossin-footer:end -->/
      const previous = source.match(range)?.[0]
      if (!previous) throw new Error('Missing footer range: ' + path)
      const notices = project.retainNotices ? previous.match(/<div class="zerossin-footer-notices">([\s\S]*?)<\/div>/)?.[1].trim() : ''
      if (project.retainNotices && !notices) throw new Error('Project attribution must be preserved: ' + path)
      const container = name === 'homepage' ? 'os-footer-container' : name === 'catheryne' ? 'site-footer-container wrap' : 'site-footer-container'
      output(path, source.replace(range, `<!-- zerossin-footer:start -->\n<!-- ${generated} -->\n<div class="${container}">${renderFooter(project, notices)}</div>\n<!-- zerossin-footer:end -->`))
    }
  }
  if (failures) throw new Error(`${failures} generated footer artifacts need synchronization`)
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) syncFooter({ check: process.argv.includes('--check') })
