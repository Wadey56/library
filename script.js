const myLibrary = [];
let counter = 0;

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.new = true;
    this.id = id
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const id = counter++
    const book = new Book(title, author, pages, read, id);
    myLibrary.push(book);
} 

const addBook = document.getElementById("add-book");
const bookModal = document.getElementById("add-book-modal");
addBook.addEventListener("click", () => {
    bookModal.showModal();
})

const submitBook = document.getElementById("submit-book");
submitBook.addEventListener("click", (event) => {
    // event.preventDefault(); this is no longer required due to method="dialog" on the form
    addBookToLibrary();
    displayLibrary();
    bookModal.querySelector("#form").reset();
});

libraryGrid = document.querySelector(".library-grid");

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].new == true) {
            let bookCard = document.createElement("div");
            let bookTitle = document.createElement("h3");
            bookTitle.textContent = myLibrary[i].title;
            let bookAuthor = document.createElement("h4");
            bookAuthor.textContent = myLibrary[i].author;
            let bookPages = document.createElement("p");
            bookPages.textContent = myLibrary[i].pages;
            let bookRead = document.createElement("p");
            bookRead.textContent = myLibrary[i].read;
            let removeBook = document.createElement("button");
            removeBook.textContent = "Remove";

            libraryGrid.appendChild(bookCard);
            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookRead);
            bookCard.appendChild(removeBook);

            myLibrary[i].new = false;
        }
    }
}

function findBookIndex(title) {
    return myLibrary.findIndex(book => book.title == title);
}

