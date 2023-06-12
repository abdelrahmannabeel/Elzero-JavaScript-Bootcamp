let yourName = document.getElementById("name");
let yourAge = document.getElementById("age");
let yourSelect = document.getElementById("select");

yourName.value = localStorage.getItem("name") || "";
yourAge.value = localStorage.getItem("age") || "";
yourSelect.value = localStorage.getItem("select") || yourSelect.options[0].value;

yourName.addEventListener("input", (e) => {
  localStorage.setItem("name", yourName.value)
});
yourAge.addEventListener("input", (e) => {
  localStorage.setItem("age", yourAge.value)
});
yourSelect.addEventListener("input", (e) => {
  localStorage.setItem("select", yourSelect.value)
});