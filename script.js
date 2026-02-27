// BOOT EFFECT
const text = "Iniciando sistema...\nConectando servidor...\nBypass firewall...\nAcesso liberado.";
let i = 0;
const speed = 40;
const bootText = document.getElementById("bootText");

function typeWriter(){
if(i < text.length){
bootText.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, speed);
}else{
setTimeout(()=>{
document.getElementById("bootScreen").style.display="none";
document.body.style.overflow="auto";
},800);
}
}

document.body.style.overflow="hidden";
typeWriter();
