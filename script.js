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
   const choice = prompt("please choose rock, paper, or scissors and input your choice.");
    return "You selected" + " " + choice + ".";
}

let humanScore;
let computerScore;



console.log (getHumanChoice())