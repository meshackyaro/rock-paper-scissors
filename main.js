function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Fix: Correct string interpolation with backticks
  document.getElementById(
    "player-selection"
  ).innerText = `Your Choice: ${userChoice}`;
  document.getElementById(
    "computer-selection"
  ).innerText = `Computer's Choice: ${computerChoice}`;

  let result = "";

  // Fix: Logical OR operators (||) to combine conditions
  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
  } else {
    result = "You Lose! 😢";
  }

  // Fix: Correct string interpolation with backticks
  document.getElementById("winner").innerText = `Result: ${result}`;
}
