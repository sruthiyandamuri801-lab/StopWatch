let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateDisplay() {
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  running = false;
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    const lapTime = document.createElement("li");
    lapTime.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(lapTime);
  }
}