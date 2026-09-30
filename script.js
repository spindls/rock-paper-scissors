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


//function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
 
  function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
      console.log ("It's a Tie! Try Again.");
    }  else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore = humanScore + 1;
      console.log (`You Win! scissors beats paper. \n Current Score \n You: ${humanScore} | Computer: ${computerScore} `);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore = humanScore + 1;
      console.log (`You Win! paper beats rock. \n Current Score \n You: ${humanScore} | Computer: ${computerScore} `);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore = humanScore + 1;
      console.log (`You Win! rock beats scissors. \n Current Score \n You: ${humanScore} | Computer: ${computerScore} `);
    } else {
      computerScore = computerScore + 1;
      console.log (`You Lose! ${computerChoice} beats ${humanChoice} \n Current Score \n You: ${humanScore} | Computer: ${computerScore} `);
    }
  
  }
  
 // Array.from({ length: 5 }, () => playRound(getHumanChoice(), getComputerChoice()));

  const endGameMessage = humanScore > computerScore ? `Congrats! You Won rock paper scissors against the computer. \n Game summary \n -- You scored ${humanScore} points -- \n -- Computer scored ${computerScore} points --`
      : computerScore > humanScore ? `Sorry! You Lost rock paper scissors against the computer. \n Game Summary \n -- You scored ${humanScore} points -- \n -- Computer scored ${computerScore} points --`
      : `Its a tie! out of 5 rounds \n Game summary \n -- You scored ${humanScore} points -- \n -- Computer scored ${computerScore} points --`;
  
    console.log (endGameMessage);
//}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));


//playGame();