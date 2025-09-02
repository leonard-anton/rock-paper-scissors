
function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 100)) % 3;

    if (randomNum === 0)
        return "rock";

    if (randomNum === 1)
        return "paper";

    if (randomNum === 2)
        return "scissors";
}

let humanScore = 0, computerScore = 0;

const container = document.querySelector(".container");

const result = container.querySelector(".result");
const score = container.querySelector(".score");
const winner = container.querySelector(".winner");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "Draw";
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! Rock beats Scissors.";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats Rock.";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! Scissors beats Paper.";
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    }
    score.textContent = "Player: " + humanScore + " | " + "Computer: " + computerScore;

    if (humanScore === 5) {
        winner.textContent = "YOU WON THE GAME!";
        disableButtons();
    }
    else if (computerScore == 5) {
        winner.textContent = "The Computer won... Try again?";
        disableButtons();
    }

}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


function playGame() {

    rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

playGame();
