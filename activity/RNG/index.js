const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
const submitBtn = document.getElementById('submitBtn');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

submitBtn.addEventListener('click', () => {
  let guess = Number(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = "❌ Please enter a valid number.";
    message.style.color = "red";
  } else if (guess < min || guess > max) {
    message.textContent = `❗ Your guess must be between ${min} and ${max}.`;
    message.style.color = "orange";
  } else {
    attempts++;
    if (guess < answer) {
      message.textContent = "📉 Too low!";
      message.style.color = "blue";
    } else if (guess > answer) {
      message.textContent = "📈 Too high!";
      message.style.color = "blue";
    } else {
      message.textContent = `🎉 Correct! The number was ${answer}. Attempts: ${attempts}`;
      message.style.color = "green";
      guessInput.disabled = true;
      submitBtn.disabled = true;
    }
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
  }

  guessInput.value = "";
  guessInput.focus();
});
