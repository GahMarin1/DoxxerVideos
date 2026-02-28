document.querySelectorAll(".card").forEach(card => {

    const id = card.dataset.id;
    if(!id) return;

    const likeBtn = card.querySelector(".like");
    const dislikeBtn = card.querySelector(".dislike");

    // Pega o número salvo
    let likes = parseInt(localStorage.getItem(id+"_like")) || 0;
    let dislikes = parseInt(localStorage.getItem(id+"_dislike")) || 0;

    // Pega se já clicou
    let liked = localStorage.getItem(id+"_liked") === "true";
    let disliked = localStorage.getItem(id+"_disliked") === "true";

    // Atualiza o display
    likeBtn.querySelector("span").innerText = likes;
    dislikeBtn.querySelector("span").innerText = dislikes;

    // Marca visual se já clicou
    if(liked) likeBtn.classList.add("clicked");
    if(disliked) dislikeBtn.classList.add("clicked");

    /* LIKE */
    likeBtn.addEventListener("click", () => {
        if(liked) return; // não pode clicar de novo

        likes++;
        localStorage.setItem(id+"_like", likes);
        likeBtn.querySelector("span").innerText = likes;

        liked = true;
        localStorage.setItem(id+"_liked", "true");
        likeBtn.classList.add("clicked");
    });

    /* DISLIKE */
    dislikeBtn.addEventListener("click", () => {
        if(disliked) return; // não pode clicar de novo

        dislikes--;
        localStorage.setItem(id+"_dislike", dislikes);
        dislikeBtn.querySelector("span").innerText = dislikes;

        disliked = true;
        localStorage.setItem(id+"_disliked", "true");
        dislikeBtn.classList.add("clicked");
    });

});
