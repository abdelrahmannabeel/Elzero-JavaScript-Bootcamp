//! capturing javascript
//Event capturing, also known as event capturing phase or capture phase, is one of the phases in the event propagation model in JavaScript. In the event propagation model, events triggered on a DOM element can propagate or "bubble" up through the DOM tree, or they can capture or "trickle" down through the DOM tree. Event capturing occurs during the capture phase, before the event reaches the target element.

//In JavaScript, you can use the addEventListener method to capture events during the capture phase. The addEventListener method allows you to specify a third parameter, a boolean value, which indicates whether the event should be captured during the capture phase. If you set this value to true, the event will be captured during the capture phase, and if you set it to false (the default), the event will be captured during the bubbling phase.

//? Here's an example of using event capturing in JavaScript:

document.getElementById("parentElement").addEventListener(
  "click",
  function (event) {
    console.log("Event captured during capture phase:", event.target.tagName);
  },
  true
);

document
  .getElementById("childElement")
  .addEventListener("click", function (event) {
    console.log("Event captured during bubbling phase:", event.target.tagName);
  });

document.getElementById("parentElement").addEventListener(
  "click",
  function (event) {
    console.log("Event captured during capture phase:", event.target.tagName);
  },
  true
);

document
  .getElementById("childElement")
  .addEventListener("click", function (event) {
    console.log("Event captured during bubbling phase:", event.target.tagName);
  });

//In this example, we have a parent element with an ID of "parentElement" and a child element with an ID of "childElement". When a click event occurs on the child element, the event will first be captured during the capture phase by the event listener on the parent element, and then it will bubble up to the parent element and trigger the event listener on the child element during the bubbling phase. By setting the third parameter of addEventListener to true on the parent element, we are capturing the event during the capture phase, and the corresponding message will be logged in the console when the event occurs.
