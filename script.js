const myLibrary = [];

function Book(name,author,pages){
    this.author=author;
    this.pages=pages;
    this.name=name;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

Book.prototype.showBook=function (){
    return (`${this.name} by ${this.author} contains ${this.pages}.`);
}

const btn = document.querySelector(".add");
const modal = document.querySelector('[data-modal]')

btn.addEventListener('click',(e)=>{
    modal.show();
})