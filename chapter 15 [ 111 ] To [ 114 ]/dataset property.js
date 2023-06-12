//! dataset property
//The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.

//An HTML data-* attribute and its corresponding DOM dataset.property modify their shared name according to where they are read or written:

//? In HTML
//The attribute name begins with data-. It can contain only letters, numbers, dashes (-), periods (.), colons (:), and underscores (_). Any ASCII capital letters (A to Z) are converted to lowercase.

//? In JavaScript
//The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property's "camelCased" name.

//In addition to the information below, you'll find a how-to guide for using HTML data attributes in our article Using data attributes.

//? Name conversion
//dash-style to camelCase conversion
//A custom data attribute name is transformed to a key for the DOMStringMap entry by the following:

//Lowercase all ASCII capital letters (A to Z);
//Remove the prefix data- (including the dash);
//For any dash (U+002D) followed by an ASCII lowercase letter a to z, remove the dash and uppercase the letter;
//Other characters (including other dashes) are left unchanged.
//camelCase to dash-style conversion
//The opposite transformation, which maps a key to an attribute name, uses the following:

//Restriction: Before transformation, a dash must not be immediately followed by an ASCII lowercase letter a to z;
//Add the data- prefix;
//Add a dash before any ASCII uppercase letter A to Z, then lowercase the letter;
//Other characters are left unchanged.
//For example, a data-abc-def attribute corresponds to dataset.abcDef.

//? Accessing values
//Attributes can be set and read by the camelCase name/key as an object property of the dataset: element.dataset.keyname.
//Attributes can also be set and read using bracket syntax: element.dataset['keyname'].
//The in operator can check if a given attribute exists: 'keyname' in element.dataset.
//? Setting values
//When the attribute is set, its value is always converted to a string. For example: element.dataset.example = null is converted into data-example="null".
//To remove an attribute, you can use the delete operator: delete element.dataset.keyname.
//? Value
//A DOMStringMap.
//? Examples
/* <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
  Carina Anand
</div>*/

const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'carinaanand'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = "1960-10-03";
// Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

delete el.dataset.dateOfBirth;
// Result on JS: el.dataset.dateOfBirth === undefined
// Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

if (!("someDataAttr" in el.dataset)) {
  el.dataset.someDataAttr = "mydata";
  // Result on JS: 'someDataAttr' in el.dataset === true
  // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
}
