function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxHolder: document.querySelector('#boxes'),
};

console.log('🚀 -> createBoxes -> boxAmount', refs.boxAmount);

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(event) {
  const boxAmount = refs.input.value;
  const startBoxSize = 30;
  let size;

  for (let i = 1; i <= boxAmount; i += 1) {
    console.log('🚀 -> createBoxes -> i = ', i);
    size = startBoxSize + i * 10;

    refs.boxHolder.insertAdjacentHTML(
      'beforeend',
      `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}

function destroyBoxes() {
  refs.boxHolder.innerHTML = '';
}
