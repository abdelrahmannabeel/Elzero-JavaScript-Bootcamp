let Div = document.createElement("div");
Div.innerText = "10";
Div.style.cssText =
  "width:200px;hight:100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center;background-color: #ddd;padding: 30px;font-size: 30px;border-radius: 10px;";
document.body.append(Div);

function countDown() {
  Div.innerText -= 1;
  if (Div.innerText === "5") {
    window.open("https://elzero.org/", "_blank", "width=500,height=500");
  }
  if (Div.innerText === "0") {
    clearInterval(counter);
  }
}
let counter = setInterval(countDown, 1000);
