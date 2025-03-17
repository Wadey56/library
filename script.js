const myLibrary = [
    new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true, 0),
    new Book("What If?", "Randall Munroe", 320, true, 1),
    new Book("Delicious in Dungeon, Vol. 1", "Ryoko Kui", 192, true, 2)
  ];

let counter = 0;

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.new = true;
    this.id = id
}

Book.prototype.updateRead = function () {
    this.read = !this.read;
    return this.read
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
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let validation = document.querySelectorAll(".validation");
    
    if (title.value == "") {
        validation.forEach(validation => {
            validation.style.display = "block";
        })
        event.preventDefault();
        return;
    } else if (author.value == "") {
        validation.forEach(validation => {
            validation.style.display = "block";
        })
        event.preventDefault();
        return;
    }

    addBookToLibrary();
    displayLibrary();
    validation.forEach(validation => {
        validation.style.display = "none";
    })
    bookModal.querySelector("#form").reset();
});

libraryGrid = document.querySelector(".library-grid");

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].new == true) {
            let bookCard = document.createElement("div");
            bookCard.id = myLibrary[i].id + "-book-card";
            bookCard.classList = "book-card"
            let bookTitle = document.createElement("h3");
            bookTitle.textContent = "Title: " + myLibrary[i].title;
            let bookAuthor = document.createElement("h4");
            bookAuthor.textContent = "Author: " + myLibrary[i].author;
            let bookPages = document.createElement("p");
            bookPages.textContent = "Pages: " + myLibrary[i].pages;
            let bookRead = document.createElement("p");
            bookRead.textContent = "Read?: " + myLibrary[i].read;
            bookRead.classList = "book-read";
            let removeBookButton = document.createElement("button");
            removeBookButton.textContent = "Remove";
            removeBookButton.id = myLibrary[i].id + "-remove";
            removeBookButton.classList = "remove-book-button card-button";
            let readBookButton = document.createElement("button");
            readBookButton.textContent = "Read";
            readBookButton.id = myLibrary[i].id + "-read";
            readBookButton.classList = "read-book-button card-button";
            let buttonGroup = document.createElement("div");
            buttonGroup.classList = "button-group";

            libraryGrid.appendChild(bookCard);
            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookRead);
            bookCard.appendChild(buttonGroup);
            buttonGroup.appendChild(readBookButton);
            buttonGroup.appendChild(removeBookButton);

            myLibrary[i].new = false;
        }
    }
}

function findBookIndex(id) {
    return myLibrary.findIndex(book => book.id == id);
}

libraryGrid.addEventListener("click", (event) => {
    const bookID = event.target.id.replace("-remove", "").replace("-read", ""); // gets the id of the book w/o losing unique ids

    if (event.target.classList.contains("remove-book-button")) {
      myLibrary.splice(findBookIndex(bookID), 1);
      removeBookDisplay(bookID);
    } else if (event.target.classList.contains("read-book-button")) {
      myLibrary[findBookIndex(bookID)].updateRead();
      document.getElementById(bookID + "-book-card").querySelector(".book-read").textContent = "Read?: " + myLibrary[findBookIndex(bookID)].read;
    }
  });

function removeBookDisplay(id) {
    document.getElementById(id + "-book-card").remove();
}

displayLibrary();