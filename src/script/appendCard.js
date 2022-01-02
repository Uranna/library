export const $areaAllBook = document.querySelector('.list-book--all');
export const $areaFavoriteBook = document.querySelector('.list-book--favorite');

export function createCard(book) {
  return `
    <li class="list-book__item card-book ${book.status ? 'card-book--read' : ''}" draggable='true' data-id=${book.id}>
      <p class="card-book__name">${book.title}</p>
      <div class="card-book__controls">
        <button class="card-book__btn-edit btn">Ред.</button>
        <button class="card-book__btn-status ${book.status ? 'card-book__btn-status--read' : ''} btn">Прочитана</button>
        <button class="card-book__btn-read btn">Читать</button>
        <button class="card-book__btn-delete btn">X</button>
      </div>
    </li>
  `
}

export function appendCard(html, element) {
  element.querySelector('.list-book__list').innerHTML += html
}