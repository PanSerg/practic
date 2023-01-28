localStorage.setItem('my-films', JSON.stringify({ name: "Avatar", age: 3 }));

console.log(localStorage);

const savedFilms = localStorage.getItem('my-films');
console.log('savedFilms', savedFilms);

const parsedFilms = JSON.parse(savedFilms);
console.log('parsedFilms', parsedFilms);



// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line
// console.log(galleryItems);
// console.log(SimpleLightbox);

// const galleryContainer = document.querySelector('.gallery');
// console.log(galleryContainer);

// //--Создание и рендер разметки
// const markup = galleryItems.reduce(
//   (acc, { preview, original, description }) => {
//     return (
//       acc +
//       `<div class="gallery__item">
//   <a class="gallery__item" href="${original}">
//     <img loading="lazy" class="gallery__image"
// src="${preview}" alt="${description}" data-source="${original}"
// />
//   </a>
//   </div>`
//     );
//   },
//   ''
// );

// galleryContainer.insertAdjacentHTML('beforeend', markup);

// //..добавление подписи картинке//
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionsPosition: 'bottom',
//   captionsDelay: 250,
// });
// console.log(lightbox);
