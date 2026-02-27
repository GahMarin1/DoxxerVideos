/* BOOT TERMINAL */
const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");
const bootScreen = document.getElementById("bootScreen");
const ageModal = document.getElementById("ageModal");

input.addEventListener("keydown", function(e){
if(e.key === "Enter"){
const command = input.value.trim();
output.innerHTML += " " + command;

if(command.toLowerCase() === "boot"){
fakeBoot();
}else{
output.innerHTML += "\nComando inválido.";
}
input.value="";
}
});

function fakeBoot(){
output.innerHTML += "\nIniciando sistema...";
setTimeout(()=>{output.innerHTML += "\nCarregando módulos...";},800);
setTimeout(()=>{output.innerHTML += "\nConectando rede segura...";},1600);
setTimeout(()=>{
output.innerHTML += "\nSistema iniciado.";
setTimeout(()=>{
bootScreen.style.display="none";
ageModal.style.display="flex";
},1000);
},2400);
}

function enterSite(){
ageModal.style.display="none";
}

/* Fade */
const cards = document.querySelectorAll(".card");
function reveal(){
cards.forEach(card=>{
if(card.getBoundingClientRect().top < window.innerHeight - 50){
card.classList.add("show");
}
});
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

/* MATRIX */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for(let x=0;x<columns;x++) drops[x]=1;

function draw(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff88";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters.charAt(Math.floor(Math.random()*letters.length));
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}

setInterval(draw,33);

window.addEventListener("resize",()=>{
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
});
