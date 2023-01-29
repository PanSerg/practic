
const items = localStorage.getItem('saved-watched');
const parsedObject = JSON.parse(items);

// let pageNumber = 0;

// if (parsedObject.length === 0) {
//     return;
// } else {
//     pageNumber = parsedObject.length / 20;
//     if (pageNumber <= 1) {
//         return;
//     }
// } 

let films = [
  { name: 'name1', genre: 'triller' },
  { name: 'name2', genre: 'triller' },
  { name: 'name3', genre: 'fantasy' },
  { name: 'name4', genre: 'triller' },
  { name: 'name5', genre: 'triller' },
  { name: 'name6', genre: 'fantasy' },
  { name: 'name7', genre: 'triller' },
  { name: 'name8', genre: 'triller' },
  { name: 'name9', genre: 'fantasy' },
  { name: 'name10', genre: 'triller' },
  { name: 'name11', genre: 'triller' },
  { name: 'name12', genre: 'fantasy' },
  { name: 'name13', genre: 'triller' },
  { name: 'name14', genre: 'triller' },
  { name: 'name15', genre: 'fantasy' },
  { name: 'name16', genre: 'triller' },
  { name: 'name17', genre: 'triller' },
  { name: 'name18', genre: 'fantasy' },
  { name: 'name19', genre: 'triller' },
  { name: 'name20', genre: 'triller' },
  { name: 'name21', genre: 'fantasy' },
  { name: 'name22', genre: 'triller' },
  { name: 'name23', genre: 'triller' },
  { name: 'name24', genre: 'fantasy' },
];

let notesOnPage = 20;

for (let item of items) {
    item.addEventListener('click', function () {
    let pageNumber = +this.innerHTML;

        /*
            1 - 0 - 20
            2 - 20 - 40
            3 - 40 - 60
        */
        let start = (pageNumber - 1) * notesOnPage;
        let end = start + notesOnPage;
        
        let notes = films.slice(start, end);
       
        table.innerHTML = '';

        for (let note of notes) {
            let object = document.createElement('object');
            object.appendChild(object);

            let film;

            film = document.createElement('film');
            film.innerHTML = note.name;
            object.appendChild(film);

            film = document.createElement('film');
            film.innerHTML = note.name;
            object.appendChild(film);
        }
    });
}

function createPage(text, object) {
  let film = document.createElement('film');
  film.innerHTML = text;
  object.appendChild(film);
}



// localStorage.setItem('my-films', JSON.stringify({ name: "Avatar", age: 3 }));

// console.log(localStorage);

// const savedFilms = localStorage.getItem('my-films');
// console.log('savedFilms', savedFilms);

// const parsedFilms = JSON.parse(savedFilms);
// console.log('parsedFilms', parsedFilms);



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
