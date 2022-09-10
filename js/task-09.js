function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  colorChangeBtn: document.querySelector('.change-color'),
  valueBgc: document.querySelector('.color'),
};

refs.colorChangeBtn.addEventListener('click', changeBgc);

function changeBgc(event) {
  const color = getRandomHexColor();
  refs.valueBgc.textContent = color;
  refs.body.style.backgroundColor = color;
}
