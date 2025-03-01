const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.new = true;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
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
            bookCard.id = myLibrary[i].title + "-card";
            let bookTitle = document.createElement("h3");
            bookTitle.textContent = myLibrary[i].title;
            let bookAuthor = document.createElement("h4");
            bookAuthor.textContent = myLibrary[i].author;
            let bookPages = document.createElement("p");
            bookPages.textContent = myLibrary[i].pages;
            let bookRead = document.createElement("p");
            bookRead.textContent = myLibrary[i].read;

            libraryGrid.appendChild(bookCard);
            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookRead);

            myLibrary[i].new = false;
        }
    }
}