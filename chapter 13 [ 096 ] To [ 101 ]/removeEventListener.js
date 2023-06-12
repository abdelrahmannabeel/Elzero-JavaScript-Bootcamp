//In JavaScript, the removeEventListener method is used to remove an event listener that was previously added using the addEventListener method. It takes the same arguments as addEventListener, which are the event type, the event listener function, and an optional options object.

//The syntax for removeEventListener is as follows:

target.removeEventListener(eventType, eventListener, options);

//? Where:

//target: The DOM element from which the event listener should be removed.
//eventType: A string that specifies the type of event (e.g., 'click', 'keydown', etc.).
//eventListener: The function that was previously added as the event listener using addEventListener.
//options: (Optional) An object that specifies additional options for the event listener, such as capture (a boolean indicating whether the event should be captured during the capture phase), and once (a boolean indicating whether the event listener should be removed after it has been executed once).


//It's important to note that in order to remove an event listener using removeEventListener, you must pass in the exact same function that was used when adding the event listener using addEventListener. This means that you cannot remove an anonymous function or a function reference that is different from the one used during the event listener attachment. Therefore, it's recommended to store a reference to the event listener function when adding it, so that you can use the same reference to remove it later using removeEventListener.
