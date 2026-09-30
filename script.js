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
  checkGameOver();
  }

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer")
document.body.appendChild(buttonContainer);

const rock = document.createElement("button");
rock.classList.add("choiceButton");
const paper = document.createElement("button");
paper.classList.add("choiceButton");
const scissors = document.createElement("button");
scissors.classList.add("choiceButton");
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
const scoreCard = document.createElement("div");

const replayButton = document.createElement("button");
replayButton.textContent = "click to play again";
replayButton.classList.add("replayButton");
replayButton.addEventListener("click", () => {
  location.reload();
});

function checkGameOver() {
if (humanScore >= 5) {
  buttonContainer.style.display = "none";
  roundResults.style.display = "none";
  scoreCard.style.display = "none";
  const winningMessage = document.createElement("div");
  winningMessage.textContent = "Congrats! You Won rock paper scissors against the computer.";
  document.body.appendChild(winningMessage);
  document.body.appendChild(replayButton);
} else if (computerScore >= 5) {
  buttonContainer.style.display = "none";
  roundResults.style.display = "none";
  scoreCard.style.display = "none";
  const losingMessage = document.createElement("div");
  losingMessage.textContent = "Sorry! You Lost rock paper scissors against the computer.";
  document.body.appendChild(losingMessage);
  document.body.appendChild(replayButton);
}
}