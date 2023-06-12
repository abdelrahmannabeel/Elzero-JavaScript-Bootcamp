//! bubbling javascript
//In JavaScript, "bubbling" refers to the propagation of an event through the DOM (Document Object Model) tree from the target element to its ancestors, triggering event listeners on each ancestor along the way. This allows for event handling at multiple levels of the DOM hierarchy.

//When an event, such as a click or a keypress, occurs on an element, it triggers an event handler associated with that element. After that, the event continues to propagate up the DOM tree, triggering event handlers on each ancestor element, unless an ancestor element explicitly stops the propagation using the event.stopPropagation() method.

//This bubbling behavior can be both useful and challenging to work with, depending on the desired behavior of your application. It allows for event delegation, where you can attach a single event listener to a common ancestor element, and handle events for multiple descendant elements efficiently. However, it can also cause unintended triggering of event handlers on ancestor elements if not properly handled.

//To handle bubbling in JavaScript, you can use the event object that is automatically passed to event handlers. The event object has a method called stopPropagation() that can be called to prevent further propagation of the event up the DOM tree.

//? For example:
document
  .getElementById("childElement")
  .addEventListener("click", function (event) {
    console.log("Child element clicked!");
    // Stop event propagation
    event.stopPropagation();
  });

document.getElementById("parentElement").addEventListener("click", function () {
  console.log("Parent element clicked!");
});

//In the above example, if the child element is clicked, its event handler will be triggered first, and then the event will not propagate to the parent element's event handler due to event.stopPropagation() being called. If event.stopPropagation() is not called, both the child element and parent element event handlers will be triggered in a bubbling fashion.

//Note that bubbling is the default behavior in most modern browsers, but it can be modified using event options or by manually capturing events instead of bubbling them.




