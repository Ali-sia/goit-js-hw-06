const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientList = document.querySelector('#ingredients');
const liRef = [];

for (let i = 0; i < ingredients.length; i += 1) {
  liRef[i] = document.createElement('li');
  liRef[i].textContent = ingredients[i];
  ingredientList.appendChild(liRef[i]);
}
