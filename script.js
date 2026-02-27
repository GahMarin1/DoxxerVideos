document.querySelectorAll(".card").forEach(card => {

const id = card.dataset.id;
if(!id) return;

const likeBtn = card.querySelector(".like");
const dislikeBtn = card.querySelector(".dislike");

let likes = parseInt(localStorage.getItem(id+"_like")) || 0;
let dislikes = parseInt(localStorage.getItem(id+"_dislike")) || 0;

likeBtn.querySelector("span").innerText = likes;
dislikeBtn.querySelector("span").innerText = dislikes;

/* LIKE */
likeBtn.addEventListener("click", () => {
    likes++;
    localStorage.setItem(id+"_like", likes);
    likeBtn.querySelector("span").innerText = likes;

    likeBtn.classList.add("clicked");
    setTimeout(()=>likeBtn.classList.remove("clicked"),200);
});

/* DISLIKE (PODE NEGATIVO) */
dislikeBtn.addEventListener("click", () => {
    dislikes--;
    localStorage.setItem(id+"_dislike", dislikes);
    dislikeBtn.querySelector("span").innerText = dislikes;

    dislikeBtn.classList.add("clicked");
    setTimeout(()=>dislikeBtn.classList.remove("clicked"),200);
});

});
