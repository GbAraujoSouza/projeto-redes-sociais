/* eslint-disable quotes */
const home = document.querySelector("#home-btn");
const facebook = document.querySelector("#facebook-btn");
const github = document.querySelector("#github-btn");
const instagram = document.querySelector("#instagram-btn");
const twitter = document.querySelector("#twitter-btn");
const youtube = document.querySelector("#youtube-btn");
const phoneScreen = document.querySelector("#phone-screen");
const phoneContainer = document.querySelector(".home-img");
const linksTemplate = document.getElementsByTagName("template")[0];

const setScrollBar = (isHome = false) => {
  if (isHome) {
    phoneContainer.classList.remove("scrollable");
  } else {
    phoneContainer.classList.add("scrollable");
    phoneContainer.scrollTop = 0;
  }
};

const addLink = (social) => {
  const links = linksTemplate.content.cloneNode(true).childNodes;
  links.forEach((link) => {
    if (link.innerHTML && link.dataset.social === social) {
      phoneContainer.appendChild(link);
    }
  });
};

const removeLink = () => {
  if (phoneContainer.childElementCount > 1) {
    phoneContainer.removeChild(phoneContainer.lastChild);
  }
};

home.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-home.jpg";
  removeLink();
  setScrollBar(true);
});

facebook.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-facebook.jpg";
  removeLink();
  setScrollBar();
  addLink("facebook");
});
github.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-github.jpg";
  removeLink();
  setScrollBar();
  addLink("github");
});
instagram.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-instagram.jpg";
  removeLink();
  setScrollBar();
  addLink("instagram");
});
twitter.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-twitter.jpg";
  removeLink();
  setScrollBar();
  addLink("twitter");
});
youtube.addEventListener("click", () => {
  phoneScreen.src = "./img/tela-youtube.png";
  removeLink();
  setScrollBar();
  addLink("youtube");
});
