function getComputerChoice() {
  options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Pick your choice");
  computerSelection = getComputerChoice();
  if ((playerSelection == "rock" && computerSelection == "paper") 
    || (playerSelection == "paper" && computerSelection == "scissor") 
    || (playerSelection == "scissor" && computerSelection == "rock")) {
    return ("Loser! bahahah");
  } else if (playerSelection == computerSelection) {
    return ("You're tied!");
  } else {
    return ("You won!");
  }
}

let playerSelection;
let computerSelection;

function game() {
  console.log(playRound(playerSelection, computerSelection));
} 
console.log(game()) 