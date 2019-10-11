//Book Class: Make new books

class book {
  constructor(title, author, isbn, dateAdded) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.dateAdded = dateAdded;

  }
}

//UI Class: handles UI tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Harry Potter",
        author: "Fiction",
        isbn: "1000",
        dateAdded: "01/01/1900, 2:35:56 AM"
      },
      {
        title: "Robin Hood",
        author: "Historical",
        isbn: "2000",
        dateAdded: "01/01/1900, 2:35:56 AM"
      }
    ];

    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td id="x1" class="c1"> ${book.title} </td><td id="x2" class="c2"> ${book.author} </td><td id="x3" class="c3"> ${book.isbn} </td><td id="x4" class="c4"> ${book.dateAdded} </td><td id="x5" class="c5"><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>` ;
    list.appendChild(row);
  }

  static deleteBook(targetRow) {
    targetRow.parentElement.parentElement.remove();
  }

  static displaySearchBooks(searchText) {
    const rowList = document.getElementById("book-list").children;

    for (var i = 0; i < rowList.length; i++) {
      const rowListChildren = rowList[i].children;
      var matched = false;

      for (var j = 0; j < 3; j++) {

        var col = rowListChildren[j];
        if (!matched && col.innerHTML.toUpperCase().search(searchText.toUpperCase()) >= 0) {
          // console.log(col.innerHTML.toUpperCase());
          col.parentElement.style.display = "";
          break;
        } else {
          col.parentElement.style.display = "none";
        }
      }
    }
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

  static hideColumn(column) {
    var columnId = column.parentElement.id;
    var rowList = document.getElementById("book-list").children;


    // document.getElementsByClassName(columnClass).children.style.width = "100px";
    for (var i = 0; i < rowList.length; i++) {
      rowList[i].children[columnId.charAt(1)-1].innerHTML = "";
      // rowList[i].children[columnId-1].style.color = "red";
    }
    column.innerHTML = "&#x2B07;";
  }
}

// Event: display booklist

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: add a book

window.onload = function() {
  var btnSubmit = document.getElementById("submit-button");
  btnSubmit.onclick = submitButton;

  var tableRow = document.getElementsByTagName("tr");
  for (var i = 0; i < tableRow.length; i++) {
    tableRow[i].onmouseover = hoverName;
    tableRow[i].onmouseout = hoverNameDisable;
  }

  var filterInput = document.getElementById("book-search");
  filterInput.addEventListener("keyup", filterNames);

  addDeleteAction();
  addColumHideAction();

  // var xbtn = document.getElementById("x");
  // x.onclick = test();
}

function filterNames() {
  var searchText = document.getElementById("book-search").value.trim();
  UI.displaySearchBooks(searchText);
}

function test() {
  var d = new Date();
  var n = d.toLocaleString();
  alert(n + "sdsad");
}

function hoverName() {
  var descBox = document.getElementById("card-desc");
  var x = event.clientX;
  var y = event.clientY;

  descBox.style.position = "absolute";
  descBox.style.top = y + 'px';
  descBox.style.left = x + 'px';

  descBox.innerHTML = event.target.innerHTML;
}

function hoverNameDisable() {
  var descBox = document.getElementById("card-desc");
  descBox.style.display = "none";
}


// Adds delete row functionality to all delete buttons
function addDeleteAction() {
    var btnDelete = document.getElementsByClassName("btn-delete");
    for (var i = 0; i < btnDelete.length; i++) {
      btnDelete[i].onclick = deleteRow;
    }
}

// Adds hide column functionality
function addColumHideAction() {
    var columnHide = document.getElementsByClassName("column-hide");
    for (var i = 0; i < columnHide.length; i++) {
      columnHide[i].onclick = toggleColumn;
    }
}

function toggleColumn() {
  UI.hideColumn(event.target);
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
  const dateAdded = new Date().toLocaleString();
  const newBook = new book(title, author, isbn, dateAdded);

  UI.addBookToList(newBook);
  UI.clearFields();
}

// Deletes a row of book



// Event: delete a book
