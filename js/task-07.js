const refs = {
  sliderControl: document.querySelector('#font-size-control'),
  changingText: document.querySelector('#text'),
};

refs.sliderControl.value = refs.sliderControl.min;

refs.sliderControl.addEventListener('change', event => {
  refs.changingText.style.fontSize = refs.sliderControl.value + 'px';
  console.log(refs.sliderControl.value);
});
