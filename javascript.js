function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 100)) % 3;

    if (randomNum === 0)
        return "rock";

    if (randomNum === 1)
        return "paper";

    if (randomNum === 2)
        return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");

    return choice.toLowerCase();
}

let humanScore = 0, computerScore = 0;
