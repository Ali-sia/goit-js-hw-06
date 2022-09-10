const inputRef = document.querySelector('#validation-input');
const validateLength = Number(inputRef.dataset.length);

const validate = event => {
  if (event.currentTarget.value.length === validateLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
};

inputRef.addEventListener('blur', validate);
