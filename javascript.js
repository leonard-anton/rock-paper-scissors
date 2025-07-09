function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 100)) % 3;

    if (randomNum === 0)
        return "rock";

    if (randomNum === 1)
        return "paper";

    if (randomNum === 2)
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");

    return choice.toLowerCase();
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        console.log("Draw!");

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.")
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.")
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    }
    console.log("Current Score: Player - " + humanScore + " | " + "Computer - " + computerScore);
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5)
        console.log("YOU WON THE GAME!")
    else console.log("The Computer won... Try again?");
}

playGame();
