

let cards = document.querySelectorAll(".card");
let compteurScore = document.querySelector(".score");
let score = 0;
let cartesRetournees = [];

cards.forEach(card => {
    card.addEventListener("click", function() {
        if (!card.classList.contains("flipped")) {
            cartesRetournees.push(card);
            card.classList.add("flipped");
            score++;
            compteurScore.textContent = "Nombre de coups : " + score;
        }

        if (cartesRetournees.length === 2) {
            if (cartesRetournees[0].getAttribute("data-attr") === cartesRetournees[1].getAttribute("data-attr")) {
                cartesRetournees[0].classList.add("matched");
                cartesRetournees[1].classList.add("matched");
                cartesRetournees = [];
            } else {
                setTimeout(function() {
                    cartesRetournees[0].classList.remove("flipped");
                    cartesRetournees[1].classList.remove("flipped");
                    cartesRetournees = [];
                }, 600);
            }
        }
    });
});