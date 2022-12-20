function getComputerChoice() {
    let choice = 1;

    if (choice < 0) {
        return "Rock";
    } else if (choice == 0) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

console.log(getComputerChoice());

function playRound(playerScoreSelection, computerSelection) {

    playerScoreSelection = playerScoreSelection.toLowerCase();

    if (playerScoreSelection === "rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
        return "computer";
    } else if (playerScoreSelection === "rock" && computerSelection === "Scissor") {
        console.log("I Lose!:( Rock beats Scissor");
        return "player";
    } else if (playerScoreSelection === "paper" && computerSelection === "Scissor") {
        console.log("You Lose! Scissor beats Paper");
        return "computer";
    } else if (playerScoreSelection === "paper" && computerSelection === "Rock") {
        console.log("I Lose!:( Paper beats Rock");
        return "player";
    } else if (playerScoreSelection === "scissor" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissor");
        return "computer";
    } else if (playerScoreSelection === "scissor" && computerSelection === "Paper") {
        console.log("I Lose!:( Scissor beats Paper");
        return "player";
    } else {
        console.log("It's a tie!");
        return "tie";
    }
  }

  function game() {

    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5; i++) {
        const playerScoreSelection = prompt("Your choice:\n");
        const computerSelection = getComputerChoice();
        const result = playRound(playerScoreSelection, computerSelection);

        if (result === "computer") {
            computerScore++;
            console.log("Computer: " + computerScore + "\nPlayer: " + playerScore);
        } else if (result === "player") {
            playerScore++;
            console.log("Computer: " + computerScore + "\nPlayer: " + playerScore);
        }
    }

    if (computerScore > playerScore) {
        console.log("I am the WINNER!")
    } else if (computerScore < playerScore) {
        console.log("You are the WINNER!");
    } else {
        console.log("It's a TIE!");
    }
  }

  game();