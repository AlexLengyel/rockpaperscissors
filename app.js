// Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Functions
function getComputerChoices() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    computer
  )}. You won!`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 600);
}
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(
    computer
  )}. You lost!`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("red-glow");
  }, 600);
}
function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} equals to ${convertToWord(
    computer
  )}. It's a draw!`;
  document.getElementById(user).classList.add("yellow-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("yellow-glow");
  }, 600);
}

function game(userChoice) {
  const computerChoice = getComputerChoices();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
