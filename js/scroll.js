function changeColor(element, color) {
  element.style.setProperty("--check-gray", color);
}

window.addEventListener("scroll", () => {
  const navigation = document.querySelector(".navigation");
  const tdlogo = document.querySelector(".tdlogo");
  navigation.classList.toggle(
    "sticky",
    window.scrollY > window.innerHeight - 200
  );
  tdlogo.classList.toggle("opacity", window.scrollY > window.innerHeight - 400);
});

window.addEventListener("scroll", () => {
  const llinks = document.querySelector(".active-lang");
  if (window.scrollY > window.innerHeight - 200) {
    document.getElementById("ivat").src = "../assets/logoi/misc/sivi-01.png";
    document.getElementById("beli-insta").src =
      "../assets/logoi/misc/insta sivi.png";
    document.getElementById("beli-fb").src = "../assets/logoi/misc/fb sivi.png";
    changeColor(llinks, "#474849");
  } else {
    document.getElementById("ivat").src = "../assets/logoi/misc/beli.png";
    document.getElementById("beli-insta").src =
      "../assets/logoi/misc/insta beli.png";
    document.getElementById("beli-fb").src = "../assets/logoi/misc/fb beli.png";
    changeColor(llinks, "#fff");
  }
});
