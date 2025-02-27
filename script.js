const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
} 

const submitBook = document.getElementById('submitBookButton');
submitBook.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
});

libraryGrid = document.querySelector(".libraryGrid");

for (let i = 0; i < myLibrary.length; i++) {
    let bookTitle = document.createElement("h3");
    bookTitle.textContent = myLibrary[i].title;
    let bookAuthor = document.createElement("h4");
    bookAuthor.textContent = myLibrary[i].author;
    let bookPages = document.createElement("p");
    bookPages.textContent = myLibrary[i].pages;
    let bookRead = document.createElement("p");
    bookRead.textContent = myLibrary[i].read;

}