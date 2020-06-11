/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game



*/
var scores, roundScore, activePlayer, gamePlay, previousDice, previousDice2, winScoreLimit;

init();

//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//var x = document.querySelector("#score-0").textContent;
//console.log(x);

document.querySelector(".btn-roll").addEventListener("click", function() {
    if(gamePlay) {
        
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector(".dice");
        var diceDOM2 = document.querySelector(".dice-2");
        diceDOM.style.display = "block";
        diceDOM2.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        diceDOM2.src = "dice-" + dice2 + ".png";

        //3. Update the round score IF the rolled number was NOT a 1
        if( ((dice === 6) && (previousDice === 6)) || ((dice2 === 6) && (previousDice2 === 6))) {
            // player loses their ENTIRE score
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = "0";
            nextPlayer();
        } else if((dice !== 1 && dice2 !== 1)) {
            // Add score
            roundScore += dice + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            
        } else {
            // Next player
            nextPlayer();
        }
        
        previousDice = dice;
        previousDice2 = dice2;
        
    }
});


document.querySelector(".btn-hold").addEventListener("click", function() {
    if(gamePlay) {
        
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= winScoreLimit) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".dice-2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlay = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
    
});

document.querySelector(".btn-new").addEventListener("click", init);

document.querySelector(".btn-send").addEventListener("click", changeUpperScoreLimit);


function nextPlayer() {
        activePlayer = (activePlayer === 0) ? 1 : 0;
        roundScore = 0;
        
        // Set both current scores to 0
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        
        /*
        toggle will do 2 things:
            1. If the class exists in the element, it will remove it
            2. If the class does NOT exists in the element, it will be added to it
        */
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
//        document.querySelector(".player-0-panel").classList.remove("active");
//        document.querySelector(".player-1-panel").classList.add("active");
        
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice-2").style.display = "none";
}

function changeUpperScoreLimit() {
    if(gamePlay) {
        var temp = document.querySelector(".limit-score").value
        winScoreLimit = temp < 0 ? 100 : temp;
    } else {
        winScoreLimit = 100;
    }
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;   // 0 - Player 1, 1 - Player 2; to use the array, having the player as an index
    gamePlay = true;
    previousDice = 0;
    previousDice2 = 0;
    winScoreLimit = 100;
    
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice-2").style.display = "none";
    
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
}

/*
CODING CHALLENGES
Change the game to follow these rules

1. A player loses his ENTIRE score when they roll two 6's in a row. After that, it's the next player's tunr (hint: always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where the players can set the winning score, so that they can change the predefined score of 100 (hint: you can read that value with the .value property in JS)

3. Add another die to the game, so that there are 2 dies now. The player loses his current score when one of them is a 1.


*/



