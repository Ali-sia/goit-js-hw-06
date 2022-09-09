const refs = {
  inputRef: document.querySelector('#name-input'),
  nameRef: document.querySelector('#name-output'),
};

const changeName = event => {
  console.log(event.currentTarget.value);
  refs.nameRef.textContent = event.currentTarget.value;
  refs.nameRef.style.color = '#f0f';
};

refs.inputRef.addEventListener('input', changeName);
