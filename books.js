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
        let titleDiv = document.createElement('div');
        let authorDiv = document.createElement('div');
        let pagesDiv = document.createElement('div');
        let readDiv = document.createElement('div');
        let deleteButton = document.createElement('button');
        
        card.classList.add('bookCard');
        deleteButton.classList.add(i);
        deleteButton.textContent = "Delete";

        titleDiv.textContent = `Title: ${myLibrary[i].title}`;
        authorDiv.textContent = `Author: ${myLibrary[i].author}`; 
        pagesDiv.textContent = `Pages: ${myLibrary[i].pages}`;
        readDiv.textContent = `Read: ${myLibrary[i].read}`;
                            
        libraryContainer.appendChild(card);
        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(pagesDiv);
        card.appendChild(readDiv);
        card.appendChild(deleteButton);
    }
}

function clearBooks() {
    let bookCards = document.querySelectorAll('.bookCard');

    bookCards.forEach((bookCard) => {
        libraryContainer.removeChild(bookCard);
    });
}

function toggleFormDisplay() {
    formContainer.classList.toggle('display');
}

addBookButton.addEventListener('click', () => {
    toggleFormDisplay();
})

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('input[name="read"]:checked').value;

    addBookToLibrary(title, author, pages, read);
    toggleFormDisplay();
})