const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; /* gives a random choice of rock paper scissors to the computer and makes it case insensitive */
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "Same choice! Try again";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore = computerScore + 1;
        return "You Lose! Try Again";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore = playerScore + 1;
        return "You Win!, Play another Round";
    } 
}; /* Plays a round of rock paper scissors */

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your choice, Rock, Paper or Scissors?"); /* prompt for player input */
        let computerSelection = getComputerChoice(); /* assigning a random selection to the computer */
        console.log("Player has selected " + playerSelection);;
        console.log("Computer has selected " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
    if (playerScore > computerScore) {
        return "You Win the Game!";
    } else if (playerScore < computerScore) {
        return "You Lost the game!";
    } else if (playerScore === computerScore) {
        return "Tie!"
    }
    } /* score keeping */


console.log(game())