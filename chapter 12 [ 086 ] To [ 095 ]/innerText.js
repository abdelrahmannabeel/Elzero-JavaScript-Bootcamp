//! The Differences Between innerHTML, innerText and textContent

//* All three properties, innerHTML, innerText, and textContent, are used to access or modify the content of an HTML element, but they have different behaviors and characteristics.

//* innerHTML is a property that sets or gets the HTML content within an element. It can be used to add, remove or modify HTML elements and their attributes, and also includes text nodes and comments. innerHTML can be used to manipulate the structure and content of an element's children. However, because innerHTML can contain HTML tags and attributes, it can potentially introduce security risks if user-generated content is directly inserted into the property without proper sanitization.

//* innerText is a property that sets or gets the visible text content of an element. It includes only the visible text and excludes any child elements, HTML tags, and comments. Unlike innerHTML, innerText is not an HTML structure modifier; it is only used for text content manipulation. It also respects CSS styling and won't return text that is hidden using CSS.

//* textContent is a property that sets or gets the text content of an element, including all child nodes. It includes all the text within an element, including any child nodes such as text nodes, comment nodes, and script elements. Unlike innerHTML, textContent doesn't include HTML tags and attributes, but it does include all text within an element, even if it is hidden using CSS.

//* In summary, innerHTML is used for HTML manipulation, innerText is used for visible text manipulation, and textContent is used for text content manipulation that includes all child nodes, but without HTML tags and attributes.

//* innerHTML, innerText, and textContent are all properties of a DOM element in JavaScript that are used to manipulate the content of an element. However, there are some differences between them.

//! innerHTML:
//* innerHTML is a property that sets or returns the HTML content inside an element. It allows you to add HTML tags and text to an element, and can be used to create, update, or replace the content of an element. When you use innerHTML, the browser will parse the HTML code and create the corresponding DOM elements.

//? Example:
/*
<div id="myDiv"></div>

<script>
  var myDiv = document.getElementById("myDiv");
  myDiv.innerHTML = "<p>Hello, world!</p>";
</script>
*/
//! innerText:
//* innerText is a property that sets or returns the visible text content of an element. It does not include the text of any child elements or HTML tags. It is often used to get the text content of an element and can be used to replace or update the text content of an element.

//? Example:
/*
<div id="myDiv">
  <p>Hello, world!</p>
</div>

<script>
  var myDiv = document.getElementById("myDiv");
  console.log(myDiv.innerText); // Output: Hello, world!
</script>
*/

//! textContent:
//* textContent is a property that sets or returns the text content of an element, including any child elements or HTML tags. It is similar to innerText, but it includes all the text in the element, regardless of its visibility. It is often used to get the text content of an element and can be used to replace or update the text content of an element.

//? Example:
/*
<div id="myDiv">
  <p>Hello, <span>world!</span></p>
</div>

<script>
  var myDiv = document.getElementById("myDiv");
  console.log(myDiv.textContent); // Output: Hello, world!
</script>
*/
//* In summary, innerHTML is used to manipulate the HTML content of an element, while innerText and textContent are used to manipulate the text content of an element. innerText only includes visible text, while textContent includes all the text, including any child elements or HTML tags.
