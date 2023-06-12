document.body.style.cssText =
  "margin:0;background-color:#ffffff;font-family:Tahoma,Arial;";

//================= header =================
let header = document.createElement("header");
header.className = "website-header";

header.style.cssText =
  "display:flex;justify-content:space-between;align-items:center;padding:20px;";

document.body.append(header);
//================= logo =================
let logo = document.createElement("div");
let logoTxt = document.createTextNode("AbdelRahman");
logo.title = "website logo";
logo.append(logoTxt);
header.append(logo);
logo.style.cssText = "font-weight:bold;font-size:26px;color:#23a96e";

//================= nav =================
let menu = document.createElement("ul");
menu.className = "menu";
menu.style.cssText = "display:flex;list-style:none;padding:0;margin:0;";
let liTxt = ["Home", "About", "Services", "Contact"];

for (let i = 0; i < liTxt.length; i++) {
  let navLi = document.createElement("li");
  navLi.innerText = liTxt[i];
  navLi.style.cssText = "margin:0;padding:0 15px;cursor:pointer;";
  menu.append(navLi);
}

header.append(menu);
//================= Product =================
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display: flex;padding: 20px;flex-wrap:wrap;justify-content: center;gap: 20px;min-height: calc(100vh - 142px);box-sizing: border-box;background-color:#ececec;";
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.style.cssText =
    "  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);padding:20px;background-color:white;border: 1px solid #dddddd;width:calc((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:#888888;border-radius: 6px;";
  let num = document.createElement("span");
  num.style.cssText =
    "font-size: 40px;color: black;font-weight: normal;display: block;margin-top: 10px;margin-bottom: 10px;";
  product.className = "product";
  product.innerText = "Product";
  num.innerText = `${i + 1}`;
  product.prepend(num);
  content.append(product);
}
document.body.append(content);
//================= footer =================
let footer = document.createElement("footer");
footer.className = "footer";
footer.innerText = "Copyright 2023";
footer.style.cssText =
  "background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255);";

document.body.append(footer);

