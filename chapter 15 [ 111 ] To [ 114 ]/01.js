let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");
let text = document.querySelector("#text");

font.value = window.localStorage.getItem("font") || font.options[0].value;
color.value = window.localStorage.getItem("color") || color.options[0].value;
size.value = window.localStorage.getItem("size") || size.options[0].value;

document.body.style.backgroundColor = color.value;

upData();

font.onchange = function () {
  window.localStorage.font = font.value;
  upData();
};
color.onchange = function () {
  window.localStorage.color = color.value;
  upData();
};
size.onchange = function () {

  window.localStorage.size = size.value;
  upData();
};

//* Updates the text with the current font, color, and size.
function upData() {
  //Change Font Family
  text.style.fontFamily = font.value;

  //Change Color
  text.style.color = color.value;
  document.body.style.backgroundColor = color.value;

  //Change Font Size
  text.style.fontSize = size.value;
}

//window.localStorage.clear();
