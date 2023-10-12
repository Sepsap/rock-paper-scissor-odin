/*write a program that take a user's input
 from three choices:
rock, paper, and scissor
and compare it to the com's output
rock beats scissor, scissor beats paper, paper beats rock
show the win/lose message */



//user input one out of three: rock paper scissor
let playerSelection = prompt("What is your pick? ").toLowerCase();
console.log(playerSelection)

let options = ["rock", "paper", "scissor"];
(options.includes(playerSelection)) ? true : playerSelection = prompt("Choose again")

//computer also output a choice out of those 
function getComputerChoice() {
  options = ["rock", "paper", "scissor"];
  computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
}
getComputerChoice();
console.log(computerSelection);

//compare both choices
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection)
  if ((playerSelection == "rock" && computerSelection == "paper") 
  || (playerSelection == "paper" && computerSelection == "scissor") 
  || (playerSelection == "scissor" && computerSelection == "rock")) {
    return console.log("Loser! bahahah")
  } else if (playerSelection == computerSelection) {
    return console.log("You're tied!")
  } else {
    return console.log("You won!")
  }
}

playRound(playerSelection, computerSelection);

//the rule is rock > scissor, scissor > paper, paper > rock
//same choices will be tied
//if the winner win, message you won
//if the winner lose, message you lose
//play five games
//each games must be recorded, scored
//whoever got the higher score wins