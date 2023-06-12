let myDiv = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingTxt = document.createTextNode("Product Title");
let myParagraphTxt = document.createTextNode("Product Description");

//* Add Heading Text
myHeading.appendChild(myHeadingTxt);

//* Add Heading To Div
myDiv.appendChild(myHeading);

//* Add Paragraph Text
myParagraph.appendChild(myParagraphTxt);

//* Add Paragraph To Div
myDiv.appendChild(myParagraph);

myDiv.className = "Product";

document.body.appendChild(myDiv);
