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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissor") {
        return "I Lose!:( Rock beats Scissor";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissor") {
        return "You Lose! Scissor beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "I Lose!:( Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissor";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "Paper") {
        return "I Lose!:( Scissor beats Paper";
    } else {
        return "It's tie!";
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));