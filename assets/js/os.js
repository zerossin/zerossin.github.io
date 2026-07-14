/* ===================================================================
   Zerossin OS — 데이터 & 홈 스크린 렌더링
   =================================================================== */

/* ---------------- 기본 정보 ---------------- */

const SITE = {
	name: "Zerossin",
	intro: "경희대학교 재학 중.\n이것저것 만들며 배우고 있습니다.",
	github: "https://github.com/zerossin",
	email: "zerossin.dev@gmail.com",
	blog: "#",       // Tistory 링크가 생기면 채우기
	instagram: "#",  // Instagram 링크가 생기면 채우기
};

/* ---------------- 기술 스택 (여기만 고치면 됨) ---------------- */

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SKILLS = [
	{ name: "Python", icon: `${DEVICON}/python/python-original.svg` },
	{ name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg` },
	{ name: "Git", icon: `${DEVICON}/git/git-original.svg` },
	{ name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
	{ name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
	{ name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
];

/* ---------------- 폴더(카테고리)별 프로젝트 ---------------- */

const FOLDERS = {
	research: {
		label: "Research",
		desc: "학술 연구 및 논문 프로젝트",
		items: [
			{ href: "https://github.com/zerossin/MonoDETR-Weather3D", img: "assets/images/logo_MonoDETR-Weather3D.png", title: "MonoDETR-Weather3D" },
			{ href: "https://github.com/zerossin/gen-clear-drive", img: "assets/images/logo_gen-clear-drive.png", title: "gen-clear-drive" },
			{ href: "https://github.com/zerossin/room-classifier", img: "assets/images/logo_indoor.png", title: "YOLOv5 room classifier" },
		],
	},
	project: {
		label: "Project",
		desc: "협업 프로젝트",
		items: [
			{ href: "https://github.com/zerossin/Disa-Project", img: "assets/images/logo_disa_project.png", title: "DISA Project" },
			{ href: "https://github.com/VRTempleStay/VR-TempleStay", letter: "VR", color: "#4d8fe2", title: "VR-TempleStay" },
		],
	},
	tool: {
		label: "Tool",
		desc: "실용 도구",
		items: [
			{ href: "https://test.zerossin.com/", img: "assets/images/logo-image-converter.png", title: "Image Converter" },
			{ href: "https://gitpage.zerossin.com/source-code-scanner/", img: "assets/images/logo-source-code-scanner.png", title: "Source Code Scanner" },
			{ href: "https://github.com/zerossin/youtube-music-downloader", img: "assets/images/imsi.png", title: "YouTube Music Downloader" },
			{ href: "https://github.com/zerossin/desklog", img: "assets/images/logo-desklog.png", title: "Desk Log" },
		],
	},
	lab: {
		label: "Lab",
		desc: "실험 프로젝트",
		items: [
			{ href: "https://github.com/zerossin/guminai", img: "assets/images/guminai.png", title: "GuminAI" },
			{ href: "https://github.com/zerossin/database-project", img: "assets/images/database-project.jpeg", title: "Database Project" },
			{ href: "https://discord.com/oauth2/authorize?client_id=1253774303527436359", img: "assets/images/logo-vandi-bot.jpg", title: "Vandi bot" },
		],
	},
	game: {
		label: "Game",
		desc: "웹게임",
		items: [
			{ href: "https://starspick.zerossin.com/", img: "assets/images/logo-prompt-arena.png", title: "심심한 성좌님" },
			{ href: "https://dice.zerossin.com/", img: "assets/images/logo-dice-battle.png", title: "다이스 필드" },
			{ href: "https://gitpage.zerossin.com/js-rhythm-game/", img: "assets/images/logo-js-rhythm-game.png", title: "리듬게임" },
			{ href: "https://github.com/zerossin/python-korean-word-chain-game", img: "assets/images/logo_word_chain_game.png", title: "끝말잇기" },
		],
	},
	etc: {
		label: "ETC",
		desc: "아카이브 & 유용한 링크",
		items: [
			{ href: "https://github.com/zerossin?tab=repositories", letter: "Ar", color: "#5b6470", title: "Archive (GitHub)" },
			{ href: "https://www.mapmarker.io/editor", letter: "M", color: "#e2704d", title: "MapMarker" },
			{ href: "https://www.hosting.kr/", letter: "H", color: "#4d7ce2", title: "Hosting.kr" },
			{ href: "https://noonnu.cc/", letter: "N", color: "#8a5fd0", title: "눈누 (폰트)" },
		],
	},
};

/* ---------------- 연혁 ---------------- */

const HISTORY = [
	{ when: "2020.03 ~", what: "경희대학교 재학" },
	{ when: "2021.09 ~ 2023.06", what: "공군 개발지원병" },
	{ when: "2023.12", what: "KSC 2023 참가 (한국소프트웨어종합학술대회)" },
	{ when: "2024.02", what: "개인 웹사이트 제작" },
	{ when: "2025.07", what: "KCC 2025 참가 (한국컴퓨터종합학술대회)" },
	{ when: "2026.07 ~ 2026.08", what: "현대자동차그룹 소프티어 8기 데이터 아키텍처/엔지니어링 과정 수료 (진행중)" },
];

/* ---------------- 갤러리 ---------------- */

const GALLERY = [
	"assets/images/pic01.jpg",
	"assets/images/pic02.jpg",
	"assets/images/pic03.jpg",
	"assets/images/pic04.jpg",
	"assets/images/pic05.jpg",
	"assets/images/pic06.jpg",
];

/* ---------------- 마인크래프트 건축 사진 ---------------- */

const MINECRAFT_GALLERY = [
	"남해동 전경.png",
	"돈화문.png",
	"레켄스 남해.png",
	"본관.png",
	"북해동시작동(압축).png",
	"수민국 전경.png",
	"수민대학교.png",
	"시작동북해동(압축).png",
	"정부청사단지.png",
	"청와당.png",
].map((name) => encodeURI("assets/images/minecraft/" + name));

/* ---------------- 아이콘 (인라인 SVG) ---------------- */

const ICONS = {
	github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,

	tistory: `<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="#fff"><circle cx="14" cy="15" r="6.5"/><circle cx="32" cy="15" r="6.5"/><circle cx="50" cy="15" r="6.5"/><circle cx="32" cy="33" r="6.5"/><circle cx="32" cy="51" r="6.5"/></g></svg>`,

	instagram: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"><rect x="8" y="8" width="48" height="48" rx="14"/><circle cx="32" cy="32" r="11"/><circle cx="46.5" cy="17.5" r="2.6" fill="#fff" stroke="none"/></svg>`,

	gallery: `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(32 32)">${[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
		const colors = ["#f7c948", "#f0944d", "#e8564f", "#d64f8e", "#9c5fd0", "#4f74e3", "#3fa7d6", "#5fb86a"];
		return `<ellipse rx="7.5" ry="15" cy="-13.5" fill="${colors[i]}" opacity="0.82" transform="rotate(${a})"/>`;
	}).join("")}<circle r="4.5" fill="#fff"/></g></svg>`,

	canvas: `<svg viewBox="0 0 64 64" aria-hidden="true" stroke-linecap="round"><line x1="32" y1="5" x2="32" y2="12" stroke="#a5744a" stroke-width="4"/><rect x="12" y="11" width="40" height="30" rx="2.5" fill="#fffdf7" stroke="#a5744a" stroke-width="4"/><path d="M17 35 L27 24 L34 32 L40 27 L47 35 Z" fill="#6fae77"/><circle cx="25" cy="19.5" r="3.5" fill="#f0b44d"/><line x1="20" y1="41" x2="13" y2="57" stroke="#a5744a" stroke-width="4"/><line x1="44" y1="41" x2="51" y2="57" stroke="#a5744a" stroke-width="4"/><line x1="32" y1="41" x2="32" y2="57" stroke="#a5744a" stroke-width="4"/></svg>`,

	history: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="25" fill="#fff" stroke="#3a3f47" stroke-width="4"/><line x1="32" y1="32" x2="32" y2="16" stroke="#3a3f47" stroke-width="4" stroke-linecap="round"/><line x1="32" y1="32" x2="43" y2="38" stroke="#e8564f" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="32" r="3" fill="#3a3f47"/></svg>`,

	mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.9L19.8 6H4.2Zm15.8 2.1-7.4 5.6a1 1 0 0 1-1.2 0L4 8.1v10.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.1Z" fill="currentColor"/></svg>`,
};

/* ---------------- 앱 목록 (홈 화면 순서) ---------------- */

const APPS = [
	{ id: "github", label: "GitHub", type: "link", href: SITE.github, icon: ICONS.github, bg: "#24292f" },
	{ id: "tistory", label: "Tistory", type: "link", href: SITE.blog, icon: ICONS.tistory, bg: "#eb5310" },
	{ id: "instagram", label: "Insta", type: "link", href: SITE.instagram, icon: ICONS.instagram, bg: "radial-gradient(circle at 30% 110%, #fdc468 0%, #df4996 45%, #9146c8 80%)" },
	{ id: "research", label: "Research", type: "folder", folder: "research" },
	{ id: "project", label: "Project", type: "folder", folder: "project" },
	{ id: "tool", label: "Tool", type: "folder", folder: "tool" },
	{ id: "lab", label: "Lab", type: "folder", folder: "lab" },
	{ id: "game", label: "Game", type: "folder", folder: "game" },
	{ id: "etc", label: "ETC", type: "folder", folder: "etc" },
	{ id: "minecraft", label: "Minecraft", type: "window", img: "assets/images/logo_mc_map.png" },
	{ id: "gallery", label: "Gallery", type: "window", icon: ICONS.gallery, bg: "#ffffff" },
	{ id: "canvas", label: "Canvas", type: "window", icon: ICONS.canvas, bg: "#fdf6ec" },
	{ id: "history", label: "History", type: "window", icon: ICONS.history, bg: "#eef1f5" },
	// 완전히 쓸데없지만 그게 재미 포인트인 앱. 아이콘은 gif 첫 프레임에서 멈춰있다가
	// 열면 그 고양이들이 우르르 몰려나와 제멋대로 춤춘다.
	// 아이콘은 미리 뽑아둔 정지 프레임(진짜 PNG 파일)을 쓴다 — 처음엔 <canvas>로
	// gif 첫 프레임을 캡처해서 바꿔치기했는데, file://로 그냥 열면 캔버스가
	// "오염(tainted)" 처리되어 toDataURL이 조용히 실패해 계속 움직여 보였음.
	{ id: "cat", label: "Cat", type: "window", img: "assets/images/cat-oiiaoiia-cat-icon.png", desc: "쓸데없는 춤", iconObjectPosition: "38% 50%" },
];

/* ===================================================================
   렌더링
   =================================================================== */

const home = document.getElementById("home");

function el(tag, className, html) {
	const node = document.createElement(tag);
	if (className) node.className = className;
	if (html != null) node.innerHTML = html;
	return node;
}

/* ---------------- 위젯 ---------------- */

function renderAboutWidget() {
	const w = el("section", "widget widget-about");
	w.innerHTML = `
		<div class="widget-title">About</div>
		<div class="about-head">
			<img class="about-avatar" src="assets/images/profile.jpg" alt="${SITE.name} 프로필" />
			<div>
				<div class="about-name">${SITE.name}</div>
			</div>
		</div>
		<p class="about-intro">${SITE.intro.replace(/\n/g, "<br>")}</p>
		<div class="about-links">
			<a href="${SITE.github}" target="_blank" rel="noreferrer">${ICONS.github.replace('fill="#fff"', 'fill="currentColor"')}GitHub</a>
			<a href="mailto:${SITE.email}">${ICONS.mail}Email</a>
		</div>
	`;
	return w;
}

function renderSkillWidget() {
	const w = el("section", "widget widget-skill");
	w.appendChild(el("div", "widget-title", "Skills"));
	const grid = el("div", "skill-grid");
	SKILLS.forEach((s) => {
		const item = el("div", "skill-item");
		item.innerHTML = `<img src="${s.icon}" alt="${s.name}" loading="lazy" /><span>${s.name}</span>`;
		grid.appendChild(item);
	});
	w.appendChild(grid);
	return w;
}

// 위젯도 결국 "칸을 여러 개 차지하는 큰 앱" 취급 — 앱과 똑같이 밑에 이름표를 달고,
// 똑같이 dataset.appId를 갖는다. 그래야 재배치 시스템이 위젯이라고 따로 봐줄 필요 없이
// "같은 크기(3x2)끼리는 자리를 바꿀 수 있다"는 일반 규칙 하나로 위젯도 자연히 포함된다.
function wrapAsWidgetApp(id, label, widgetEl) {
	const wrapper = el("div", "app widget-slot");
	wrapper.dataset.appId = id;
	wrapper.appendChild(widgetEl);
	wrapper.appendChild(el("span", "app-label", label));
	return wrapper;
}

/* ---------------- 앱 아이콘 ---------------- */

function buildIconFace(app) {
	const face = el("div", "app-icon");
	if (app.bg) face.style.background = app.bg;
	if (app.img) {
		const img = document.createElement("img");
		img.src = app.img;
		img.alt = "";
		img.loading = "lazy";
		img.draggable = false; // <img>는 기본이 draggable="true"라 커스텀 재배치 드래그와 충돌함
		if (app.iconObjectPosition) img.style.objectPosition = app.iconObjectPosition;
		face.appendChild(img);
	} else if (app.icon) {
		face.innerHTML = app.icon;
	}
	return face;
}

function buildFolderFace(folderKey) {
	const face = el("div", "app-icon is-folder");
	const minis = el("div", "folder-minis");
	const items = FOLDERS[folderKey].items;
	for (let i = 0; i < 9; i++) {
		const item = items[i];
		if (!item) {
			minis.appendChild(el("div", "mini empty"));
		} else if (item.img) {
			minis.appendChild(el("div", "mini", `<img src="${item.img}" alt="" loading="lazy" draggable="false" />`));
		} else {
			const m = el("div", "mini letter", item.letter);
			m.style.background = item.color || "#8a93a2";
			minis.appendChild(m);
		}
	}
	face.appendChild(minis);
	return face;
}

function renderApp(app) {
	const isLink = app.type === "link";
	const node = el(isLink ? "a" : "button", "app");
	node.setAttribute("aria-label", app.label);
	node.dataset.appId = app.id;

	if (isLink) {
		node.href = app.href || "#";
		node.draggable = false; // <a>도 기본이 draggable="true"라 커스텀 재배치 드래그와 충돌함
		if (app.href && app.href !== "#") {
			node.target = "_blank";
			node.rel = "noreferrer";
		}
	}

	const face = app.type === "folder" ? buildFolderFace(app.folder) : buildIconFace(app);
	node.appendChild(face);
	node.appendChild(el("span", "app-label", app.label));

	if (app.type === "folder") {
		node.addEventListener("click", () => openWindow(FOLDERS[app.folder].label, folderBody(app.folder), face, FOLDERS[app.folder].desc));
	} else if (app.type === "window") {
		node.addEventListener("click", () => openWindow(app.label, windowBody(app.id), face, app.desc));
	}
	return node;
}

/* ---------------- 창(Window) 내용 ---------------- */

function folderBody(folderKey) {
	const grid = el("div", "win-app-grid");
	FOLDERS[folderKey].items.forEach((item) => {
		const a = el("a", "app");
		a.href = item.href;
		a.target = "_blank";
		a.rel = "noreferrer";
		let face;
		if (item.img) {
			face = el("div", "app-icon", `<img src="${item.img}" alt="" loading="lazy" />`);
		} else {
			face = el("div", "app-icon letter-tile", item.letter);
			face.style.background = item.color || "#8a93a2";
		}
		a.appendChild(face);
		a.appendChild(el("span", "app-label", item.title));
		grid.appendChild(a);
	});
	return grid;
}

function windowBody(id) {
	if (id === "gallery") {
		const g = el("div", "win-gallery");
		GALLERY.forEach((src) => {
			g.innerHTML += `<img src="${src}" alt="" loading="lazy" />`;
		});
		return g;
	}
	if (id === "history") {
		const ul = el("ul", "win-timeline");
		HISTORY.forEach((h) => {
			ul.innerHTML += `<li><div class="when">${h.when}</div><div class="what">${h.what}</div></li>`;
		});
		return ul;
	}
	if (id === "minecraft") {
		const g = el("div", "win-gallery");
		const shuffled = [...MINECRAFT_GALLERY].sort(() => Math.random() - 0.5);
		shuffled.forEach((src) => {
			g.innerHTML += `<img src="${src}" alt="" loading="lazy" />`;
		});
		return g;
	}
	if (id === "cat") {
		// 화면보호기처럼: 원본 gif 색 그대로, 랜덤한 지점으로 슬금슬금 이동만
		// 시키고 커졌다 작아졌다만 반복시킨다. 춤 자체는 gif가 이미 추고 있으니
		// 회전/색조 같은 추가 효과는 안 넣는다(그게 더 무서웠음).
		const stage = el("div", "win-catstage");
		stage.appendChild(el("div", "win-catstage-lights"));
		const CAT_COUNT = 10;
		for (let i = 0; i < CAT_COUNT; i++) {
			const cat = document.createElement("img");
			cat.alt = "";
			cat.className = "cat-dancer";
			cat.style.width = (44 + Math.random() * 44).toFixed(0) + "px";
			// 같은 gif를 그대로 재사용하면 브라우저가 프레임을 동기화해버려 다 같이
			// 춤춘다. 쿼리스트링으로 매번 다른 리소스처럼 취급하게 만들고, src를
			// 주는 시점 자체도 무작위로 늦춰서 gif가 서로 다른 순간에 0프레임부터
			// 재생을 시작하게 한다 — 그래야 진짜로 제각각 춤춘다.
			const startDelay = Math.random() * 900;
			setTimeout(() => {
				cat.src = `assets/images/cat-oiiaoiia-cat.gif?c=${i}`;
			}, startDelay);
			cat.style.animationDuration = (1.6 + Math.random() * 1.4).toFixed(2) + "s";
			cat.style.animationDelay = (-Math.random() * 2).toFixed(2) + "s";

			const moveMs = 1800 + Math.random() * 1800;
			cat.style.transitionDuration = (moveMs / 1000).toFixed(2) + "s";

			const wander = () => {
				if (!stage.isConnected) return; // 창이 닫혔으면(혹은 아직 안 열렸으면) 스스로 멈춘다
				cat.style.left = (8 + Math.random() * 84).toFixed(1) + "%";
				cat.style.top = (10 + Math.random() * 78).toFixed(1) + "%";
				setTimeout(wander, moveMs);
			};
			// setTimeout으로 한 틱 미뤄서, openWindow()가 이 stage를 실제 DOM에
			// 붙인 뒤에 첫 위치 지정이 실행되도록 한다(그래야 isConnected가 true).
			setTimeout(wander, 20 + i * 25);

			stage.appendChild(cat);
		}
		return stage;
	}
	// canvas
	return el("div", "win-placeholder", `<div class="big">🎨</div>그림 작품을 준비 중입니다.<br>곧 채워질 예정이에요.`);
}

/* ---------------- 창 열기 / 닫기 (OS 애니메이션) ---------------- */

let activeModal = null;

function openWindow(title, body, originEl, subtitle) {
	if (activeModal) return;

	const modal = el("div", "os-modal");
	const backdrop = el("div", "os-backdrop");
	const win = el("section", "os-window");
	win.setAttribute("role", "dialog");
	win.setAttribute("aria-label", title);

	const bar = el("header", "os-window-bar");
	const closeBtn = el("button", "win-close");
	closeBtn.setAttribute("aria-label", "닫기");
	bar.appendChild(closeBtn);
	bar.appendChild(el("h2", null, subtitle ? `${title} · <span style="font-weight:500;color:rgba(29,29,31,.5)">${subtitle}</span>` : title));
	win.appendChild(bar);

	const bodyWrap = el("div", "os-window-body");
	bodyWrap.appendChild(body);
	win.appendChild(bodyWrap);

	modal.appendChild(backdrop);
	modal.appendChild(win);
	document.body.appendChild(modal);
	activeModal = modal;

	// 아이콘 위치에서 창이 커지며 열리는 애니메이션
	const from = originEl.getBoundingClientRect();
	const to = win.getBoundingClientRect();
	const dx = from.left + from.width / 2 - (to.left + to.width / 2);
	const dy = from.top + from.height / 2 - (to.top + to.height / 2);
	win.style.transform = `translate(${dx}px, ${dy}px) scale(0.08)`;

	requestAnimationFrame(() => {
		requestAnimationFrame(() => modal.classList.add("open"));
	});
	document.getElementById("os").classList.add("window-open");

	const close = () => {
		modal.classList.remove("open");
		win.style.transform = `translate(${dx}px, ${dy}px) scale(0.08)`;
		win.style.opacity = "0";
		document.getElementById("os").classList.remove("window-open");
		document.removeEventListener("keydown", onKey);
		setTimeout(() => {
			modal.remove();
			activeModal = null;
		}, 340);
	};

	const onKey = (e) => {
		if (e.key === "Escape") close();
	};

	closeBtn.addEventListener("click", close);
	backdrop.addEventListener("click", close);
	document.addEventListener("keydown", onKey);
}

/* ---------------- 시계 ---------------- */

function tickClock() {
	if (jiggling) return; // 흔들기 모드에서는 "완료" 버튼 자리라 시계를 안 덮어씀
	const clock = document.getElementById("os-clock");
	if (!clock) return;
	const now = new Date();
	const hh = String(now.getHours()).padStart(2, "0");
	const mm = String(now.getMinutes()).padStart(2, "0");
	clock.textContent = `${hh}:${mm}`;
}

/* ---------------- 아이콘 재배치 순서 저장 ----------------
   서버가 없으니 "재배치"는 어차피 방문자 각자의 브라우저 안에서만 의미가
   있다 — 이 사이트의 실제 기본 순서(다른 방문자가 보는 것)는 절대 안
   바뀌고, 이 브라우저에서 새로고침해도 유지되는 정도의 로컬 저장. */

const ORDER_KEY = "zerossin-app-order";

function loadOrder(defaultIds) {
	let saved = [];
	try {
		saved = JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
	} catch (e) {
		saved = [];
	}
	const savedKnown = saved.filter((id) => defaultIds.includes(id));
	if (savedKnown.length === 0) return defaultIds; // 저장된 적 없으면 그냥 기본 순서 그대로

	// 저장 이후 새로 추가된 id(예: 이번에 재배치 대상으로 편입된 위젯)는 무조건
	// 맨 끝으로 밀어버리지 않고, 원래 기본 순서에서 있던 자리 — 바로 앞의
	// "저장에도 있던" id 뒤 — 에 끼워 넣는다. 그래야 새 항목이 뜬금없이 맨
	// 끝에 나타나지 않고 원래 의도한 위치 근처에 자연스럽게 자리잡는다.
	const result = [...savedKnown];
	let afterIndex = -1;
	defaultIds.forEach((id) => {
		if (savedKnown.includes(id)) {
			afterIndex = result.indexOf(id);
		} else {
			afterIndex += 1;
			result.splice(afterIndex, 0, id);
		}
	});
	return result;
}

function saveOrder(ids) {
	try {
		localStorage.setItem(ORDER_KEY, JSON.stringify(ids));
	} catch (e) {
		// 시크릿 모드 등으로 localStorage가 막혀 있어도 조용히 무시 — 이번 방문 동안만 재배치됨
	}
}

/* ---------------- 아이콘 흔들기(jiggle) & 드래그 재배치 ----------------
   길게 누르면 흔들리기 시작(iOS jiggle mode). 위젯은 "칸을 여러 개 차지
   하는 큰 앱"일 뿐 — 재배치 로직은 위젯이든 1x1 앱이든 완전히 똑같이
   다룬다: 드래그 중인 항목을 DOM 순서상 어디에 끼워 넣을지만 정하고,
   나머지 항목들이 자기 자리를 어디로 옮길지는 전부 CSS grid의 자동 배치
   계산에 맡긴다. 위젯을 옮기면 그 칸을 차지하던 앱들이 스르르 밀려나는
   건 "위젯이라서" 특별히 처리한 게 아니라, grid가 자기 자리 계산을 다시
   한 것뿐 — 크기가 다른 만큼 화면에 나타나는 결과가 다를 뿐이다. */

let jiggling = false;
let dragNode = null;
let dragBaseRect = null; // dragNode의 "자연"(transform 없는) 위치 — 자리를 옮길 때마다 다시 잼
let dragBasePointer = null; // 위 기준을 잰 시점의 포인터 좌표
let pressState = null;
let lastMoveAt = 0;

const LONG_PRESS_MS = 450;
const MOVE_CANCEL_PX = 10;
const MOVE_DEBOUNCE_MS = 180; // 경계에서 계속 왔다갔다 자리바꿈되는 것 방지

function getReorderableNodes() {
	return [...home.querySelectorAll(":scope > .app")];
}

// 포인터가 rect의 "앞쪽"(읽는 순서 기준 — 위쪽이거나, 같은 줄이면 왼쪽)에 있는지.
// 위젯처럼 큰 항목은 세로 폭이 넓어서, 세로로 확실히 차이 나지 않는 이상은
// 가로 위치로 앞/뒤를 가른다.
function isBeforeInReadingOrder(pointerX, pointerY, rect) {
	const cy = rect.top + rect.height / 2;
	if (Math.abs(pointerY - cy) > rect.height * 0.3) return pointerY < cy;
	return pointerX < rect.left + rect.width / 2;
}

function enterJiggleMode() {
	if (jiggling) return;
	jiggling = true;
	home.classList.add("jiggle");
	const clock = document.getElementById("os-clock");
	if (clock) {
		clock.textContent = "완료";
		clock.classList.add("os-done-btn");
		clock.addEventListener("click", exitJiggleMode);
	}
}

function exitJiggleMode() {
	if (!jiggling) return;
	jiggling = false;
	home.classList.remove("jiggle");
	const clock = document.getElementById("os-clock");
	if (clock) {
		clock.classList.remove("os-done-btn");
		clock.removeEventListener("click", exitJiggleMode);
	}
	tickClock();
	saveOrder(getReorderableNodes().map((n) => n.dataset.appId));
}

function beginDrag(node, pointerId, clientX, clientY) {
	dragNode = node;
	node.classList.add("dragging");
	node.style.transition = "none"; // 드래그 중엔 손가락과 100% 같이 움직여야 하니 애니메이션 없이
	dragBaseRect = node.getBoundingClientRect();
	dragBasePointer = { x: clientX, y: clientY };
	try {
		node.setPointerCapture(pointerId);
	} catch (e) {
		// setPointerCapture가 안 되는 환경이어도(구형 브라우저 등) 드래그 자체는 계속 동작
	}
}

// 드래그 중인 항목을 DOM 순서상 targetRef 앞에 끼워 넣는다(targetRef가 null이면
// 맨 끝). 이 한 번의 DOM 변경으로 CSS grid가 다른 모든 항목의 자리를 다시
// 계산하므로, "밀려나는" 효과 자체는 grid가 공짜로 해준다 — 우리가 할 일은
// 그 이동을 눈에 보이게 부드럽게 만드는 것뿐이다(FLIP: 옮기기 전 모든 항목의
// 위치를 재고(First) → DOM을 옮긴 뒤(Last) → 자리가 바뀐 항목마다 그 차이만큼
// 역방향 transform을 즉시 걸었다가(Invert) 다음 프레임에 0으로 애니메이션
// (Play)한다). 드래그 중인 항목 자신은 같은 원리로 손가락을 계속 따라가도록
// 기준점만 다시 잡는다.
function moveDraggedTo(targetRef, pointerX, pointerY) {
	const others = getReorderableNodes().filter((n) => n !== dragNode);
	const beforeRects = new Map(others.map((n) => [n, n.getBoundingClientRect()]));
	const dragVisualBefore = dragNode.getBoundingClientRect();

	home.insertBefore(dragNode, targetRef);

	others.forEach((n) => {
		const before = beforeRects.get(n);
		const after = n.getBoundingClientRect();
		const dx = before.left - after.left;
		const dy = before.top - after.top;
		if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return; // 안 움직인 항목은 손댈 필요 없음
		n.style.transition = "none";
		n.style.transform = `translate(${dx}px, ${dy}px)`;
		requestAnimationFrame(() => {
			n.style.transition = "transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1)";
			n.style.transform = "";
			n.addEventListener("transitionend", () => { n.style.transition = ""; }, { once: true });
		});
	});

	// 드래그 중인 항목: 새 grid 자리로 옮겨졌지만, 지금 보이던 자리 그대로
	// 이어서 손가락을 따라가도록 기준점을 다시 잡는다(안 그러면 순간 점프해 보임).
	dragNode.style.transform = "none";
	const dragNaturalAfter = dragNode.getBoundingClientRect();
	const neededDX = dragVisualBefore.left - dragNaturalAfter.left;
	const neededDY = dragVisualBefore.top - dragNaturalAfter.top;
	dragNode.style.transform = `translate(${neededDX}px, ${neededDY}px)`;
	dragBaseRect = dragNaturalAfter;
	dragBasePointer = { x: pointerX - neededDX, y: pointerY - neededDY };

	lastMoveAt = performance.now();
}

// 두 사각형이 겹치는 면적
function overlapArea(a, b) {
	const w = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
	const h = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
	return w * h;
}

function onDragMove(e) {
	if (!dragNode) return;
	e.preventDefault(); // 드래그 중엔 페이지가 같이 스크롤되지 않게

	const dx = e.clientX - dragBasePointer.x;
	const dy = e.clientY - dragBasePointer.y;
	dragNode.style.transform = `translate(${dx}px, ${dy}px)`;

	if (performance.now() - lastMoveAt < MOVE_DEBOUNCE_MS) return; // 경계에서 계속 왔다갔다 하는 것 방지

	// "포인터에서 가장 가까운 것"이 아니라, 지금 손가락을 따라가는 중인 이
	// 아이콘 자신의 사각형이 다른 아이콘 위에 실제로 상당 부분 겹쳐야만
	// 반응한다. 예전엔 이 문턱값(임계 겹침 비율)이 있었는데 리플로우 방식으로
	// 바꾸면서 실수로 빠져서 아주 살짝만 움직여도 "가장 가까운 후보"가 계속
	// 바뀌어 매번 반응해버렸음 — 그게 자잘하게 계속 재배치되던 원인.
	const dragRect = dragNode.getBoundingClientRect(); // 지금 실제로 보이는(포인터를 따라간) 위치
	const dragArea = dragRect.width * dragRect.height;
	const others = getReorderableNodes().filter((n) => n !== dragNode);

	let best = null;
	let bestRatio = 0;
	others.forEach((n) => {
		const r = n.getBoundingClientRect();
		// 겹친 면적을 "둘 중 더 작은 쪽" 기준으로 비율을 재야, 위젯처럼 서로
		// 크기가 많이 다른 상대와 비교해도 공평하게 판정된다.
		const ratio = overlapArea(dragRect, r) / Math.min(dragArea, r.width * r.height);
		if (ratio > bestRatio) {
			bestRatio = ratio;
			best = n;
		}
	});
	if (!best || bestRatio < 0.5) return; // 절반 이상 확실히 겹쳐야 반응 — 스치는 정도는 무시

	const bestRect = best.getBoundingClientRect();
	const targetRef = isBeforeInReadingOrder(e.clientX, e.clientY, bestRect) ? best : best.nextSibling;
	if (targetRef === dragNode || dragNode.nextSibling === targetRef) return; // 이미 그 자리면 아무것도 안 함
	moveDraggedTo(targetRef, e.clientX, e.clientY);
}

function endDrag() {
	if (!dragNode) return;
	const node = dragNode;
	node.classList.remove("dragging");
	node.removeEventListener("pointermove", onDragMove);

	// 놓는 순간: 떠 있던 자리에서 제 grid 자리로 부드럽게 안착
	node.style.transition = "transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1)";
	node.style.transform = "";
	node.addEventListener("transitionend", () => { node.style.transition = ""; }, { once: true });

	dragNode = null;
	dragBaseRect = null;
	dragBasePointer = null;
	saveOrder(getReorderableNodes().map((n) => n.dataset.appId));
}

function initReorder() {
	// <img>/<a>는 브라우저 기본 드래그(이미지 끌어서 빼기, 링크 끌어서 북마크하기 등)를
	// 갖고 있어서, 그게 먼저 끼어들면 우리 pointermove가 안 들어와 재배치가 먹통이
	// 된다. draggable="false"를 개별적으로 걸어뒀지만, 혹시 놓친 요소가 있어도
	// 안전하도록 홈 화면 전체에서 네이티브 드래그 자체를 막아버린다.
	home.addEventListener("dragstart", (e) => e.preventDefault());

	getReorderableNodes().forEach((node) => {
		node.addEventListener("pointerdown", (e) => {
			if (e.button > 0) return; // 마우스 우클릭 등은 무시

			if (jiggling) {
				// 이미 흔들기 모드면 롱프레스 없이 바로 그 아이콘을 집어서 옮긴다
				beginDrag(node, e.pointerId, e.clientX, e.clientY);
				node.addEventListener("pointermove", onDragMove, { passive: false });
				node.addEventListener("pointerup", endDrag, { once: true });
				node.addEventListener("pointercancel", endDrag, { once: true });
				return;
			}

			const startX = e.clientX;
			const startY = e.clientY;
			const timer = setTimeout(() => {
				pressState = null;
				enterJiggleMode();
				beginDrag(node, e.pointerId, e.clientX, e.clientY);
				node.addEventListener("pointermove", onDragMove, { passive: false });
				node.addEventListener("pointerup", endDrag, { once: true });
				node.addEventListener("pointercancel", endDrag, { once: true });
			}, LONG_PRESS_MS);
			pressState = { timer };

			const cancelIfMoved = (ev) => {
				if (Math.hypot(ev.clientX - startX, ev.clientY - startY) > MOVE_CANCEL_PX) {
					clearTimeout(timer);
					pressState = null;
					node.removeEventListener("pointermove", cancelIfMoved);
				}
			};
			const clearPress = () => {
				clearTimeout(timer);
				pressState = null;
				node.removeEventListener("pointermove", cancelIfMoved);
			};
			node.addEventListener("pointermove", cancelIfMoved);
			node.addEventListener("pointerup", clearPress, { once: true });
			node.addEventListener("pointercancel", clearPress, { once: true });
		});
	});

	// 흔들기 모드에서 앱/폴더가 열리지 않게 클릭을 가로채고, 빈 공간을 누르면 종료
	home.addEventListener(
		"click",
		(e) => {
			if (!jiggling) return;
			e.preventDefault();
			e.stopImmediatePropagation();
			if (e.target === home) exitJiggleMode();
		},
		true
	);
}

/* ---------------- 초기화 ---------------- */

// 위젯도 일반 앱과 똑같이 하나의 순서 목록에 들어간다 — 재배치/저장 로직이
// "위젯이면 이렇게, 앱이면 저렇게" 나뉘지 않고 전부 이 id 목록 하나로 처리된다.
const WIDGETS = [
	{ id: "about", label: "About", render: renderAboutWidget },
	{ id: "skill", label: "Skill", render: renderSkillWidget },
];

const allIds = [...WIDGETS.map((w) => w.id), ...APPS.map((a) => a.id)];
const orderedIds = loadOrder(allIds);
orderedIds.forEach((id) => {
	const widget = WIDGETS.find((w) => w.id === id);
	if (widget) {
		home.appendChild(wrapAsWidgetApp(widget.id, widget.label, widget.render()));
		return;
	}
	const app = APPS.find((a) => a.id === id);
	if (app) home.appendChild(renderApp(app));
});
initReorder();

tickClock();
setInterval(tickClock, 15000);

// #research 처럼 해시로 창 딥링크 열기
const hashId = location.hash.slice(1);
if (hashId) {
	const target = APPS.find((a) => a.id === hashId && a.type !== "link");
	if (target) {
		const face = home.querySelector(`[aria-label="${target.label}"] .app-icon`);
		if (face) {
			if (target.type === "folder") {
				openWindow(FOLDERS[target.folder].label, folderBody(target.folder), face, FOLDERS[target.folder].desc);
			} else {
				openWindow(target.label, windowBody(target.id), face);
			}
		}
	}
}
