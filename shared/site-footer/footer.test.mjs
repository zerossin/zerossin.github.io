import test from 'node:test'
import assert from 'node:assert/strict'
import { renderFooter, syncFooter } from './sync.mjs'

test('common links remain accessible and safe in each language', () => {
  for (const locale of ['ko', 'en']) {
    const html = renderFooter({ locale })
    assert.match(html, /<footer class="zerossin-footer">/)
    assert.equal((html.match(/<nav /g) || []).length, 1)
    assert.equal((html.match(/<a /g) || []).length, 3)
    assert.equal((html.match(/rel="noopener noreferrer"/g) || []).length, 2)
    assert.match(html, /href="mailto:zerossin.dev@gmail.com"/)
    assert.doesNotMatch(html, /<script|onclick=/)
  }
})
test('local links extend the shared footer and contact may retain the existing support flow', () => {
  const html = renderFooter({ locale: 'ko', contact: '/support', links: [{href:'/privacy',label:{ko:'개인정보 & 안내',en:'Privacy'}}] }, '<p>필수 출처</p>')
  assert.match(html, /href="\/support">문의/)
  assert.match(html, /href="https:\/\/zerossin.com\//)
  assert.match(html, /개인정보 &amp; 안내/)
  assert.match(html, /zerossin-footer-notices.*필수 출처/)
  assert.throws(() => renderFooter({ links: [{href:'javascript:alert(1)',label:{ko:'unsafe'}}] }))
})
test('all committed project projections use the canonical markup and stylesheet', () => syncFooter({ check: true }))
