/*write a program that take a user's input
 from three choices:
rock, paper, and scissor
and compare it to the com's output
rock beats scissor, scissor beats paper, paper beats rock
show the win/lose message */



//user input one out of three: rock paper scissor
//computer also output a choice out of those 
function getComputerChoice() {
  options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

//compare both choices
//the rule is rock > scissor, scissor > paper, paper > rock
//same choices will be tied
//if the player win, message you won
//if the player lose, message you lose


function playRound(playerSelection, computerSelection) {
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

//play five games
function game() {
  let a = 0;
  let b = 0;
  if (playRound(playerSelection, computerSelection) == "You won!") {
     a++;
  } else {
     b++;
  }

  playerSelection = prompt("Pick your choice");
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  comsole.lof(playRound(playerSelection, computerSelection));
  

}
console.log(game())
//each games must be recorded, scored

//whoever got the higher score wins