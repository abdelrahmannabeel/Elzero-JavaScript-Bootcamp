let myImages = document.images;
console.log(myImages);
for (let i = 0; i < myImages.length; i++) {
  myImages[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  myImages[i].setAttribute("alt", "Elzero Logo");
}

//or

for (let i = 0; i <= 10; i++) {
  let myImgs = document.images[i];
  myImgs.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  myImgs.setAttribute("alt", "Elzero Logo");
}
