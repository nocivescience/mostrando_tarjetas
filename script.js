const prevEl = document.querySelector('#prev');
const nextEl = document.querySelector('#next');
const cardsEl= document.querySelectorAll('.cards');
const cards = [...cardsEl];
const colors=[
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'white',
    'gray',
    'cyan',
    'magenta',
    'indigo',
    'teal',
    'lime',
    'lavender',
    'turquoise',
]
function changeColor(card,color){
    card.style.backgroundColor = color;
    card.classList.add('move-up');
}
prevEl.addEventListener('click', () => {
    const colorRandom = Math.floor(Math.random() * colors.length);
    cardsEl.forEach(card => {
        changeColor(card,colors[colorRandom]);
    });
});