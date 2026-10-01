# Personal homepage test 개인 홈페이지 테스트
## address: [zerossin.com](https://zerossin.com/)

If you can't connect, please connect to that address.
(https://zerossin.github.io/)
(https://gitpage.zerossin.com/)

## Games

홈의 Games 아이콘은 https://game.zerossin.com/ 게임 런처로 연결됩니다. 기존 Game 폴더의 게임 목록과 아이콘은 별도 ai-battle 프로젝트의 frontend/src/games/registry.js에서 관리합니다. 게임 아이콘으로 쓰던 이미지 원본은 이 저장소에 남겨 둡니다. 앱 id는 game을 유지해 저장된 홈 아이콘 배치를 보존합니다.

Games는 3D 조이스틱 그림인 `assets/images/games-joystick.webp`를 사용합니다. 아이콘의 색을 반영하는 공통 마감은 `assets/css/icon-glass.css`입니다. 해당 CSS와 Games 그림의 원본은 ai-battle 프로젝트가 관리하며 `scripts/sync-home-icons.ps1 -HomeRepository D:/GitHub/zerossin.github.io`로 이 저장소의 사본을 갱신합니다. 각 사이트는 자체 사본을 제공하고 다른 서버를 런타임에 참조하지 않습니다. 아이콘별 `iconTint` 또는 배경색으로 빛과 그림자의 색을 지정합니다.