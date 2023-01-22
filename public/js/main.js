
let cards = document.querySelectorAll(".card");
let compteurScore = document.querySelector(".score");
let score = 0      ;

cards.forEach(card => {
    card.addEventListener("click", function() {
        if (card.classList.contains("flipped")) {
            card.classList.remove("flipped");
        } else {
            card.classList.add("flipped");
            score++;
            compteurScore.textContent = "Nombre de coups : " + score;
        }
    });
});

