function enterSite(){
document.getElementById("ageModal").style.display="none";
}

/* Fade Reveal */
const cards = document.querySelectorAll(".card");

function revealOnScroll(){
cards.forEach(card=>{
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 50){
card.classList.add("show");
}
});
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
