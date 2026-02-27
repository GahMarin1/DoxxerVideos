document.body.classList.add("booting");

const text = "DoxxerVideos=> boot\nUsuário detectado...\nLocal: São Paulo\nSistema iniciado...\n";
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

/* KONAMI MOBILE */
let sequence = [];
const correct = ["B","A"];

document.getElementById("btnB").onclick = () => check("B");
document.getElementById("btnA").onclick = () => check("A");

function check(letter) {
    sequence.push(letter);
    if (sequence.join("") === correct.join("")) {
        alert("EASTER EGG ATIVADO 😈");
        sequence = [];
    }
}
