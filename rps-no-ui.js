function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerResult = Math.floor(Math.random() * choices.length);
    return choices[computerResult];
}

//console.log(getComputerChoice()); test passed

function singleRound(computerSelection, playerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt("Choose from the following: Rock - Paper - Scissors").toLowerCase();
        if(isATie(computerSelection, playerSelection)) {
            return "Tie!";
        } else if (playerWins(computerSelection, playerSelection)){
            return "You won!"
        }else {
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
}

function isATie(computerSelection, playerSelection){
    return computerSelection === playerSelection;
}

function playerWins(computerSelection, playerSelection){
    return (
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")
    )
}

function game(){
    let gamesCount = 0;
    let playerPoints = 0;
    let computerPoints = 0;
    do{
        const result = singleRound();
        console.log(result);

        if (result.includes("You won")) {
            playerPoints++;
        } else if (result.includes("You lose")) {
            computerPoints++;
        }

        gamesCount++;
    }while (gamesCount <= 5);
    if(playerPoints>computerPoints){
        return "You win " + playerPoints + "-" + computerPoints;
    } else if (playerPoints<computerPoints){
        return "You lose " + playerPoints + "-" + computerPoints;
    } else{
        return "Tie!"
    }
}

console.log(game())