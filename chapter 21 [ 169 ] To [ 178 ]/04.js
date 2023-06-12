let reg = new XMLHttpRequest();
reg.open("GET", "./01.json");
reg.send();

let dataDiv = document.createElement("div");
dataDiv.id = "data";

reg.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status === 200) {
    let mainData = JSON.parse(this.response);
    for (let i = 0; i < mainData.articles.length; i++) {
      let dataChild = document.createElement("div");
      dataChild.className = "section";

      let title  = document.createElement("h2");
      let body = document.createElement("p");
      let author = document.createElement("p");
      let category = document.createElement("p");

      let titleText = document.createTextNode(mainData.articles[i].title);
      let bodyText = document.createTextNode(mainData.articles[i].body);
      let authorText = document.createTextNode(mainData.articles[i].author);
      let categoryText = document.createTextNode(mainData.articles[i].category);

      title.appendChild(titleText);
      body.appendChild(bodyText);
      author.appendChild(authorText);
      category.appendChild(categoryText);

      dataChild.append(title, body, author, category);
      dataDiv.append(dataChild);
      document.body.append(dataDiv);
    }
  }
};
