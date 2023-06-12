let typeOfElement = document.getElementsByClassName("input");
let eleNum = document.querySelector('[type="number"]');
let eleTxt = document.querySelector('[type="text"]');
let seleType = document.getElementsByName("type");
let submitBtn = document.getElementsByName("create");
let results = document.querySelector(".results");

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  results.innerHTML = "";

  for (let i = 0; i < eleNum.value; i++) {
    let txt = document.createTextNode(`${eleTxt.value} - ${i + 1}`);
    let newEle = document.createElement(seleType.value);
    if (typeOfElement.value !== "") {
      newEle.setAttribute("title", "Element");
      newEle.setAttribute("class", "box");
      newEle.setAttribute("id", `id-${i + 1}`);
      newEle.appendChild(txt);
    }
    
    results.appendChild(newEle);
  }
};

//    results.appendChild(finalElement);
//  }
//}
