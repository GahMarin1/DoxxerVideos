const titles = document.querySelectorAll(".videoTitle");

setInterval(() => {
    titles.forEach(title => {
        title.style.opacity = (title.style.opacity == "0.5") ? "1" : "0.5";
    });
}, 800);

console.log("%c[DoxxerVideos] Sistema Online", "color: #00ff00; font-size: 16px;");
