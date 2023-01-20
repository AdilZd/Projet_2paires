
const cards = document.querySelectorAll(".card")

function randomCartes(){
    cards.forEach(card => {
        let randomPos = Math.trunc(Math.random() * 8)
        card.style.order = randomPos;
    })
}
randomCartes()



cards.forEach(card => card.addEventListener("click", tournerCarte))

let lockedCards = false;
let cardsPicked = []
function tournerCarte(e){

    if(lockedCards) return;
saveCard(e.target.children[0], e.target.getAttribute("data-attr"))

    if(cardsPicked.length === 2) result()
}


