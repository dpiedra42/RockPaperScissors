let computerMove;
let playerMove;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.buttons');

function computerPlay() {
    computerSelection = Math.floor(Math.random()*3);
    switch (computerSelection) {
        case (0):
            computerMove = 'rock';
            break;
        case (1):
            computerMove = 'paper';
            break;
        case (2):
            computerMove = 'scissors';
            break;
    }
}

function playRound() {
    computerPlay();

    if (computerMove == playerMove) {
        console.log("No Winner! It's a tie, try again :)");
        playRound();
    }
    else if ((computerMove == 'rock' && playerMove == 'scissors') ||
             (computerMove == 'paper' && playerMove == 'rock') ||
             (computerMove == 'scissors' && playerMove == 'paper')) {
        computerScore++;
        console.log("Computer wins! " + computerMove + " beats " + playerMove);
    }
    else if ((playerMove == 'rock' && computerMove == 'scissors') ||
             (playerMove == 'paper' && computerMove == 'rock') ||
             (playerMove == 'scissors' && computerMove == 'paper')) {
        playerScore++;
        console.log("You won! " + playerMove + " beats " + computerMove);
             }
    else 
        console.log("you didn't enter a fighter!");
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerMove);
    }
    if (computerScore > playerScore)
        console.log("computer won with a score of " + computerScore + "!");
    else if (playerScore > computerScore)
        console.log("you won with a score of " + playerScore + "!");
    else
        console.log("no winner!");
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerMove = img.alt.toLowerCase();

    game();
  });
});