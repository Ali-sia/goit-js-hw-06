const form = document.querySelector('.login-form');

// Обробка відправлення форми form.login-form повинна відбуватися
// відповідно до події submit.
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  // Під час відправлення форми сторінка не повинна перезавантажуватися.
  event.preventDefault();

  // Для доступу до елементів форми використовуй властивість elements.
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  // Якщо у формі є незаповнені поля, виводь alert з
  // попередженням про те, що всі поля повинні бути заповнені.
  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені');
  }

  // Якщо користувач заповнив усі поля і відправив форму,
  // збери значення полів в об'єкт, де ім'я поля буде ім'ям
  // властивості, а значення поля - значенням властивості.
  const formData = { email, password };

  // Виведи об'єкт із введеними даними в консоль і
  console.table('🚀 -> onFormSubmit -> formData', formData);

  // очисти значення полів форми методом reset.
  event.currentTarget.reset();
}

//Збирати дані з форми як Репета))
//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log('🚀 -> formData.forEach -> name', name);
//     console.log('🚀 -> formData.forEach -> value', value);
//   });
