import { $areaAllBook, appendCard, createCard } from "./appendCard";
import { library } from "./library";

const url = 'https://apiinterns.osora.ru/'
const form = document.querySelector('form');

const method = document.getElementsByName('method');
let select = [...method].find(item => item.checked).id;

const textMessage = document.querySelector('.form__select-file-text');


function createBook(title, text) {
  if (title && text) {
    const newBook = {
      id: Date.now(),
      status: false,
      favorite: false,
      title: title,
      text: text
    }
    library.set([...library.get(), newBook]);
    appendCard(createCard(newBook), $areaAllBook);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (select === 'select-book') {
    const files = document.querySelector('[type=file]').files[0]
    const formData = new FormData()
    formData.append('login', 'login')
    formData.append('file', files)

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((json) => createBook(json.title, json.text))
  } else {
    const formData = new FormData(form)
    createBook(formData.get('title'), formData.get('text'))
  }
  form.reset();
  textMessage.innerText = '';
  form.querySelector(`#${select}`).checked = true;
})

form.classList.add(`form--${select}`);

[...method].forEach(element => {
  element.addEventListener('change', (e) => {
    form.classList.remove(`form--${select}`)
    select = e.target.id;
    form.classList.add(`form--${select}`)
  })
});

document.querySelector('.form__input-file').addEventListener('change', (e) => {
  const files = e.target.files[0];

  if (files.type == 'text/plain') {
    textMessage.innerText = `Выбран файл: ${files.name}`;
    if (textMessage.classList.contains('form__select-file-text--error')) {
      textMessage.classList.remove('form__select-file-text--error');
    }
  } else {
    textMessage.innerText = `Выбранный файл должен быть формата txt`;
    textMessage.classList.add('form__select-file-text--error');
  }
})

const $box = document.querySelectorAll('.list-book');
[...$box].forEach(item => {
  item.addEventListener('click', function (e) {
    e.target.classList.toggle('list-book--visible');
  }, { capture: false })
})
