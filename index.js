/* eslint-disable quotes */
const home = document.querySelector("#home-btn");
const facebook = document.querySelector("#facebook-btn");
const github = document.querySelector("#github-btn");
const instagram = document.querySelector("#instagram-btn");
const twitter = document.querySelector("#twitter-btn");
const youtube = document.querySelector("#youtube-btn");
const phoneScreen = document.querySelector("#phone-screen");
const phoneContainer = document.querySelector(".home-img");

const setScrollBar = (isHome = false) => {
  if (isHome) {
    phoneContainer.classList.remove("scrollable");
  } else {
    phoneContainer.classList.add("scrollable");
    phoneContainer.scrollTop = 0;
  }
};

home.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-home.jpg";
  setScrollBar(true);
});

facebook.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-facebook.jpg";
  setScrollBar();
});
github.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-github.jpg";
  setScrollBar();
});
instagram.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-instagram.jpg";
  setScrollBar();
});
twitter.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-twitter.jpg";
  setScrollBar();
});
youtube.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-youtube.png";
  setScrollBar();
});
