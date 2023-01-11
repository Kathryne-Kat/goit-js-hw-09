import Notiflix from 'notiflix';

const refs = {
  formElem: document.querySelector('.form'),
 };

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
        // Fulfill
          resolve({position, delay})
        } else {
        // Reject
          reject({position, delay})
      }
    }, delay)  
  }) 
  //console.log(promise);
  return promise;
}

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements);

  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  console.log(delay, step, amount);
  
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({position, delay}) => { Notiflix.Notify.success(`Fulfilled promise ${i} in ${delay} ms`) })
      .catch(({position, delay}) => { Notiflix.Notify.failure(`Reject promise ${i} in ${delay} ms`) })
      delay += step;
    }  
});
