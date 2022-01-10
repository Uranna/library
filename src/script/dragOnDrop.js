import { library } from "./library";
import { $areaAllBook, $areaFavoriteBook } from "./appendCard";

const $book = document.querySelectorAll('.list-book__list');
const $zone = document.querySelectorAll('.list-book__drop');

let dragger;

[...$book].forEach(item => {
  item.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'LI') {
      dragger = e.target;
    }
  })
});

[...$zone].forEach(item => {
  item.addEventListener('dragover', function (e) {
    e.preventDefault();
  })
  item.addEventListener('dragenter', function (e) {
    e.target.classList.add('list-book__drop--active');
  })
  item.addEventListener('dragleave', function (e) {
    e.target.classList.remove('list-book__drop--active');
  })

  item.addEventListener('drop', function (e) {
    e.target.classList.remove('list-book__drop--active');
    const area = (e.target.id === 'favorite') ? $areaFavoriteBook : $areaAllBook;

    let newBooks = [...library.get()];
    if (dragger.closest('.list-book') !== area) {
      newBooks = newBooks.map(item => {
        if (item.id == dragger.dataset.id) {
          return { ...item, favorite: !item.favorite }
        }
        return item
      })
      library.set(newBooks);
    }
    area.querySelector('.list-book__list').append(dragger);
  })
})
