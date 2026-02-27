document.body.classList.add("booting");

const text = "DoxxerVideos=> boot\nUsuário detectado...\nLocal: São Paulo\nSistema iniciado...\nFirewall ativo...\n";
let i = 0;
const bootText = document.getElementById("bootText");

function typeWriter() {
    if (i < text.length) {
        bootText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    } else {
        setTimeout(() => {
            document.getElementById("bootScreen").style.display = "none";
            document.body.classList.remove("booting");
            document.getElementById("ageModal").style.display = "flex";
        }, 800);
    }
}

typeWriter();

function enterSite() {
    document.getElementById("ageModal").style.display = "none";
}
