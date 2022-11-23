const arr = ["rock", "paper", "scissors"];
const UserSelectionDisplay = document.getElementById("demo");
const ComputerSelectionDisplay = document.getElementById("tested");
const ResultSelectionDisplay = document.getElementById("resulted");
let computerChoice;
let userChoice;
let result;
playerSelections = document.querySelectorAll("img");

//function for the player using click
playerSelections.forEach((playerSelection) =>
  playerSelection.addEventListener("click", (e) => {
    userChoice = e.target.id;
    UserSelectionDisplay.innerHTML = userChoice;

    getComputerChoice(); //call function to generate computer choice

    playRound(); //call function to generate result
  })
);

//function for the player using prompt
// function getPlayerSelection() {
//   let text;
//    let user = prompt("Which game option do you choose?").toLowerCase();

//   if (user === "rock" || "paper" || "scissors") {
//     text = ` ${user}`;
//   } else {
//     text = "I dont recognise this selection !!! <br> PLEASE TRY AGAIN";
//   }

//   // if (user === "Rock" || user === "rock") {
//   //   text = "You chose Rock!";
//   // }
//   // else if (user === "Paper"  || user === "paper" )
//   //  {
//   //   text = "You choose Paper";
//   // }
//   //  else if (user === "Scissors" || user === "scissors")
//   //  {
//   //   text = "You chose Scissors";
//   // }
//   // else
//   //  {
//   //   text = "I dont recognise selection!";
//   // }
//    document.getElementById("demo").innerHTML = text;
//    UserSelectionDisplay.innerHTML = text
//   return text
// }

//function for computer to generate random choice!
function getComputerChoice() {
  computerChoice = arr[Math.floor(Math.random() * arr.length)];
  ComputerSelectionDisplay.innerHTML = computerChoice;
}
// console.log(getComputerChoice());

//function for one game
function playRound() {
  //  playerSelection = getPlayerSelection();
  //  computerSelection = getComputerChoice();
  // console.log(computerChoice);
  if (userChoice === computerChoice) {
    result = "ITS A TIE";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    result = "YOU LOSE";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "YOU LOSE";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    result = "YOU LOSE";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result = "YOU WIN";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    result = "YOU WIN";
  }

  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "YOU WIN";
  }
  ResultSelectionDisplay.innerHTML = result;
}
