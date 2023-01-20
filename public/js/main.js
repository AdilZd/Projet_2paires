
const cards = document.querySelectorAll(".card")

function randomCartes(){
  cards.forEach(card => {
    const randomPos = Math.trunc(Math.random() * 12)
    card.style.order = randomPos;
  })
}
randomCartes()