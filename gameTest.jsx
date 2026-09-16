async function BounceCristals() {
    await functions.moveCards(cards.Cristals, "Hand")
    await functions.updateCards(cards.Hand, { isHidden: "opponent-only" })
    "window.print()">bounce
}
