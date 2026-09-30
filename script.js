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

// function getHumanChoice() {
//     const humanChoice = prompt("please choose rock, paper, or scissors and input your choice.");
//     return humanChoice.toLowerCase();
// }


//function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
 
  function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
      roundResults.textContent = "It's a Tie! Try Again."; 
      scoreCard.textContent = `Current Score You: ${humanScore} | Computer: ${computerScore}`;
      document.body.appendChild(roundResults);
      document.body.appendChild(scoreCard);
    }  else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore = humanScore + 1;
      roundResults.textContent = "You Win! scissors beats paper.";
      scoreCard.textContent = `Current Score You: ${humanScore} | Computer: ${computerScore} `;
      document.body.appendChild(roundResults);
      document.body.appendChild(scoreCard);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore = humanScore + 1;
      roundResults.textContent = "You Win! paper beats rock.";
      scoreCard.textContent = `Current Score You: ${humanScore} | Computer: ${computerScore} `;
      document.body.appendChild(roundResults);
      document.body.appendChild(scoreCard);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore = humanScore + 1;
      roundResults.textContent = "You Win! rock beats scissors.";
      scoreCard.textContent = `Current Score You: ${humanScore} | Computer: ${computerScore} `;
      document.body.appendChild(roundResults);
      document.body.appendChild(scoreCard);
    } else {
      computerScore = computerScore + 1;
      roundResults.textContent = `You Lose! ${computerChoice} beats ${humanChoice} `;
      scoreCard.textContent = `Current Score You: ${humanScore} | Computer: ${computerScore} `;
      document.body.appendChild(roundResults);
      document.body.appendChild(scoreCard);

    }
  
  }
  
 // Array.from({ length: 5 }, () => playRound(getHumanChoice(), getComputerChoice()));

//  const endGameMessage = humanScore > computerScore ? `Congrats! You Won rock paper scissors against the computer. \n Game summary \n -- You scored ${humanScore} points -- \n -- Computer scored ${computerScore} points --`
//      : computerScore > humanScore ? `Sorry! You Lost rock paper scissors against the computer. \n Game Summary \n -- You scored ${humanScore} points -- \n -- Computer scored ${computerScore} points --`
//      : `Its a tie! out of 5 rounds \n Game summary \n -- You scored ${humanScore} points -- \n -- Computer scored ${computerScore} points --`;
  
//    console.log (endGameMessage);
//}
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer")
document.body.appendChild(buttonContainer);

const rock = document.createElement("button");
rock.classList.add("rockButton");
const paper = document.createElement("button");
paper.classList.add("paperButton");
const scissors = document.createElement("button");
scissors.classList.add("scissorsButton");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const roundResults = document.createElement("div");
roundResults.classList.add("roundResults");
const scoreCard = document.createElement("div");
scoreCard.classList.add("scoreCard");

//playGame();