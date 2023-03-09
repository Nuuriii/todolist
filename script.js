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
