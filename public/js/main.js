

let cards = document.querySelectorAll(".card");
let compteurScore = document.querySelector(".score");
let score = 0;
let cartesRetournees = []   ;
let nbCartesAssociees = 0;

// Retourner les cartes 
cards.forEach(card => {
    card.addEventListener("click", function() {
        if (!card.classList.contains("flipped")) {
            cartesRetournees.push(card);
            card.classList.add("flipped");
            score++;
            compteurScore.textContent = "Nombre de coups : " + score  ;
        }
// Vérification des paires 
        if (cartesRetournees.length === 2) {
            if (cartesRetournees[0].getAttribute("data-attr") === cartesRetournees[1].getAttribute("data-attr")) {
                cartesRetournees[0].classList.add("matched");
                cartesRetournees[1].classList.add("matched");
                cartesRetournees = [];
                nbCartesAssociees += 2;
            } else {
                setTimeout(function() {
                    cartesRetournees[0].classList.remove("flipped");
                    cartesRetournees[1].classList.remove("flipped");
                    cartesRetournees = []                                     ;
                }, 900);
            }
            if (nbCartesAssociees === cards.length) {
                // Afficher un message de félicitations
                alert("Félicitations ! Vous avez trouvé toutes les paires en " + score + " coups.");
            }
        }
    });
});

// Mélange des cartes 
let grid = document.querySelector(".grid"); 

function melanger() {
    cards.forEach(card => {
        let randomCartes = Math.floor(Math.random() * cards.length);
        card.style.order = randomCartes;
    });
}
melanger();


// Fonction pour appuyer sur une touche pour relancer le jeu
function resetGame() {

  cards.forEach(card => {
      card.classList.remove("flipped", "matched");
      card.style.order = "initial";
  });
  score = 0;
  compteurScore.textContent = "Nombre de coups : " + score;
  melanger();
}
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 32) {
      resetGame();
  }
});

