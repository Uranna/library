import { library } from "./library";

const $modal = document.querySelector('.modal');
const $modalContent = $modal.querySelector('.modal__content');

function editBookModal(book) {
  return `
  <form action="/" class="modal__form" data-id="${book.id}">
    <div class="modal__box">
      <label class="modal__info" for="modal-title">Название книги: </label>
      <input class="modal__edit-title" name="title" value="${book.title}" id="modal-title"/>
      <label class="modal__info modal__info--text" for="modal-text">Текст книги: </label>
      <textarea class="modal__edit-text" name="text" id="modal-text">${book.text}</textarea>
    </div>
    <button type="submit" class="btn">Сохранить</button>
  </form>`
}

$modal.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const id = e.target.dataset.id;

  const updateBook = library.get().map(book => {
    if (book.id.toString() === id) {
      return { ...book, title: formData.get('title'), text: formData.get('text') }
    }
    return book
  })

  library.set(updateBook);
  $modal.classList.remove('modal--visible');

  const cards = document.querySelectorAll(`[data-id='${id}'`);
  [...cards].forEach(card => {
    if (card.tagName === 'LI') {
      const title = formData.get('title') || 'book`s title'
      card.querySelector('.card-book__name').innerText = title;
    }

  })


})

function readBookModal(book) {
  return `
    <h2 class="modal__title-book">${book.title}</h2>
    <p class="modal__text-book">${book.text}</p>`
}


$modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    $modal.classList.remove('modal--visible')
  }
})

const list = document.querySelectorAll('.list-book__list');
[...list].forEach(element => {
  element.addEventListener('click', e => {
    const { target } = e;
    if (target.tagName !== 'BUTTON') return;
    const id = target.closest('.card-book').dataset.id;

    if (target.classList.contains('card-book__btn-edit')) {
      $modal.classList.add('modal--visible');
      let book = library.get().find(book => book.id.toString() === id);
      $modalContent.innerHTML = editBookModal(book);
    }

    if (target.classList.contains('card-book__btn-status')) {
      let updateLibrary = library.get().map(book => {
        return (book.id.toString() === id) ? { ...book, status: !book.status } : book
      });
      library.set(updateLibrary)
      const card = document.querySelectorAll(`[data-id='${id}'`);
      [...card].forEach(element => {
        element.classList.toggle('card-book--read')
      });
    }

    if (target.classList.contains('card-book__btn-read')) {
      $modal.classList.add('modal--visible');
      let book = library.get().find(book => book.id.toString() === id);
      $modalContent.innerHTML = readBookModal(book);
    }

    if (target.classList.contains('card-book__btn-delete')) {
      library.set(library.get().filter(book => book.id.toString() !== id));
      const card = document.querySelectorAll(`[data-id='${id}'`);
      [...card].forEach(element => {
        element.remove();
      });
    }
  })
})