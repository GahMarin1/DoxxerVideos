document.querySelectorAll(".card").forEach(card=>{

const id = card.dataset.id;

if(!id) return;

const likeBtn = card.querySelector(".like");
const dislikeBtn = card.querySelector(".dislike");

let likes = localStorage.getItem(id+"_like") || 0;
let dislikes = localStorage.getItem(id+"_dislike") || 0;

if(likeBtn) likeBtn.querySelector("span").innerText = likes;
if(dislikeBtn) dislikeBtn.querySelector("span").innerText = dislikes;

likeBtn?.addEventListener("click",()=>{

likes++;
localStorage.setItem(id+"_like",likes);
likeBtn.querySelector("span").innerText = likes;

});

dislikeBtn?.addEventListener("click",()=>{

dislikes--;
localStorage.setItem(id+"_dislike",dislikes);
dislikeBtn.querySelector("span").innerText = dislikes;

});

});
