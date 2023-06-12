{
  /*<div id="elzero" class="element" name="js">JavaScript</div>*/
}

document.getElementById("elzero"); //01
document.getElementsByClassName("element"); //02
document.getElementsByName("js"); //03
document.getElementsByTagName("div"); //04

document.querySelector("div"); //05
document.querySelector("#elzero"); //06
document.querySelector(".element"); //07
document.querySelector('[name="js"]'); //08

document.querySelectorAll("div"); //09
document.querySelectorAll("#elzero"); //10
document.querySelectorAll(".element"); //11
document.querySelectorAll('[name="js"]'); //12

document.body.firstElementChild; //13
document.body.children[0]; //14
document.body.childNodes[1]; //15
