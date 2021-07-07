let computerMove;
let playerMove;
let round = 0;
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

    document.getElementById("compSel").innerHTML = computerMove.toUpperCase();
    if (computerMove == playerMove) {
        document.getElementById("roundResult").innerHTML = "No Winner! It's a tie, try again :)";
        round--;
    }
    else if ((computerMove == 'rock' && playerMove == 'scissors') ||
             (computerMove == 'paper' && playerMove == 'rock') ||
             (computerMove == 'scissors' && playerMove == 'paper')) {
        computerScore++;
        document.getElementById("roundResult").innerHTML = "Computer wins, " + computerMove + " beats " + playerMove + "!";
    }
    else if ((playerMove == 'rock' && computerMove == 'scissors') ||
             (playerMove == 'paper' && computerMove == 'rock') ||
             (playerMove == 'scissors' && computerMove == 'paper')) {
        playerScore++;
        document.getElementById("roundResult").innerHTML = "You won, " + playerMove + " beats " + computerMove + "!";
             }
    else 
        document.getElementById("roundResult").innerHTML = "You didn't enter a fighter!";
}

function game() {
    playRound();

    round++;
    document.getElementById("roundNumber").innerHTML = "Round: " + round;
    document.getElementById("tryAgain").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
    if (round == 5){
        if (computerScore > playerScore)
            document.getElementById("roundResult").innerHTML = "Computer won with a score of " + computerScore + "!";
        else if (playerScore > computerScore)
            document.getElementById("roundResult").innerHTML = "You won with a score of " + playerScore + "!";
        else
            document.getElementById("roundResult").innerHTML = "No winner!";
        // document.getElementById("tryAgain").innerHTML = "If you want to play again refresh the page :)";
    }
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerMove = img.alt.toLowerCase();

    game();
  });
});