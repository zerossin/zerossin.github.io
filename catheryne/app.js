const repository = 'https://github.com/zerossin/catheryne';
export function selectInstallerUrl(releases) {
 if (!Array.isArray(releases)) return null;
 for (const release of releases) {
  if (!release || release.draft || !Array.isArray(release.assets)) continue;
  const asset = release.assets.find(asset => {
   if (!/^Catheryne-Setup-\d+\.\d+\.\d+\.exe$/.test(asset?.name ?? '') || !(asset.size > 0)) return false;
   try {
    const url = new URL(asset.browser_download_url);
    return url.protocol === 'https:' && url.host === 'github.com'
     && !url.username && !url.password && !url.search && !url.hash
     && url.pathname.startsWith('/zerossin/catheryne/releases/download/');
   } catch { return false; }
  });
  if (asset) return asset.browser_download_url;
 }
 return null;
}
const korean = {
 skip:'본문으로 이동', guide:'사용 안내', headline:'원신 여정에, ChatGPT와 함께.', introScope:'계정 관리부터 육성, 일상, 플레이까지.', introCompanion:'원신을 위한 Windows\u00a0동반자.', releases:'릴리스', start:'사용 안내',
 aiTitle:'ChatGPT', aiBody:'육성을 물어보고 플레이 도움을 받으세요.',
 accountTitle:'계정·육성', accountBody:'보유 캐릭터와 장비를 살펴보고 육성을 계획하세요.',
 toolsTitle:'편의 기능', toolsBody:'캡처·레진·일정·화면 설정·모드를 한곳에서 관리하세요.',
 games:'게임'
};
if (typeof document !== 'undefined') {
 const lang = new URL(location.href).searchParams.get('lang') === 'ko' ? 'ko' : 'en';
 document.documentElement.lang = lang;
 if (lang === 'ko') {
  document.querySelector('nav').setAttribute('aria-label', '주 메뉴');
  document.querySelector('.features').setAttribute('aria-label', '주요 기능');
  document.querySelector('.brand').href = '?lang=ko';
  document.querySelectorAll('[data-text]').forEach(element => {
   const value = korean[element.dataset.text];
   if (value) element.textContent = value;
  });
  document.title = '캣서린 — 원신을 위한 ChatGPT 동반자';
  document.querySelector('meta[name="description"]').content = '계정 관리부터 육성, 일상, 플레이까지. 원신을 위한 Windows 동반자 캣서린의 기능과 설치 안내.';
  const language = document.querySelector('#language');
  language.href = '?lang=en'; language.lang = 'en'; language.hreflang = 'en'; language.textContent = 'English';
  document.querySelectorAll('[data-guide]').forEach(link => { link.href = `${repository}/blob/main/docs/USER-GUIDE.ko.md`; });
 }
 const button = document.querySelector('#download');
 try {
  const response = await fetch('https://api.github.com/repos/zerossin/catheryne/releases?per_page=10', { signal: AbortSignal.timeout(7000), headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) throw new Error('Releases unavailable');
  const installerUrl = selectInstallerUrl(await response.json());
  if (installerUrl) {
   button.href = installerUrl;
   button.textContent = lang === 'ko' ? '다운로드' : 'Download';
  }
 } catch { /* Keep the working Releases link when the API is unavailable. */ }
}
