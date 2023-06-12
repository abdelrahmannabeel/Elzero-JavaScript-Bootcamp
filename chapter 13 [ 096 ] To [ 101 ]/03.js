let div = document.querySelector(".our-element");

let paragraph = document.querySelector("p");
paragraph.remove();

let start = document.createElement("div");
let startText = document.createTextNode("Start");
start.className = "start";
start.title = "Start Element";
start.setAttribute("data-value", "Start");
start.appendChild(startText);

let end = document.createElement("div");
let endText = document.createTextNode("End");
end.className = "end";
end.title = "End Element";
end.setAttribute("data-value", "End");
end.appendChild(endText);

div.before(start);
div.after(end);
console.log(start);

//or
//let paragraphs = document.getElementsByTagName('p'); // Get all <p> elements
//for (var i = paragraphs.length - 1; i >= 0; i--) {
//  paragraphs[i].remove(); // Remove each <p> element from the DOM
//}
//The getElementsByTagName() method returns a collection of elements, not a single element. Therefore, you cannot directly call the remove() method on the collection itself. Instead, you need to iterate through the collection and call the remove() method on each individual element.

