let playerScore = 0;
let computerScore = 0;
const pcRock = document.querySelector("[data-pcRock]");
const pcPaper = document.querySelector("[data-pcPaper]");
const pcScissors = document.querySelector("[data-pcScissors]");
const cpRock = document.querySelector("[data-cpRock]");
const cpPaper = document.querySelector("[data-cpPaper]");
const cpScissors = document.querySelector("[data-cpScissors]");
const pcScore = document.querySelector("[data-pcScore]");
const gameResultPcScore = document.querySelector("[data-gameResult-pcScore]");
const gameResultCpScore = document.querySelector("[data-gameResult-cpScore]");
const cpScore = document.querySelector("[data-cpScore]");
const gameResult = document.querySelector("[data-gameResult]");
const gameResultText = document.querySelector("[data-gameResultText]");
const reset = document.querySelector("[data-reset]");
const container = document.querySelector("[data-container]");

pcScore.innerText = playerScore;
cpScore.innerText = computerScore;
/*
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
*/
// Random computer choices
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  if (choice === "rock") {
    cpRock.classList.add("cpChoiceSelected");
    return choice;
  } else if (choice === "paper") {
    cpPaper.classList.add("cpChoiceSelected");
    return choice;
  } else if (choice === "scissors") {
    cpScissors.classList.add("cpChoiceSelected");
    return choice;
  } else {
    console.log("error in Random choice");
  }
}

// plays a round of rock paper scissors and returns the result
// alongside an increment to score
const playRound = (playerSelection, computerSelection) => {
  switch (true) {
    case playerSelection === computerSelection:
      return "Same choice! Try again"; // same choice case
      break;
    case playerSelection === "rock" && computerSelection === "paper":
    case playerSelection === "paper" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "rock":
      playerScore += 1;
      pcScore.innerText = playerScore;
      return "You win!"; // lose case
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "paper" && computerSelection === "rock":
    case playerSelection === "scissors" && computerSelection === "paper":
      computerScore += 1;
      cpScore.innerText = computerScore;
      return "You lose, Try again"; // win case
    default:
      return "Very odd"; // a default for when it breaks
  }
};

// game function that plays a round and gives the results
const game = (choice) => {
  cpRock.classList.remove("cpChoiceSelected");
  cpPaper.classList.remove("cpChoiceSelected");
  cpScissors.classList.remove("cpChoiceSelected");
  playRound(choice, getComputerChoice());
  if (playerScore == 5) {
    container.classList.add("blur");
    gameResult.classList.add("shown");
    gameResultText.innerText = "YOU WIN!";
    gameResultPcScore.innerText = playerScore;
    gameResultCpScore.innerText = computerScore;
  } else if (computerScore == 5) {
    container.classList.add("blur");
    gameResult.classList.add("shown");
    gameResultText.innerText = "YOU LOSE";
    gameResultPcScore.innerText = playerScore;
    gameResultCpScore.innerText = computerScore;
  }
};
const resetFunc = () => {
  container.classList.remove("blur");
  gameResult.classList.remove("shown");
  playerScore = 0;
  computerScore = 0;
  pcScore.innerText = playerScore;
  cpScore.innerText = computerScore;
};

// eventListeners that play the game function on click with the corresponding choice
pcRock.addEventListener("click", () => game("rock"));
pcPaper.addEventListener("click", () => game("paper"));
pcScissors.addEventListener("click", () => game("scissors"));
reset.addEventListener("click", resetFunc);
