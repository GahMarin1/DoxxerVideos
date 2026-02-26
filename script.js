// Efeito piscando no título estilo hacker
const title = document.getElementById("videoTitle");

setInterval(() => {
    title.style.opacity = (title.style.opacity == "0.5") ? "1" : "0.5";
}, 800);

// Log estilo terminal
console.log("%c[DoxxerVideos] Sistema Online", "color: #00ff00; font-size: 16px;");