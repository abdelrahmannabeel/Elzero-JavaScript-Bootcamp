// Declaring Variables
let classInput = document.querySelectorAll("input");
let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let resultDiv = document.querySelector(".classes-list div");
const current = document.querySelector("div[title=Current]");

function classList(ele, result) {
  if (ele.classList.value === "") {
    result.innerHTML = "No Classes To Show";
  } else {
    ele.classList.value
      .split(" ")
      .sort()
      .map((c) => {
        let myCla = document.createElement("span");
        myCla.innerHTML = c;
        result.append(myCla);
      });
  }
}

addClass.onblur = () => {
  let classAdd = addClass.value.trim().toLowerCase().split(" ").sort();
  for (let i = 0; i < classAdd.length; i++) {
    current.classList.add(classAdd[i]);
  }
  addClass.value = "";
  resultDiv.innerHTML = "";
  classList(current, resultDiv);
};

removeClass.onblur = () => {
  let classRemove = removeClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < classRemove.length; i++) {
    current.classList.remove(classRemove[i]);
  }
  removeClass.value = "";
  resultDiv.innerHTML = "";
  classList(current, resultDiv);
};
