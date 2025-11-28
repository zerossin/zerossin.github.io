// 카테고리별 프로젝트 항목
const projectsByCategory = {
    research: [
        {
            href: "https://github.com/pulqum/MonoDETR-Weather3D",
            imgSrc: "assets/images/logo_MonoDETR-Weather3D.png",
            title: "MonoDETR-Weather3D",
        },
        {
            href: "https://github.com/pulqum/MonoDETR-Weather3D",
            imgSrc: "assets/images/logo_gen-clear-drive.jpg",
            title: "gen-clear-drive",
        },
        {
            href: "https://github.com/pulqum/room-classifier",
            imgSrc: "assets/images/logo_indoor.png",
            title: "YOLOv5- room classifier",
        },
    ],
    lab: [
        {
            href: "https://github.com/pulqum/Disa-Project",
            imgSrc: "assets/images/logo_disa_project.png",
            title: "DISA Project",
        },
        {
            href: "https://github.com/pulqum/database-project",
            imgSrc: "assets/images/database-project.jpeg",
            title: "database project",
        },
        {
            href: "https://github.com/pulqum/image-converter",
            imgSrc: "assets/images/imsi.png",
            title: "image converter",
        },
        {
            href: "https://github.com/pulqum/youtube-music-downloader",
            imgSrc: "assets/images/imsi.png",
            title: "youtube music downloader",
        },
        {
            href: "https://gitpage.pulqum.com/source-code-scanner/",
            imgSrc: "assets/images/logo_source_code_scanner.jpeg",
            title: "Source Code Scanner",
        },
        {
            href: "https://github.com/pulqum/guminai",
            imgSrc: "assets/images/guminai.png",
            title: "guminai",
        },
        {
            href: "https://map.pulqum.com/",
            imgSrc: "assets/images/logo_mc_map.png",
            title: "Map",
        },
    ],
    game: [
        {
            href: "https://starspick.pulqum.com/",
            imgSrc: "assets/images/logo-prompt-arena.png",
            title: "별들의 선택",
        },
        {
            href: "https://gitpage.pulqum.com/js-rhythm-game/",
            imgSrc: "assets/images/logo-js-rhythm-game.png",
            title: "리듬게임",
        },
        {
            href: "https://github.com/pulqum/python-korean-word-chain-game",
            imgSrc: "assets/images/logo_word_chain_game.png",
            title: "Korean word chain game",
        },
    ]
};

// 각 카테고리의 프로젝트를 HTML에 추가하는 함수
function addProjectsToSection(category, ulId) {
    const ul = document.getElementById(ulId);
    if (!ul) return;

    const projects = projectsByCategory[category] || [];
    
    // 프로젝트 추가
    projects.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="${item.href}" class="image-container" target="_blank">
                <img src="${item.imgSrc}" alt="${item.title}">
                <div class="overlay">
                    <p>${item.title}</p>
                </div>
            </a>
        `;
        ul.appendChild(li);
    });
}

// 캐러셀 스크롤 함수
function scrollCarousel(ulId, direction) {
    const ul = document.getElementById(ulId);
    if (!ul) return;
    
    const container = ul.parentElement;
    const scrollAmount = container.offsetWidth * 0.8; // 화면 너비의 80%만큼 이동
    
    container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// 버튼 상태 업데이트 함수
function updateButtonState(container) {
    const leftBtn = container.parentElement.querySelector('.nav-button.left');
    const rightBtn = container.parentElement.querySelector('.nav-button.right');
    
    if (!leftBtn || !rightBtn) return;

    // 스크롤 위치에 따라 버튼 표시/숨김
    // 왼쪽 끝
    if (container.scrollLeft <= 10) {
        leftBtn.style.opacity = '0';
        leftBtn.style.pointerEvents = 'none';
    } else {
        leftBtn.style.opacity = '1';
        leftBtn.style.pointerEvents = 'auto';
    }

    // 오른쪽 끝 (오차 범위 10px)
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        rightBtn.style.opacity = '0';
        rightBtn.style.pointerEvents = 'none';
    } else {
        rightBtn.style.opacity = '1';
        rightBtn.style.pointerEvents = 'auto';
    }
}

// 각 섹션 초기화
['research', 'lab', 'game'].forEach(section => {
    const ulId = `ul-${section}`;
    addProjectsToSection(section, ulId);
    
    const ul = document.getElementById(ulId);
    if (ul && ul.parentElement) {
        const container = ul.parentElement;
        
        // 초기 버튼 상태 설정
        // 이미지 로딩 등으로 scrollWidth가 변할 수 있으므로 약간의 지연 후 체크
        setTimeout(() => updateButtonState(container), 100);
        
        // 스크롤 이벤트 리스너 등록 (버튼 상태 업데이트용)
        container.addEventListener('scroll', () => {
            updateButtonState(container);
        });

        // 윈도우 리사이즈 시에도 체크
        window.addEventListener('resize', () => {
            updateButtonState(container);
        });
    }
});