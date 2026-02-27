document.addEventListener("DOMContentLoaded", () => {

  const terminalOutput = document.getElementById("terminalOutput");

  // Função para digitar texto
  function typeText(text, speed = 40, callback = null) {
    let i = 0;
    const interval = setInterval(() => {
      terminalOutput.textContent += text[i] || "";
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

  // Detectar localização real
  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {

      const city = data.city || "Local desconhecido";

      let locationMessage = `(Local: ${city})\n`;

      if (city.toLowerCase().includes("são paulo")) {
        locationMessage += "Bloqueado para o felca nao derrubar\n";
      }

      const bootText =
        "DoxxerVideos=> boot\n" +
        "Usuário detectado...\n" +
        locationMessage;

      typeText(bootText);

    })
    .catch(() => {
      typeText(
        "DoxxerVideos=> boot\nUsuário detectado...\n(Local: desconhecido)\n"
      );
    });

});
