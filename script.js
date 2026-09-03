function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
switch (randomNumber) {
    case 1:
        return "rock";
    case 2:
        return "paper";
    case 3:
        return "scissors";
}
}

function getHumanChoice() {
    const humanChoice = prompt("please choose rock, paper, or scissors and input your choice.");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice) {
    return "It's a Tie! Try Again.";
  }  else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore = humanScore + 1;
    return "You Win! Scissors beats Paper.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore = humanScore + 1;
    return "You Win! Paper beats Rock.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore = humanScore + 1;
    return "You Win! Rock beats Scissors.";
  } else {
    computerScore = computerScore + 1;
    return "You Lose! " + computerChoice + " beats " + humanChoice + ".";
  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log (playRound(humanSelection, computerSelection));

function playGame () {
    
}