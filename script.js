<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3a8d677 (todo ver 3)
>>>>>>> 67625e1 (todo ver 3)
//====Welcome=====
let name = document.getElementById("name");

const ul = document.getElementById("ul");

//====Local Storage=====

//=====function todo=====
function inputLength() {
  return input.value.length;
}


function newInputUser() {
  let button = document.getElementById("button");
  let input = document.getElementById("input");
  let li = "<li><span onclick='done(this)'>" + input.value + "</span>" + "<span onclick='remove(this)'>" + " [x]" + "</span>" + "</li>";
  ul.insertAdjacentHTML("afterbegin", li);

  input.value = "";
}

function addTodo() {
  if (inputLength() > 0) {
    newInputUser();
  }
}

function remove(el) {
  el.parentElement.remove();
}

function done(el) {
  el.classList.toggle("done");
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
//introduction
function nameUser() {}

const ul = document.getElementById("ul"); //kenapa harus const
const input = document.getElementById("input"); //kenapa harus const
let todo = []; //kenapa harus buat array

//function untuk membuat list item
function createTodo() {
  ul.innerHTML = ""; //untuk merubah input menjadi string
  todo.forEach((value, index) => {
    let li = "<li>" + "<span onclick='lineThrought(this)'>" + value + "</span>" + "\n" + "<button onclick='deleteTodo()'>" + "Delete" + "</button>" + "</li>";
    ul.insertAdjacentHTML("afterbegin", li);
  });
}

//function untuk menampilkan hasil membuat list ke browser
function addTodo() {
  let todos = input.value;
  if (todos === "") return;
  todo.push(todos);
  input.value = "";
  createTodo();
  saveTodo();
}

//function untuk menghapus item yang sudah ditambahkan
function deleteTodo(index) {
  todo.splice(index, 1);
  createTodo();
  saveTodo();
}

//function untuk menggaris bawah
function lineThrought(el) {
  el.classList.toggle("done");
  saveTodo();
}

//menyimpan list ke local storage
function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

//function untuk memunculkan item saat baru diakses
function loadTodos() {
  const savedTodos = localStorage.getItem("todo");
  if (savedTodos !== null) {
    todo = JSON.parse(savedTodos);
    createTodo();
  }
}

loadTodos();
>>>>>>> 517a2d5 (todolist-ver3)
>>>>>>> 3a8d677 (todo ver 3)
>>>>>>> 67625e1 (todo ver 3)
