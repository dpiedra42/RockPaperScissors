let computerMove;
let playerMove;
let round = 0;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.buttons');

//refreshes the page so you can start playing a new game
function refreshPage() {
    window.location.reload();
}

//displays the computer's choice on the screen
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

//randomly chooses 0, 1, or 2 which I have assigned rock, paper, and scissors to respectively.
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

//Starts off by getting the computer's choice, displays that choice, and then it plays the game.
//Then, I include conditions to compare computer and players move to decide who won, or if it's a
//tie. Finally, I display the results of the round.
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

//in this function I included a counter to know when i have done 5 rounds. The score
//is also displayed after each round is complete. When i have reached 5, the final score is displayed
//and then the button to refresh the page pops up at the same time the weapon choices are hidden.
function game() {
    playRound();

    round++;
    document.getElementById("roundNumber").innerHTML = "Round: " + round;
    document.getElementById("scoreBoard").innerHTML = "You: " + playerScore + "&nbsp&nbsp Computer: " + computerScore;
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

//This function assigns the weapon the player clicked on to my variable PlayerMove.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerMove = img.alt.toLowerCase();

    game();
  });
});