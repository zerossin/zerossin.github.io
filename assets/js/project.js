// 카테고리별 프로젝트 항목
const projectsByCategory = {
    research: [
        {
            href: "https://github.com/zerossin/room-classifier",
            imgSrc: "assets/images/logo_indoor.png",
            title: "YOLOv5- room classifier",
        },
        {
            href: "https://github.com/zerossin/Disa-Project",
            imgSrc: "assets/images/logo_disa_project.png",
            title: "DISA Project",
        },
        {
            href: "https://github.com/zerossin/database-project",
            imgSrc: "assets/images/database-project.jpeg",
            title: "database project",
        },
    ],
    works: [
        {
            href: "https://gitpage.zerossin.com/source-code-scanner/",
            imgSrc: "assets/images/logo_source_code_scanner.jpeg",
            title: "Source Code Scanner",
        },
        {
            href: "https://map.zerossin.com/",
            imgSrc: "assets/images/logo_mc_map.png",
            title: "Map",
        },
        {
            href: "https://github.com/zerossin/youtube-music-downloader",
            imgSrc: "assets/images/imsi.png",
            title: "youtube music downloader",
        },
        {
            href: "https://github.com/zerossin/guminai",
            imgSrc: "assets/images/guminai.png",
            title: "guminai",
        },
        {
            href: "https://github.com/zerossin/image-converter",
            imgSrc: "assets/images/imsi.png",
            title: "image converter",
        },
    ],
    lab: [
        {
            href: "https://gitpage.zerossin.com/js-rhythm-game/",
            imgSrc: "assets/images/js-rhythm-game.png",
            title: "리듬게임",
        },
        {
            href: "https://github.com/zerossin/python-korean-word-chain-game",
            imgSrc: "assets/images/logo_word_chain_game.png",
            title: "Korean word chain game",
        },
    ]
};

// 각 카테고리의 프로젝트를 HTML에 추가하는 함수
function addProjectsToSection(category, ulId, direction) {
    const ul = document.getElementById(ulId);
    if (!ul) return;

    const projects = projectsByCategory[category] || [];
    
    // 프로젝트 추가 (복제 없이 한 번만)
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
    
    // DOM 렌더링 후 애니메이션 시작
    setTimeout(() => {
        const container = ul.parentElement;
        const containerWidth = container.offsetWidth;
        const setWidth = ul.scrollWidth;
        
    let position = direction === 'left' ? containerWidth : -setWidth;
    const speed = direction === 'left' ? -2 : 2;
        
        function animate() {
            position += speed;
            // 완전히 사라지면 리셋
            if (direction === 'left') {
                if (position + setWidth <= 0) {
                    position = containerWidth;
                }
            } else {
                const firstLi = ul.querySelector('li');
                const firstLiOffset = firstLi ? firstLi.offsetLeft : 0;
                if (position + firstLiOffset >= containerWidth) {
                    position = -setWidth;
                }
            }
            ul.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }, 100);
}

// 각 섹션에 프로젝트 추가
addProjectsToSection('research', 'ul-research', 'left');
addProjectsToSection('works', 'ul-works', 'right');
addProjectsToSection('lab', 'ul-lab', 'left');