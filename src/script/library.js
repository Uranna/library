class Library {
  constructor(books) {
    this.books = books;
  }
  get() {
    return [...this.books].sort((a, b) => (a.status) ? -1 : 1)
  }
  set(newValue) {
    this.books = [...newValue];
    localStorage.setItem('books', JSON.stringify(this.books))
  }

}

// const testBook = [
//   { id: 1, status: false, favorite: false, title: 'Book 1', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' },
//   { id: 2, status: true, favorite: true, title: 'Book 2', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' },
//   { id: 3, status: false, favorite: true, title: 'Book 3', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' },
//   { id: 4, status: false, favorite: false, title: 'Book 4', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' }
// ];
// localStorage.setItem('books', JSON.stringify(testBook));

const data = JSON.parse(localStorage.getItem('books')) || [];
export let library = new Library(data);

window.library = library