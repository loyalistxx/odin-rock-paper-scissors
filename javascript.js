let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelector("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreNum = document.querySelector("#playerScoreNum");
const computerScoreNum = document.querySelector("#computerScoreNum");
computerScoreNum.innerHTML = computerScore;
playerScoreNum.innerHTML = playerScore;
const gameResult = document.querySelector("#gameResult");

// Random computer choices
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// plays
const playRound = (playerSelection, computerSelection) => {
  switch (true) {
    case playerSelection === computerSelection:
      return "Same choice! Try again"; // same choice case
      break;
    case playerSelection === "rock" && computerSelection === "paper":
    case playerSelection === "paper" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "rock":
      computerScore += 1;
      computerScoreNum.innerHTML = computerScore;
      return "You Lose! Try again"; // lose case
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "paper" && computerSelection === "rock":
    case playerSelection === "scissors" && computerSelection === "paper":
      playerScore += 1;
      playerScoreNum.innerHTML = playerScore;
      return "You Win!"; // win case
    default:
      return "Very odd"; // a default for when it breaks
  }
};
const game = (choice) => {
  let result = playRound(choice, getComputerChoice());
  gameResult.innerHTML = result;
  if (playerScore == 5) {
    gameResult.innerHTML = "You Win the Game!";
    playerScore = 0;
    computerScore = 0;
    playerScoreNum.innerHTML = playerScore;
    computerScoreNum.innerHTML = computerScore;
  } else if (computerScore == 5) {
    gameResult.innerHTML = "You Lost the game!";
    playerScore = 0;
    computerScore = 0;
    playerScoreNum.innerHTML = playerScore;
    computerScoreNum.innerHTML = computerScore;
  }
};
// eventListeners that playRound on click
rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));
/*
const body = document.body;



const results = document.querySelector("#results");
const win = document.createElement("h1");
const lose = document.createElement("h1");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

function game() {
  if (playerScore == 5) {
    win.textContent = "You Win the Game!";
    body.removeChild(results);
    results.appendChild(win);
  } else if (computerScore == 5) {
    lose.textContent = "You Lost the game!";
    body.removeChild(results);
    results.appendChild(lose);
  }
}
buttons.addEventListener("click", () => game());
*/
