// script.js
let countdownInterval;
let totalSeconds = 0;

const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("startCountdown");
const resetButton = document.getElementById("resetCountdown");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

// Format time into MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

// Start Countdown
function startCountdown() {
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  totalSeconds = minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    alert("Please enter a valid time!");
    return;
  }

  startButton.disabled = true;
  resetButton.disabled = false;

  countdownInterval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      countdownDisplay.textContent = formatTime(totalSeconds);
    } else {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "Time's up!";
      startButton.disabled = false;
    }
  }, 1000);
}

// Reset Countdown
function resetCountdown() {
  clearInterval(countdownInterval);
  countdownDisplay.textContent = "00:00";
  startButton.disabled = false;
  resetButton.disabled = true;
  minutesInput.value = "";
  secondsInput.value = "";
}

// Event Listeners
startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);
