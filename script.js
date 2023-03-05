//selector dan variabel
var tombol = document.getElementById("tombol_Enter");
var input = document.getElementById("input_Pengguna");
var ul = document.querySelector("ul");

//fungsi agar saat input kosong user tidak dapat meng-enter
function inputLength() {
  return input.value.length;
}

//funsi untuk menampilkan input
function createListElement() {
  var li = document.createElement("li");
  var span1 = document.createElement("span");
  
  span1.setAttribute("onclick", "togle(this)");
  span1.appendChild(document.createTextNode(input.value));
  
  ul.appendChild(li);
  li.appendChild(span1);

  var span2 = document.createElement("span");
  span2.appendChild(document.createTextNode(" " + "[Delete]"));
  span2.setAttribute("onclick", "remove(this)");
  li.appendChild(span2);
  input.value = "";
}

//fungsi agar input yang ditampilkan bisa dihapus
function remove(el) {
  el.parentElement.remove();
}

//fungsi untuk enter lewat tombol
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

//fungsi untuk enter lewat keyboard
function addListAfterKeypress() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//fungsi untuk menggaris bawahi tugas yang sudah selesai
function togle(el) {
  el.classList.toggle("done");
}

//event untuk memanggil fungsi enter lewat tombol
tombol.addEventListener("click", addListAfterClick);

//event untuk memanggil fungsi enter lewat keyboard
input.addEventListener("keypress", addListAfterKeypress);
