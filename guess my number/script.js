'use strict';
let secretNumber = Math.floor(Math.random()*20)+1
let highScore = 0
let score = 20;
 const displayMessage = (meggase) =>{
    document.querySelector(".message").textContent = meggase;
 }
document.querySelector(".check").addEventListener("click", function(){
    const guess = document.querySelector(".guess").value;
    if(guess == secretNumber){
        displayMessage("🥳 Correct number!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
        if(score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
       
    }else if(!guess){
        displayMessage("🛑 No number")

    } else if(guess != secretNumber){
        if(score >1){
            displayMessage(guess>secretNumber ? "📉 Go lower1": "📈 Go higher!") 
            score --;
            document.querySelector(".score").textContent = score
        } else{
            document.querySelector(".message").textContent = "💥 You lost"
            document.querySelector(".score").textContent = 0
        }
    }
  
    
})

document.querySelector(".again").addEventListener("click", function () {
    // if(score > highScore){
    //     highScore = score
    // }
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".number").textContent ="?"
    document.querySelector(".guess").value = " ";
    score = 20
    document.querySelector(".score").textContent = score
    secretNumber = Math.floor(Math.random()*20)+1

})
