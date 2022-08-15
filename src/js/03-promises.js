import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`,
        {
          position: 'center-center',
        }
      );
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        position: 'center-center',
      });
    });
}

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    return Notiflix.Notify.failure('enter the correct values!', {
      position: 'center-top',
    });
  }
  for (let i = 0; i < amount.value; i += 1) {
    const position = i + 1;
    const delay =
      Number(event.currentTarget.delay.value) + Number(step.value) * i;
    createPromise({ position, delay });
  }
}

refs.formEl.addEventListener('submit', onFormSubmit);
