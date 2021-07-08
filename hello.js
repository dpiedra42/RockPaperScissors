let computerMove;
let playerMove;
let round = 0;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.buttons');

function refreshPage() {
    window.location.reload();
}

function putImage() {
    var img = document.createElement("img");

    if (computerMove == 'rock') {
        img.src = "https://freepikpsd.com/media/2019/10/cartoon-rock-png-3-Transparent-Images.png";
        img.width = 80;
        img.height = 80;
        img.alt = "rock";
    }
    else if (computerMove == 'paper') {
        img.src = "https://freepikpsd.com/media/2019/10/cartoon-paper-png-7-Transparent-Images.png";
        img.width = 80;
        img.height = 80;
        img.alt = "paper";
    }
    else if (computerMove == 'scissors') {
        img.src = "https://i.pinimg.com/originals/de/d7/34/ded734058afb08d065830124d3d97a54.png";
        img.width = 80;
        img.height = 80;
        img.alt = "scissors";
    }
    document.getElementById("compSel").appendChild(img);
}

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
    document.getElementById("compSel").innerHTML = "";
    putImage();

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
    document.getElementById("scoreBoard").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
    if (round == 5){
        if (computerScore > playerScore)
            document.getElementById("roundResult").innerHTML = "Computer won with a score of " + computerScore + "!";
        else if (playerScore > computerScore)
            document.getElementById("roundResult").innerHTML = "You won with a score of " + playerScore + "!";
        else
            document.getElementById("roundResult").innerHTML = "No winner!";
        document.getElementById("weapons").style.display = "none";
        document.getElementById("tryAgain").innerHTML = '<button id="pressMe" onClick="refreshPage()">Press me to play again! :)</button>';
    }
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerMove = img.alt.toLowerCase();

    game();
  });
});