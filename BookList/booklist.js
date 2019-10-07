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
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td> ${book.title} </td><td> ${book.author} </td><td> ${book.isbn} </td><td><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>` ;
    list.appendChild(row);
  }

  static deleteBook(targetRow) {
    targetRow.parentElement.parentElement.remove();
  }

  // Clears fields after adding book, resets outlines
  static clearFields() {
    document.getElementById("book-name").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-isbn").value = "";

    document.getElementById("book-name").style.outline="1px solid black";
    document.getElementById("book-author").style.outline="1px solid black";
    document.getElementById("book-isbn").style.outline="1px solid black";
    }
}

// Store Class: store booklist

class Store {
  static getBooks() {

  }

  static addBook() {

  }

  static removeBook() {
    
  }
}

// Event: display booklist

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: add a book

window.onload = function() {
  var btnSubmit = document.getElementById("submit-button");
  btnSubmit.onclick = submitButton;

  addDeleteAction();
  }

// Adds delete row functionality to all delete buttons
function addDeleteAction() {
    var btnDelete = document.getElementsByClassName("btn-delete");
    for (var i = 0; i < btnDelete.length; i++) {
      btnDelete[i].onclick = deleteRow;
    }
}

function deleteRow() {
  UI.deleteBook(event.target);
}

// Checks each fied for validations, alerts if not valid, finally adds book
function submitButton() {
  const fieldList = document.getElementsByClassName("book-fields");
  var incompleteField = false;
  var completefields = true;

  for (var i = 0; i < fieldList.length; i++) {
    validateFields(fieldList[i]);

    if (fieldList[i].value=="") {
      if (!incompleteField) {
        alert("Check fields!")
        incompleteField = true;
        completefields = false;
      }
    }
  }

  if (completefields) {
    addBook();
  }
}

// Validates a field, consumes field parameter
function validateFields(field) {
  if (field.value=="") {
    field.style.outline="1px solid red";
  } else {
    field.style.outline="1px solid black";
  }
}

// Create new book, calls UI to add book to display, calls clear fields
function addBook() {
  const title = document.getElementById("book-name").value;
  const author = document.getElementById("book-author").value;
  const isbn = document.getElementById("book-isbn").value;
  const newBook = new book(title, author, isbn);

  UI.addBookToList(newBook);
  UI.clearFields();
}

// Deletes a row of book



// Event: delete a book
