document.addEventListener("DOMContentLoaded", () => {

  /* ===== MATRIX ===== */
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "01DOXXER";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for(let x = 0; x < columns; x++)
    drops[x] = 1;

  function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){
      const text = letters[Math.floor(Math.random()*letters.length)];
      ctx.fillText(text,i*fontSize,drops[i]*fontSize);

      if(drops[i]*fontSize > canvas.height && Math.random()>0.975)
        drops[i]=0;

      drops[i]++;
    }
  }

  setInterval(draw,33);

  /* ===== BOOT ===== */

  const boot = document.getElementById("bootScreen");
  const terminal = document.getElementById("terminalOutput");

  const lines = [
    "DoxxerVideos=> boot",
    "Iniciando sistema...",
    "Carregando módulos...",
    "Sistema online."
  ];

  let current = 0;

  function typeLine(){
    if(current >= lines.length){
      setTimeout(()=>{
        boot.classList.add("hidden");
      },600);
      return;
    }

    let text = lines[current];
    let i=0;

    const interval = setInterval(()=>{
      terminal.textContent += text[i] || "";
      i++;
      if(i>=text.length){
        clearInterval(interval);
        terminal.textContent += "\n";
        current++;
        setTimeout(typeLine,200);
      }
    },30);
  }

  typeLine();

});      setTimeout(safeCloseBoot, 600);
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
