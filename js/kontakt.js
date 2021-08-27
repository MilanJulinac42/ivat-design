document.getElementById("ivat").src = "../assets/logoi/misc/sivi-01.png";
document.getElementById("beli-insta").src =
  "../assets/logoi/misc/insta sivi.png";
document.getElementById("beli-fb").src = "../assets/logoi/misc/fb sivi.png";

const llinks = document.querySelector(".active-lang");

function changeColor(element, color) {
  element.style.setProperty("--check-gray", color);
}

changeColor(llinks, "#474849");
