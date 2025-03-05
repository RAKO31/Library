const myLibrary = [];

function Book(name,author,pages){
    this.author=author;
    this.pages=pages;
    this.name=name;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}


const bookList = document.querySelector(".bookList");
const open = document.querySelector("[data-open-modal]");
const modal = document.querySelector('dialog');
const submit = document.querySelector(".add");
const close = document.querySelector("[data-close-modal]");

open.addEventListener("click",(e)=>{
    modal.showModal();
});

function createCard(book) {
    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add("bookDisplay");

    bookDisplay.innerHTML = `
        <p>NAME: ${book.name}</p>
        <p>AUTHOR: ${book.author}</p>
        <p>PAGES: ${book.pages}</p>
    `;

    const removeCard = document.createElement("button");
    removeCard.textContent = "Remove";
    removeCard.classList.add("removeBtn");
    bookDisplay.appendChild(removeCard);

    removeCard.addEventListener("click", () => {
        bookList.removeChild(bookDisplay);
    });

    bookList.appendChild(bookDisplay);
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    const newBook = new Book(name,author,pages);
    addBookToLibrary(newBook);
    createCard(newBook);
    document.getElementById("bookname").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
})

close.addEventListener("click",(e)=>{
    modal.close();
});
