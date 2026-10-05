# Zerossin 공통 사이트 푸터

`footer.json`은 소유자·공통 링크·언어·프로젝트별 추가 링크의 단일 원본입니다. `footer.css`는 배치·간격·타이포그래피·반응형·포커스의 단일 원본이며, `sync.mjs`만 마크업을 만듭니다. React/Vue/정적 HTML은 생성된 결과를 그대로 사용합니다. 테마와 바깥 페이지 너비만 호스트에서 연결합니다.

대상: 제로신 홈페이지, Catheryne 소개 페이지, Zerossin Games 홈, 위키림 홈, 어딜까용. 정적 홈페이지의 `generic.html`·`elements.html`은 미사용 HTML5 UP 예제이고, 작업창의 저장 영역과 게임 내 안내는 사이트 푸터가 아니므로 대상이 아닙니다. 어딜까용의 공공데이터·마스코트 출처와 이용 조건은 그대로 유지합니다.

## 수정·검증

같은 부모 디렉터리 아래 `zerossin.github.io`, `zerossin-games`, `wikirim`, `eodilkkayong` 체크아웃을 둡니다. 공통 원본을 수정한 다음 홈페이지 저장소에서 실행합니다.

```sh
node shared/site-footer/sync.mjs
node scripts/version-assets.mjs
node --test shared/site-footer/footer.test.mjs
node shared/site-footer/sync.mjs --check
```

사본을 직접 편집하지 마세요. `--check`는 모든 프로젝트의 CSS·마크업과 보존해야 할 출처의 누락을 검사합니다. 생성 결과는 각 저장소에 커밋하므로 다른 저장소 없이 빌드·배포할 수 있고 런타임 외부 요청이나 푸터 전용 JavaScript가 없습니다. 공통 변경 시 각 저장소의 변경을 검증·커밋해야 합니다. 이 명령은 커밋·푸시·배포하지 않습니다.

문의는 기본 이메일 링크이며, 위키림만 기존 `/support` 접수 경로를 사용합니다. 위키림의 추가 정책 링크는 실제 페이지 제목(‘AI 연결 이용조건’, ‘개인정보 처리 안내’)을 사용하며 서비스 전체 약관으로 표시하지 않습니다. Catheryne 영어/한국어 전환은 기존 언어 처리에서 공통 링크도 번역합니다.
