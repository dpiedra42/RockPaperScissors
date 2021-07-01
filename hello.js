let computerMove;

function computerPlay() {
    computerSelection = Math.floor(Math.random()*3);
    console.log(computerSelection);
    switch (true) {
        case (computerSelection == 0):
            computerMove = "ROCK";
            console.log("Computer chose rock");
            break;
        case (computerSelection == 1):
            computerMove = "PAPER";
            console.log("Computer chose paper");
            break;
        case (computerSelection == 2):
            computerMove = "SCISSORS";
            console.log("Computer chose scissors");
            break;
    }
}

computerPlay();