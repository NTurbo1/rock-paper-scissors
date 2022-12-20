function getComputerChoice() {
    let choice = 1;

    if (choice < 0) {
        return "Rock";
    } else if (choice == 0) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());