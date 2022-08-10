function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

btnStop.setAttribute('disabled', true);

function onClickStartButton() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

function onClickStopButton() {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
}

btnStart.addEventListener('click', onClickStartButton);
btnStop.addEventListener('click', onClickStopButton);
