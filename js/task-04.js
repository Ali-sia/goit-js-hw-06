let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action=decrement]');
const incrementBtn = document.querySelector('[data-action=increment]');

decrementBtn.addEventListener('click', decrement => {
  counterValue -= 1;
  return (valueEl.textContent = counterValue);
});
incrementBtn.addEventListener('click', increment => {
  counterValue += 1;
  return (valueEl.textContent = counterValue);
});
