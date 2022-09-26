const partPair = [
    {
        id: "01",
        image: "img/acorn.svg"
     },
    {
        id: "02",
        image: "img/autumn-tree.svg"
  },   
    {
        id: "03",
        image: "img/dry-leaf.svg"
     },
    {
        id: "04",
        image: "img/hedgehog.svg"
  }, 
    {
        id: "05",
        image: "img/pumpkin.svg"
     },
    {
        id: "06",
        image: "img/squirrel.svg"
  },  
]

function createPair({id, image}) {
    return (
 
  `   <div class="scene scene--card">
    <div class="card">
        <div class="card__face card__face--front">
            <img class="card__img" src="img/card-back.svg" alt="Green leaf">
        </div>
        <div class="card__face card__face--back">
            <img class="card__img"  src="${image}" alt="Dry leaf">
        </div>
    </div>
  </div> `
 
    
   
    );
};

partPair.push(...partPair);
partPair.sort(function() { return 0.5 - Math.random() });

game.innerHTML = partPair.map(createPair).join('');

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});