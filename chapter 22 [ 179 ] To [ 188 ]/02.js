
async function getData(data) {
  try {
    let jsonData = await fetch(data);
    let myData = await jsonData.json();
    myData.length = 5;
    console.log(myData);
    myData.forEach((data) => {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      h3.appendChild(document.createTextNode(data.title));
      p.appendChild(document.createTextNode(data.description));
      div.appendChild(h3);
      div.appendChild(p);
      document.body.appendChild(div);
    });
  } catch (rej) {
    Error("There Is No Data");
    document.body.appendChild(document.createTextNode(rej));
  }
}

getData("./data.json");
