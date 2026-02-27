document.addEventListener("DOMContentLoaded", () => {
  // Fade-in cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("show"), i * 150);
  });

  // Boot typing effect
  const terminalOutput = document.getElementById("terminalOutput");
  const bootText = "DoxxerVideos=> boot\nUsuário detectado...\n(Local: São Paulo)\nBloqueado para o felca nao derrubar\n";
  let index = 0;
  const interval = setInterval(() => {
    terminalOutput.textContent += bootText[index] || "";
    index++;
    if(index >= bootText.length) clearInterval(interval);
  }, 40);

  // Age verify
  window.enterSite = function() {
    document.getElementById("ageModal").style.display = "none";
    document.getElementById("bootScreen").style.display = "none";
  };

  // KONAMI touch/mobile (B A)
  const konamiCode = ["B","A"];
  let input = [];
  document.addEventListener("click", (e)=>{
    if(e.target.id === "btnB") input.push("B");
    if(e.target.id === "btnA") input.push("A");
    if(input.join(",") === konamiCode.join(",")){
      alert("Easter Egg ativado!");
      document.getElementById("konamiButtons").classList.add("hidden");
    }
  });
});
