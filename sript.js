function getComputerChoice() {
    const choice = Math.floor((Math.random() * 3));

    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

let computerScore = 0;
let playerScore = 0;

const scoresDiv = document.createElement('div');
scoresDiv.style.backgroundColor = 'yellow';
scoresDiv.style.borderStyle = 'solid';
scoresDiv.style.width = '200px';

const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.textContent = 'Computer: ' + computerScore;
p2.textContent = 'Player: ' + playerScore;

scoresDiv.append(p1, p2);
const body = document.querySelector('body');
body.appendChild(scoresDiv);

function playRound(playerScoreSelection, computerSelection) {

    playerScoreSelection = playerScoreSelection.toLowerCase();

    const gameResultDiv = document.getElementById('game-result');
    if (body.contains(gameResultDiv)) {
        body.removeChild(gameResultDiv);
    }

    let roundResultDiv = document.getElementById('round-result');
    if (!body.contains(roundResultDiv)) {
        roundResultDiv = document.createElement('div');
        roundResultDiv.style.backgroundColor = 'pink';
        roundResultDiv.style.width = '200px';
        roundResultDiv.style.borderStyle = 'solid';
        roundResultDiv.id = 'round-result';
    }

    if (playerScoreSelection === "rock" && computerSelection === "Paper") {
        //console.log("You Lose! Paper beats Rock");
        roundResultDiv.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        p1.textContent = 'Computer: ' + computerScore;
        return "computer";
    } else if (playerScoreSelection === "rock" && computerSelection === "Scissor") {
        //console.log("I Lose!:( Rock beats Scissor");
        roundResultDiv.textContent = "I Lose!:( Rock beats Scissor";
        playerScore++;
        p2.textContent = 'Player: ' + playerScore;
        return "player";
    } else if (playerScoreSelection === "paper" && computerSelection === "Scissor") {
        //console.log("You Lose! Scissor beats Paper");
        roundResultDiv.textContent = "You Lose! Scissor beats Paper";
        computerScore++;
        p1.textContent = 'Computer: ' + computerScore;
        return "computer";
    } else if (playerScoreSelection === "paper" && computerSelection === "Rock") {
        //console.log("I Lose!:( Paper beats Rock");
        roundResultDiv.textContent = "I Lose!:( Paper beats Rock";
        playerScore++;
        p2.textContent = 'Player: ' + playerScore;
        return "player";
    } else if (playerScoreSelection === "scissor" && computerSelection === "Rock") {
        //console.log("You Lose! Rock beats Scissor");
        roundResultDiv.textContent = "You Lose! Rock beats Scissor";
        computerScore++;
        p1.textContent = 'Computer: ' + computerScore;
        return "computer";
    } else if (playerScoreSelection === "scissor" && computerSelection === "Paper") {
        //console.log("I Lose!:( Scissor beats Paper");
        roundResultDiv.textContent = "I Lose!:( Scissor beats Paper";
        playerScore++;
        p2.textContent = 'Player: ' + playerScore;
        return "player";
    } else {
        //console.log("It's a tie!");
        roundResultDiv.textContent = "It's a tie!";
        return "tie";
    }
  }

function game() {

    if (playerScore === 5 || computerScore === 5) {
        const roundResultDiv = document.getElementById('round-result');
        if (roundResultDiv) {
            body.removeChild(roundResultDiv);
        }
        const gameResultDiv = document.createElement('div');
        gameResultDiv.style.backgroundColor = 'green';
        gameResultDiv.style.width = '300px';
        gameResultDiv.style.height = '100px';
        gameResultDiv.style.borderStyle = 'solid';
        gameResultDiv.id = 'game-result';
        if (playerScore > computerScore) {
            gameResultDiv.textContent = 'You are the winner!';
        } else {
            gameResultDiv.textContent = 'I am the winner!';
        }

        body.appendChild(gameResultDiv);

        computerScore = 0;
        playerScore = 0;

        p1.textContent = 'Computer: ' + computerScore;
        p2.textContent = 'Player: ' + playerScore;
    }

    // for (i = 0; i < 5; i++) {
    //     const playerScoreSelection = prompt("Your choice:\n");
    //     const computerSelection = getComputerChoice();
    //     const result = playRound(playerScoreSelection, computerSelection);

    //     if (result === "computer") {
    //         computerScore++;
    //         console.log("Computer: " + computerScore + "\nPlayer: " + playerScore);
    //     } else if (result === "player") {
    //         playerScore++;
    //         console.log("Computer: " + computerScore + "\nPlayer: " + playerScore);
    //     }
    // }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(function (btn) {
    btn.addEventListener('click', () => {
        playRound(btn.id, getComputerChoice());
        game();
    });
});