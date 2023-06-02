const libraryContainer = document.querySelector('.libraryContainer');
const addBookButton = document.querySelector('.addBook');
const addForm = document.querySelector('.addForm');
const formContainer = document.querySelector('.formContainer');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    clearBooks();
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('bookCard');

        card.textContent = `Title: ${myLibrary[i].title} 
                            Author: ${myLibrary[i].author} 
                            Pages: ${myLibrary[i].pages}
                            Read: ${myLibrary[i].read}`;
                            
        libraryContainer.appendChild(card);
    }
}

function clearBooks() {
    let bookCards = document.querySelectorAll('.bookCard');

    bookCards.forEach((bookCard) => {
        libraryContainer.removeChild(bookCard);
    });
}

addBookButton.addEventListener('click', () => {
    formContainer.classList.toggle('display');
})

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('input[name="read"]:checked').value;

    addBookToLibrary(title, author, pages, read);
})