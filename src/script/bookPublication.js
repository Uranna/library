import { library } from "./library";
import { $areaAllBook, $areaFavoriteBook, createCard, appendCard } from './appendCard';

$areaAllBook.querySelector('.list-book__list').innerHTML = '';
$areaFavoriteBook.querySelector('.list-book__list').innerHTML = '';

library.get().forEach(book => {
  const html = createCard(book);
  if (book.favorite) {
    appendCard(html, $areaFavoriteBook);
  }
  appendCard(html, $areaAllBook);
})
