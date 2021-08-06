import lang from "../language/lang.js";

const data = lang.data;
let defaulL = "srb";

try {
  const typeL = window.location.href.split("?")[1];
  defaulL = typeL.split("=")[1];
} catch (error) {
  console.log(error);
}

const langWrap = document.querySelector(".lang");
const language = document.querySelectorAll(".language");
const links = document.querySelectorAll(".a-link");
const slinks = document.querySelectorAll(".saznaj-link");

if (defaulL == "srb") {
  langWrap.querySelector(".active-lang").classList.remove("active-lang");
  language[0].classList.add("active-lang");
} else if (defaulL == "eng") {
  langWrap.querySelector(".active-lang").classList.remove("active-lang");
  language[1].classList.add("active-lang");
}

language.forEach((el) => {
  el.addEventListener("click", () => {
    langWrap.querySelector(".active-lang").classList.remove("active-lang");
    el.classList.add("active-lang");

    const attr = el.getAttribute("language");
    setLan(attr);
  });
});

function setLan(attr) {
  let counter = 0;
  for (let key in data[attr].navigation) {
    let value = data[attr].navigation[key];
    links[counter].textContent = value;
    links[counter].setAttribute(
      "href",
      setUrl(links[counter].getAttribute("href")) + `?language=${attr}`
    );
    counter++;
  }
}

function setLanS(attr) {
  let counter = 0;
  slinks.forEach((el) => {
    el.setAttribute(
      "href",
      setUrl(el.getAttribute("href")) + `?language=${attr}`
    );
  });
}

function setUrl(url) {
  return url.split("?")[0];
}

setLan(defaulL);
setLanS(defaulL);
