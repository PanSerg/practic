import { searchVCharacters } from './fetchLord';

const list = document.querySelector('.cards');
const paginationBox = document.querySelector('.pagination');
let globalCurrentPage = 0;

function createMarkup(arr) {
    const markup = arr.reduce((acc, { name, race }) => acc + `<li><h2>${name}</h2><h3>${race}</h3></li>}`)
    list.insertAdjacentHTML('before', markup);
}

searchVCharacters().then(data => {
    console.log(data);
    createMarkup(data.docs);
    pagination(data.page,data.pages)
})

let page = 1;

/**
 * Create pagination
//  * @param {Number} currentPage - current page for search
//  * @param {Number} allPages - all pages for search
//  * @param {String} markup - markup for pagination
 */

export default pagination(currentPage, allPages) {
    let markup = ''
    let beforeTwoPage = currentPage - 2;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
    let afterTwoPage = currentPage + 2;
    globalCurrentPage = currentPage;

    if (currentPage > 1) {
        markup += `<li>&#129144;</li>`
        markup += `<li>1</li>`
    }
    if (currentPage >4) {
        markup += `<li>...</li>`
    }
}