const friki = document.querySelector(".friki");
const krug = document.querySelector(".krug");
const pcmax = document.querySelector(".pcmax");
const modal = document.getElementById("myModal");
const frame = document.getElementById("modalIframe");

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

function handleBtnClick() {
  modal.style.display = "flex";
  modal.style.transform = "translateY(0px)";
  modal.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
  disableScrolling();
}

friki.addEventListener("click", () => {
  handleBtnClick();
  frame.src = "https://www.youtube.com/embed/TRCDsB9i3bI";
});

krug.addEventListener("click", () => {
  handleBtnClick();
  frame.src = "https://www.youtube.com/embed/TRCDsB9i3bI";
});

pcmax.addEventListener("click", () => {
  handleBtnClick();
  frame.src = "https://www.youtube.com/embed/TRCDsB9i3bI";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.transform = "translateY(-300px)";
    modal.style.display = "none";
  }
  enableScrolling();
};
