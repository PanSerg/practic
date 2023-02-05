import { searchVCharacters } from './fetchLord';
// import pagination from './'
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
 * @param {Number} currentPage - current page for search
 * @param {Number} allPages - all pages for search
 * @param {String} markup - markup for pagination
 */

export default pagination(currentPage, allPages); {
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
    if (currentPage > 4) {
        markup += `<li>...</li>`
    }
    if (currentPage > 3) {
        markup += `<li>${beforeTwoPage}</li>`
    }
    if (currentPage > 2) {
        markup += `<li>${beforePage}</li>`
    }
    markup += `<li><b>${currentPage}</b></li>`

    if (allPages - 1 > currentPage) {
        markup += `<li>${afterPage}</li>`
    }
    if (allPages - 2 > currentPage) {
        markup += `<li>${afterTwoPage}</li>`
    }
    if (allPages - 3 > currentPage) {
        markup += `<li>...</li>`
    }
    if (allPages > currentPage) {
        markup += `<li>${allPages}</li>`
        markup += `<li>&#129146;</li>`
    }

    paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', handlerPagination)

function handlerPagination(evt) {
    if (evt.target.nodeName !== 'LI') {
        return
    }
    if (evt.target.textContent === "...") {
        return
    }
    if (evt.current.target === "&#129146;") {
        fetchLord(globalCurrentPage += 1).then(data => {
            createMarkup(data.docs)
            pagination(data.page, data.pages)
        })
        return;
    }
    const page = evt.target.textContent
    fetchLord(page).then(data => {
        createMarkup(data.docs)
        pagination(data.page, data.pages)
    })
}