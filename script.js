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

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a Tie!";
  }  else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "You Win! Scissors beats Paper."
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "You Win! Paper beats Rock.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "You Win! Rock beats Scissors.";
  } else {
    return "Computer Wins!";
  }

}

