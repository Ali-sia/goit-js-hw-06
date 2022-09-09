const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientListEl = document.querySelector('#ingredients');

const element = ingredients.map(options => {
  const liEl = document.createElement('li');
  liEl.textContent = options;
  return liEl;
});

ingredientListEl.append(...element);

// ------------------------------------------------------------------

// ingredients.map(ingredient => {
//   const liRef = document.createElement('li');
//   liRef.textContent = ingredient;
//   return ingredientList.append(liRef);
// });
// ------------------------------------------------------------------
// const liRef = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   liRef[i] = document.createElement('li');
//   liRef[i].textContent = ingredients[i];
//   ingredientList.appendChild(liRef[i]);
// }

// ingredientList.append();
// ------------------------------------------------------------------
// Потірбно за допомогою мап створиит елементи
// і додати їх в дом після перебору
// ------------------------------------------------------------------
// ingredientList.innerHTML = ingredients.map(ingredient => '<li>' + ingredient + '</li>').join('');
// ------------------------------------------------------------------
