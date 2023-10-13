let score;

function getComputerChoice() {
  options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  
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
let a = 0;
let b = 0;
let play;
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Pick your choice");
    play = playRound(playerSelection, computerSelection);
    console.log(play)
    if (play == "You won!") {
      a += 1;
    } else if (play == "Loser! bahahah") {
      b += 1;
    }
  }
  console.log(a);
  console.log(b);
  if (a > b) {
    return "Congrats!";
  } else if (a < b) {
    return "Too bad"
  } else {
    return "Tied, nice one"
  }
}

console.log(game()) 