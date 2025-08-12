let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

submitBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  attempts++;

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    submitBtn.disabled = true;
    restartBtn.style.display = "inline";
  } else if (guess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  feedback.textContent = "";
  attemptsDisplay.textContent = "";
  guessInput.value = "";
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
});
