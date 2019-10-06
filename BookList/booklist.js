//Book Class: Make new books

class book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

  }
}

//UI Class: handles UI tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Harry Potter",
        author: "Fiction",
        isbn: "1000"
      },
      {
        title: "Robin Hood",
        author: "Historical",
        isbn: "2000"
      }
    ];

    const books = StoredBooks;

    // function addListToUI() {
    //   for (var i = 0; i < StoredBooks.length; i++) {
    //     UI.addBooksToList(StoredBooks[i])
    //   }
    // }

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td> ${book.title} </td><td> ${book.author} </td><td> ${book.isbn} </td><td><a href="#" class="btn btn-danger btn-sm">X</a></td>` ;
    list.appendChild(row);
  }

  static clearFields() {

    document.getElementById("book-name").innerHTML = "asdasds";
    document.getElementById("book-author").innerHTML = "";
    document.getElementById("book-isbn").innerHTML = "";

      // document.getElementById("book-name").placeholder = "ABC";
      // document.getElementById("book-author").placeholder = "Fiction";
      // document.getElementById("book-isbn").placeholder = "00000";
    }

}

// Store Class: store booklist

// Event: display booklist

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: add a book

// document.getElementById("submit-button").addEventListener("click", addBook());

window.onload = function() {
document.getElementById("submit-button").addEventListener("click", function(){

  const title = document.getElementById("book-name").value;
  const author = document.getElementById("book-author").value;
  const isbn = document.getElementById("book-isbn").value;

  const book1 = new book(title, author, isbn);

  UI.addBookToList(book1);

  UI.clearFields();



})
}

// Event: delete a book
