const projectItems = [
    {
        href: "https://github.com/mintsclover/room-classifier",
        imgSrc: "assets/images/logo_indoor.png",
        title: "YOLOv5- room classifier",
    },
    {
        href: "https://gitpage.mintsclover.com/js-rhythm-game/",
        imgSrc: "assets/images/js-rhythm-game.png",
        title: "리듬게임",
    },
    {
        href: "https://github.com/mintsclover/Disa-Project",
        imgSrc: "assets/images/logo_disa_project.png",
        title: "DISA Project",
    },
    {
        href: "https://gitpage.mintsclover.com/source-code-scanner/",
        imgSrc: "assets/images/logo_source_code_scanner.jpeg",
        title: "Source Code Scanner",
    },
    {
        href: "https://gitpage.mintsclover.com/map/",
        imgSrc: "assets/images/logo_mc_map.png",
        title: "Map",
    },
    {
        href: "https://github.com/mintsclover/python-korean-word-chain-game",
        imgSrc: "assets/images/logo_word_chain_game.png",
        title: "Korean word chain game",
    },
    {
        href: "https://github.com/mintsclover/youtube-music-downloader",
        imgSrc: "assets/images/imsi.png",
        title: "youtube music downloader",
    },
    {
        href: "https://github.com/mintsclover/guminai",
        imgSrc: "assets/images/guminai.png",
        title: "guminai",
    },
    {
        href: "https://github.com/mintsclover/database-project",
        imgSrc: "assets/images/database-project.jpeg",
        title: "database project",
    },
    {
        href: "https://github.com/mintsclover/image-converter",
        imgSrc: "assets/images/imsi.png",
        title: "image converter",
    },
  ];

// 프로젝트 항목을 랜덤으로 섞되, 첫 세 개는 고정
const fixedItems = projectItems.slice(0, 3);
const randomItems = projectItems.slice(3).sort(() => Math.random() - 0.5);
const finalItems = [...fixedItems, ...randomItems];

// 항목을 HTML에 추가하기
const ulProjects = document.getElementById("ul-projects");

finalItems.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="${item.href}" class="image-container" target="_blank">
      <img src="${item.imgSrc}" alt="${item.title}">
      <div class="overlay">
        <p>${item.title}</p>
      </div>
    </a>
  `;
  ulProjects.appendChild(li);
});