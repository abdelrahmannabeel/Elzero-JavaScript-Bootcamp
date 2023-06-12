 let req = new XMLHttpRequest();
req.open("GET", "./01.json");
req.send();

req.onreadystatechange = function () {
  if (this.status === 4 && this.readyState === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
  }
};

// Needed Output

("JSON Object Content Here");
("Data Loaded");
