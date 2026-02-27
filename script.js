document.addEventListener("DOMContentLoaded", () => {

  const bootScreen = document.getElementById("bootScreen");
  const terminalOutput = document.getElementById("terminalOutput");

  // limpa qualquer texto inicial
  terminalOutput.textContent = "";

  function typeLine(text, speed = 35) {
    return new Promise(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        terminalOutput.textContent += text[i] || "";
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          terminalOutput.textContent += "\n";
          resolve();
        }
      }, speed);
    });
  }

  async function runBoot() {

    await typeLine("DoxxerVideos=> boot");
    await typeLine("Iniciando sistema...");
    await typeLine("Detectando usuário...");

    let city = "Desconhecido";

    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      city = data.city || "Desconhecido";
    } catch (e) {
      city = "Offline";
    }

    await typeLine(`Local: ${city}`);

    if (city.toLowerCase().includes("são paulo")) {
      await typeLine("Bloqueado para o felca nao derrubar");
    }

    await typeLine("Sistema carregado com sucesso.");
    await typeLine("Inicializando interface...");

    // espera 1s e fecha boot
    setTimeout(() => {
      bootScreen.style.opacity = "0";
      bootScreen.style.transition = "1s";
      setTimeout(() => {
        bootScreen.style.display = "none";
      }, 1000);
    }, 1000);
  }

  runBoot();

});
