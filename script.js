document.addEventListener("DOMContentLoaded", () => {

  const bootScreen = document.getElementById("bootScreen");
  const terminalOutput = document.getElementById("terminalOutput");

  // Garante que o conteúdo aparece mesmo se der erro
  function safeCloseBoot() {
    if (!bootScreen) return;
    bootScreen.style.opacity = "0";
    bootScreen.style.transition = "0.8s";
    setTimeout(() => {
      bootScreen.style.display = "none";
    }, 800);
  }

  // Se não existir terminal, não quebra o site
  if (!terminalOutput) {
    safeCloseBoot();
    return;
  }

  terminalOutput.textContent = "";

  const lines = [
    "DoxxerVideos=> boot",
    "Iniciando sistema...",
    "Usuário detectado...",
    "Local: Brasil",
    "Sistema carregado com sucesso.",
    "Inicializando interface..."
  ];

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      setTimeout(safeCloseBoot, 600);
      return;
    }

    let text = lines[lineIndex];
    let i = 0;

    const interval = setInterval(() => {
      terminalOutput.textContent += text[i] || "";
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        terminalOutput.textContent += "\n";
        lineIndex++;
        setTimeout(typeLine, 200);
      }
    }, 25);
  }

  typeLine();

});
