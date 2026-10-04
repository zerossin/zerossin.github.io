# Personal homepage test 개인 홈페이지 테스트
## address: [zerossin.com](https://zerossin.com/)

If you can't connect, please connect to that address.
(https://zerossin.github.io/)
(https://gitpage.zerossin.com/)

## Games

홈의 Games 아이콘은 https://game.zerossin.com/games 게임 런처로 연결됩니다. 기존 Game 폴더의 게임 목록과 아이콘은 별도 zerossin-games 프로젝트의 frontend/src/games/registry.js에서 관리합니다. 게임 아이콘으로 쓰던 이미지 원본은 이 저장소에 남겨 둡니다. 앱 id는 game을 유지해 저장된 홈 아이콘 배치를 보존합니다.

Games는 3D 조이스틱 그림인 `assets/images/games-joystick.webp`를 사용합니다. 아이콘의 색을 반영하는 공통 마감은 `assets/css/icon-glass.css`입니다. 해당 CSS와 Games 그림의 원본은 zerossin-games 프로젝트가 관리하며 `scripts/sync-home-icons.ps1 -HomeRepository D:/GitHub/zerossin.github.io`로 이 저장소의 사본을 갱신합니다. 각 사이트는 자체 사본을 제공하고 다른 서버를 런타임에 참조하지 않습니다. 아이콘별 `iconTint` 또는 배경색으로 빛과 그림자의 색을 지정합니다.

## 게시

GitHub Pages는 main 브랜치에서 게시하며, NAS의 zerossin.com은 별도 자동 갱신기가 같은 저장소를 가져옵니다. 홈페이지의 CSS·JavaScript 등을 바꾼 뒤 푸시하기 전에 `node scripts/version-assets.mjs`를 실행합니다. 파일 내용의 해시를 진입 HTML의 주소에 넣어 브라우저·Cloudflare 캐시에 옛 화면 파일이 남아 있어도 새 파일을 불러옵니다.

## Catheryne

`/catheryne/`는 캣서린 소개 페이지다. 소개·마스코트·다운로드/사용 안내·기능 세 칸만 보여주고, 설치 절차는 별도 사용자 안내로 연결한다. 홈 Tool 폴더, Catheryne GitHub README, 추후 Games 배너는 같은 주소 `https://zerossin.com/catheryne/`를 사용한다. `?lang=ko`로 한국어를 볼 수 있다. GitHub Releases의 실제 Windows 설치 파일을 조회해 다운로드 버튼을 갱신하며, 아직 없거나 조회가 실패하면 릴리스 목록으로 연결한다. 설치 파일은 이 홈페이지에 복제하지 않는다.

`catheryne/assets/launcher.png`와 `welcome.png`는 Catheryne 저장소의 동일한 branding 파일 사본이다. 프로젝트 소유자가 만든 그림이며 원본과 편집 기록은 Catheryne의 `apps/desktop/branding/README.md`에서 관리한다. 캐시 주소 갱신은 기존 `node scripts/version-assets.mjs`가 이 페이지도 처리한다. Games 배너는 이번 변경에서 추가하지 않는다.
