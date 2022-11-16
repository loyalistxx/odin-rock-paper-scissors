const choices = ["Rock", "Paper", "Scissors"]
let playerScore;
let computerScore;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();     /* gives a random choice of rock paper scissors to the computer and makes it case insensitive */ 
}


function playRound(playerSelection, computerSelection) {
     if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")
               || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore = computerScore + 1;
        return "You Lose! Try Again";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "papers" && computerSelection === "rock")
               || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore = playerScore + 1;
        return "You Win!, Play another Round";
    } else if (playerSelection === computerSelection) {
        return "Same choice! Try again";
    } 
     else {
        return "What the fuck";
    }
};  /* Plays a round of rock paper scissors */

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection1 = prompt("What is your choice, Rock, Paper or Scissors?").toLowerCase;     /* prompt for player input */
        let computerSelection1 = getComputerChoice();   /* assigning a random selection to the computer */
        console.log(playRound())
    }
    if (playerScore >= 3) {
        return "You Win the Game!";
    } else if (playerScore < 3) {
        return "You Lost the game";
    } else {
        return "Tie!"   /* if it breaks */
    }   /* score keeping */
}


console.log(game());