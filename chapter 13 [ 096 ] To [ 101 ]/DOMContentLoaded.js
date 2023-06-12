//! =============== Look At DOMContentLoaded.js ===============

/* <script>
document.addEventListener("DOMContentLoaded", function() {
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    if (links[i].classList.contains("open") && links[i].innerHTML === "Elzero") {
        links[i].click()
    }
  }
})
</script> */

//? ==============================================================

//The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This means that the event is triggered as soon as the browser has finished constructing the Document Object Model (DOM) tree for the page.

//The DOMContentLoaded event is useful for executing JavaScript code that relies on the DOM being fully constructed and available for manipulation. It is often used as a replacement for the load event, which waits for all resources to finish loading, including images and stylesheets. By using DOMContentLoaded instead of load, you can improve the perceived performance of your web page by allowing JavaScript code to start executing sooner.

//The window.onload event is similar to the DOMContentLoaded event in that it is fired when the entire page and all of its resources (images, stylesheets, scripts, etc.) have finished loading. However, unlike DOMContentLoaded, window.onload waits for everything to finish loading before triggering, which can lead to slower page performance and a less responsive user experience.

//Another event that is similar to DOMContentLoaded is the readystatechange event. This event is fired whenever the readyState property of the document object changes, which occurs as the page is being loaded and parsed. The readystatechange event can be used to execute JavaScript code at different stages of the page load process, such as when the page is still loading resources, or when it has finished loading but is still being parsed. However, like window.onload, the readystatechange event waits for all resources to finish loading before triggering, which can also slow down page performance.
