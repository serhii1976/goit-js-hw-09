import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let finalTime = 0;

refs.btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (Date.now() > selectedDates[0].getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.btnStart.removeAttribute('disabled', true);
      finalTime = selectedDates[0].getTime();
    }
  },
};
flatpickr(refs.inputEl, options);

function onClickBtn() {
  refs.btnStart.setAttribute('disabled', true);
  const timerId = setInterval(timerFunc, 1000);

  function timerFunc() {
    let ms = finalTime - Date.now();
    if (ms > 0) {
      convertMs(ms);
    } else {
      clearInterval(timerId);
    }
  }
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  refs.daysEl.textContent = days;
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  refs.hoursEl.textContent = hours;
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  refs.minutesEl.textContent = minutes;
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  refs.secondsEl.textContent = seconds;
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
refs.btnStart.addEventListener('click', onClickBtn);
