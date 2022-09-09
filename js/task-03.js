const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

//З використанням element.insertAdjacentHTML
const element = images.map(({ url, alt }) => {
  return galleryList.insertAdjacentHTML(
    'beforeend',
    `<li class = 'gallery__item'><img class = 'gallery__img' src = ${url} alt = ${alt}></li>`
  );
});

//З використанням document.createElement

// const element = images.map(options => {
//   const { url, alt } = options;

//   const galleryItem = document.createElement('li');
//   const galleryImage = document.createElement('img');

//   galleryItem.classList.add('gallery__item');
//   galleryImage.classList.add('gallery__img');

//   galleryImage.src = url;
//   galleryImage.alt = alt;

//   galleryItem.appendChild(galleryImage);

//   return galleryItem;
// });

// galleryList.append(...element);
