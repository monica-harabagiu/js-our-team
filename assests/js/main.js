const cardshtml = document.getElementById("cards")

const arrayCards = [
    {
        class: 'Rogue',
        hp: '50',
        ac: '15',
        photo: 'rogue.png'
    },
    {
        class: 'Wizard',
        hp: '32',
        ac: '11',
        photo: 'wizard.png'
    },
    {
        class: 'Fighter',
        hp: '78',
        ac: '17',
        photo: 'fighter.png'
    },
    {
        class: 'Paladin',
        hp: '66',
        ac: '16',
        photo: 'paladin.png'
    },
    {
        class: 'Druid',
        hp: '52',
        ac: '14',
        photo: 'druid.png'
    },
    {
        class: 'Barbarian',
        hp: '97',
        ac: '18',
        photo: 'barbarian.png'
    }
]

for (let i = 0; i < arrayCards.length; i++) {
    const card = arrayCards[i];

    console.log(card)

    cardshtml.innerHTML += `<div class="card">
    <figure>
        <img src="./assests/img/${card.photo}" alt="">
    </figure>
    <h3 class="gold-text">${card.class}</h3>
    <div class="gold-text">
        <span>HP ${card.hp}</span>
        <span>/</span>
        <span>AC ${card.ac}</span>
    </div>
</div>`

}