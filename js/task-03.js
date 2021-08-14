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
const listOfImages = document.querySelector('#gallery');
listOfImages.classList.add('gallery__flexbox');
// function addImages(arr) {
//
//   const items = arr.map(elem => {
//     const listItem = document.createElement('li');
//     const imageItem = document.createElement('img');
//     imageItem.setAttribute('src', elem.url);
//     imageItem.setAttribute('alt', elem.alt);
//     console.log(imageItem);
//     listItem.append(imageItem);
//     console.log(listItem);
//     imageItem.classList.add('gallery__img');

//     return listItem;
//   });
//   console.log(items);
//   listOfImages.append(...items);

//   return listOfImages;
// }
// addImages(images);

// ALTERNATIVE

function addImages(arr) {
  const { url, alt } = arr;
  return `
  <li><img class="gallery__img" src="${url}" alt="${alt}" ></li>
`;
}

const addListOfImages = images.map(addImages).join('');
listOfImages.insertAdjacentHTML('beforeend', addListOfImages);
console.log(addListOfImages);
