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

}

