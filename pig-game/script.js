'use strict';
// Selecting the elements.
const rollBtn = document.querySelector(".btn--roll")
const holdBtn = document.querySelector(".btn--hold")
const newGameBtn = document.querySelector(".btn--new")
const dice = document.querySelector(".dice")
const current0 = document.querySelector("#current--0")
const current1 = document.querySelector("#current--1")
const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")

// Game state variables
let current,activePlayer,score 


// Start the game
function  newGame  ()   {
    activePlayer = 0;
    current = 0;
    score = [0, 0];
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    dice.classList.add("hidden");
    player0.classList.remove("player--winner");
    player0.classList.add("player--active")
    player1.classList.remove("player--winner","player--active");
  
}
newGame()
newGameBtn.addEventListener("click",newGame)

// Change the active player

const changePlayer = ()=> {
    if(activePlayer == 0){
        activePlayer =1
        player0.classList.remove("player--active")
        player1.classList.add("player--active")
    }else{
        activePlayer = 0
        player1.classList.remove("player--active")
        player0.classList.add("player--active")
    }
}

// Roll action

rollBtn.addEventListener("click", function() {
    if (score[0] < 100 && score[1] < 100){
        const randomNum = Math.floor(Math.random()*6)+1
        dice.classList.remove("hidden")
        if(randomNum == 1){
            current = 0
            current0.textContent = current
            current1.textContent = current
           changePlayer()
        }else{
            current = current + randomNum
        }
        dice.src = `dice-${randomNum}.png`
        if(activePlayer == 0){
            current0.textContent = current
        }else{
            current1.textContent = current
        }
    }


})

// Hold action 
holdBtn.addEventListener("click", function(){
    if (score[0] < 100 && score[1] < 100){
        if(activePlayer == 0){
            score[0] += current
            score0.textContent = score[0]
            current0.textContent = 0
            if(score[0] >= 100){
                player0.classList.add("player--winner")
                dice.classList.add("hidden")
            }else changePlayer()
        }else{
            score[1] += current
            score1.textContent = score[1]
            current1.textContent = 0
            if(score[1] >= 100){
                player1.classList.add("player--winner")
                dice.classList.add("hidden")
            } else  changePlayer()
        }
       
    current = 0
   
    }
   
})
