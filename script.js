const partPair = [
    {
        cardId: "01",
        image: "img/acorn.svg"
     },
    {
        cardId: "02",
        image: "img/autumn-tree.svg"
  },   
    {
        cardId: "03",
        image: "img/dry-leaf.svg"
     },
    {
        cardId: "04",
        image: "img/hedgehog.svg"
  }, 
    {
        cardId: "05",
        image: "img/pumpkin.svg"
     },
    {
        cardId: "06",
        image: "img/squirrel.svg"
  },  
]

function createPair({cardId, image}) {
    return (
   `   <div class="scene scene--card">
    <div id="${cardId}" class="card">
        <div class="card__face card__face--front">
        </div>
        <div class="card__face card__face--back">
            <img class="card__img"  src="${image}" alt="">
        </div>
    </div>
  </div> `
  );
};

partPair.push(...partPair);
partPair.sort(function() { return 0.5 - Math.random() });

game.innerHTML = partPair.map(createPair).join('');

const cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', (e) => {
    card.classList.toggle('is-flipped');
    checkCards(e);
  });
});

const checkCards = (e) => {

  console.log(e);
  const clickedCard = e.target;
  console.log(clickedCard);


/*   var flippedCards = document.querySelectorAll(".is-flipped");
  
     if (flippedCards.length === 2) {
    
      if (
        flippedCards[0].getAttribute("id") ===
        flippedCards[1].getAttribute("id")
        
      ){
       
        console.log("match");
      }else{        

        console.log("wrong");
        [...cards].forEach((card) => {
          setTimeout(() => card.classList.remove('is-flipped'), 1000);
             });
        flippedCards = 0;
      }
    }else{
      
      
        
      console.log("over 3");
    } */

}