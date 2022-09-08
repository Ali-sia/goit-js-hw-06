const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const categoriesArray = [...categoriesEl];
const categoryName = categoriesArray.map(categories => categories.firstElementChild.textContent);
const subcategoryLength = categoriesArray.map(categories => categories.children[1].children.length);

for (let i = 0; i < categoriesArray.length; i += 1) {
  console.log(`Category: ${categoryName[i]}\nElements: ${subcategoryLength[i]}`);
}

// const categoryArray = [...categoriesEl]
//   .map(
//     categories =>
//       `Category: ${categories.children[0].textContent}\nElements: ${categories.children[1].children.length}`
//   )
//   .join('\n');
// console.log(categoryArray);
