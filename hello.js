let computerMove;
let playerMove;

function computerPlay() {
    computerSelection = Math.floor(Math.random()*3);
    switch (true) {
        case (computerSelection == 0):
            computerMove = "ROCK";
            break;
        case (computerSelection == 1):
            computerMove = "PAPER";
            break;
        case (computerSelection == 2):
            computerMove = "SCISSORS";
            break;
    }
}

function playRound(computerSelection, playerSelection) {
    computerPlay();
    playerMove = prompt("Choose Your Fighter: Rock, Paper, or Scissors!");
    playerMove = playerMove.toUpperCase();

    if (computerMove == playerMove)
        console.log("No Winner! It's a tie, try again.");
    else if (){
        
    }
}

playRound(computerMove, playerMove);

