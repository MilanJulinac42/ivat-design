window.addEventListener("scroll", () => {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("sticky", window.scrollY > 900);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    document.getElementById("ivat").src = "../assets/logoi/misc/sivi-01.png";
    document.getElementById("beli-insta").src =
      "../assets/logoi/misc/insta sivi.png";
    document.getElementById("beli-fb").src = "../assets/logoi/misc/fb sivi.png";
  } else {
    document.getElementById("ivat").src = "../assets/logoi/misc/beli.png";
    document.getElementById("beli-insta").src =
      "../assets/logoi/misc/insta beli.png";
    document.getElementById("beli-fb").src = "../assets/logoi/misc/fb beli.png";
  }
});
