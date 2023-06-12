//? Here are some improvements that can be made to the code:

//Use const instead of let for variables that don't change after initialization.
//Use the optional chaining operator to safely get the default option value.
//Use a separate function to set the initial values instead of repeating the same code.
//Use arrow functions for event listeners to avoid creating unnecessary function objects.
//Wrap the code inside an IIFE (Immediately Invoked Function Expression) to avoid polluting the global scope.
//Add comments to explain what each piece of code does.
//Here's the improved code:


(function() {
  const font = document.querySelector("#font");
  const color = document.querySelector("#color");
  const size = document.querySelector("#size");
  const text = document.querySelector("#text");

  // Set initial values
  font.value = window.localStorage.getItem("font") ?? font.options[0]?.value;
  color.value = window.localStorage.getItem("color") ?? color.options[0]?.value;
  size.value = window.localStorage.getItem("size") ?? size.options[0]?.value;
  upData();

  // Event listeners for changes to font, color, and size
  font.addEventListener("change", () => {
    window.localStorage.font = font.value;
    upData();
  });
  color.addEventListener("change", () => {
    window.localStorage.color = color.value;
    upData();
  });
  size.addEventListener("change", () => {
    window.localStorage.size = size.value;
    upData();
  });

  /**
   * Updates the text with the current font, color, and size.
   */
  function upData() {
    // Change font family
    text.style.fontFamily = font.value;

    // Change color
    text.style.color = color.value;
    document.body.style.backgroundColor = color.value;

    // Change font size
    text.style.fontSize = size.value;
  }
})();
//window.localStorage.clear();
