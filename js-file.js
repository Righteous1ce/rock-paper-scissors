// Define variables to keep track of player and computer scores
let playerScore = 0;
let computerScore = 0;

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {

  // Get the elements for the game buttons and result display
  const rockButton = document.getElementById("rockButton");
  const paperButton = document.getElementById("paperButton");
  const scissorsButton = document.getElementById("scissorsButton");
  const resultsDiv = document.getElementById("results");

  // Define the function to write the result to the display
  function writeResult(message) {
    resultsDiv.innerHTML += message + "<br>";
  }

  // Define the function to play a round
  function playRound(playerSelection) {
    // Get a random choice for the computer
    const computerSelection = getComputerChoice();

    // Determine the winner of the round
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      // Player wins
      playerScore++;
      writeResult(`Player wins! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === computerSelection) {
      // Tie
      writeResult("It's a tie!");
    } else {
      // Computer wins
      computerScore++;
      writeResult(`Computer wins! ${computerSelection} beats ${playerSelection}`);
    }

    // Check if a player has won the game
    checkForWinner();
  }

  // Define the function to get a random choice for the computer
  function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  }

  // Define the function to check if a player has won the game
  function checkForWinner() {
    if (playerScore === 5) {
      writeResult("Player has won the game!");
      endGame();
    } else if (computerScore === 5) {
      writeResult("Computer has won the game!");
      endGame();
    }
  }

  // Define the function to end the game
  function endGame() {
    //Disable the game buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    // Display the final score
    writeResult(`Final score: Player ${playerScore}, Computer ${computerScore}`);
  }

  // Add event listeners to the game buttons
  rockButton.addEventListener("click", function () {
    playRound("rock");
  });

  paperButton.addEventListener("click", function () {
    playRound("paper");
  });

  scissorsButton.addEventListener("click", function () {
    playRound("scissors");
  });

});
