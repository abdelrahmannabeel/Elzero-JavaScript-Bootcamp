function popup() {
  let popupDiv = document.createElement("div");
  popupDiv.innerText = "Welcome";
  popupDiv.style.cssText =
    "position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center;background-color: #ddd;padding: 30px 100px;font-size: 30px;border-radius: 10px;";

  let popupSpan = document.createElement("span");
  let popupSpanTxt = document.createTextNode("Welcome To Elzero Web School");
  popupSpan.style.cssText = "display:block;font-size: 20px;padding-top: 5px;";
  popupSpan.append(popupSpanTxt);
  popupDiv.append(popupSpan);

  let popupBtn = document.createElement("button");
  popupBtn.innerText = "X";
  popupBtn.style.cssText =
    "width: 25px;height: 25px;padding: 3px;background-color: red;position: absolute;top: 0;right: -25px;font-size: 15px;transform: translate(-50%, -50%);color: white;border: none;outline: none;cursor: pointer;border-radius: 10px;";
  popupDiv.append(popupBtn);

  document.body.append(popupDiv);
  popupBtn.onclick = () => popupDiv.remove();
}
setTimeout(popup, 5000);