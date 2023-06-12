function getData(data) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", data);
    xhr.send();
    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("There Is No Data"));
      }
    };
  });
}

getData("./data.json")
  .then((data) => {
    data.length = 5;
    console.log(data);
    return data;
  })
  .then((Data) => {
    Data.forEach((data) => {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      h3.appendChild(document.createTextNode(data.title));
      p.appendChild(document.createTextNode(data.description));
      div.appendChild(h3);
      div.appendChild(p);
      document.body.appendChild(div);
    });
  })
  .catch((rej) => {
    Error("There Is No Data");
    document.body.appendChild(document.createTextNode(rej));
  });
