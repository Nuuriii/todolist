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
