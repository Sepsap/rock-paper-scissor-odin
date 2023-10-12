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
  computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
}
console.log(getComputerChoice())
console.log(computerSelection);

//compare both choices
function playRound(playerSelection, computerSelection) {
  let playerSelection = prompt("What is your pick? ").toLowerCase();
  console.log(playerSelection)

  let options = ["rock", "paper", "scissor"];
  (options.includes(playerSelection)) ? true : alert("Please choose between rock, paper, and scissor!")
}

//the rule is rock > scissor, scissor > paper, paper > rock
//same choices will be tied
//if the winner win, message you won
//if the winner lose, message you lose
//play five games
//each games must be recorded, scored
//whoever got the higher score wins