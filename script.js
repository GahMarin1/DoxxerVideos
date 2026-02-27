/* ===== BOOT TERMINAL COM DETECÇÃO DE CIDADE REAL ===== */

const output = document.getElementById("terminalOutput");
const bootScreen = document.getElementById("bootScreen");
const ageModal = document.getElementById("ageModal");

// função para simular digitação automática
function typeCommand(command, index = 0, callback) {
    if (index < command.length) {
        output.innerHTML += command.charAt(index);
        setTimeout(() => typeCommand(command, index + 1, callback), 100);
    } else {
        if (callback) callback();
    }
}

// função de fake boot (continua mesmo depois de detectar)
function continueBootSequence(location) {
    output.innerHTML += `\nUsuário detectado`;
    output.innerHTML += `\n(Local: ${location})`;

    // se for São Paulo → bloqueia
    if (location.toLowerCase().includes("são paulo") || location.toLowerCase().includes("sao paulo")) {
        setTimeout(() => {
            output.innerHTML += "\nBloqueado para o felca não derrubar";
        }, 800);
    } else {
        // prossegue com fake boot
        setTimeout(() => {
            output.innerHTML += "\nIniciando sistema...";
        }, 800);

        setTimeout(() => {
            output.innerHTML += "\nCarregando módulos...";
        }, 1600);

        setTimeout(() => {
            output.innerHTML += "\nConectando rede segura...";
        }, 2400);

        setTimeout(() => {
            output.innerHTML += "\nSistema iniciado.";
            setTimeout(() => {
                bootScreen.style.display = "none";
                ageModal.style.display = "flex";
            }, 1000);
        }, 3200);
    }
}

// auto-boot (digita boot sozinho)
function autoBoot() {
    const command = "boot";
    output.innerHTML += " ";
    typeCommand(command, 0, () => {
        // depois de digitar “boot”, chama a API de localização real
        fetch("https://ip-api.com/json/?fields=status,country,regionName,city")
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    const location = `${data.city}, ${data.regionName}, ${data.country}`;
                    continueBootSequence(location);
                } else {
                    continueBootSequence("localização desconhecida");
                }
            })
            .catch(() => {
                continueBootSequence("localização indisponível");
            });
    });
}

// inicia o auto-boot automaticamente após carregar
window.addEventListener("load", () => {
    setTimeout(autoBoot, 500);
});

// função para entrar no site após verificação +18
function enterSite() {
    ageModal.style.display = "none";
}

/* ===== FADE DOS CARDS ===== */
const cards = document.querySelectorAll(".card");
function reveal() {
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* ===== MATRIX RAIN ===== */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 33);

window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
