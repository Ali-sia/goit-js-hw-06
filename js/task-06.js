const inputRef = document.querySelector('#validation-input');
const validateLength = inputRef.dataset.length;

const validate = event => {
  if (event.currentTarget.value.length > validateLength) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
};

inputRef.addEventListener('blur', validate);
