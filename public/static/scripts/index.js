import "./controller/navigations.js";
import { rippleEffect } from "./animations/index.js";
import {
  changeIcon,
  changeTheme,
  hideOverlay,
  showOptions,
} from "./controller/navigations.js";

const root = document.getElementById("root");

// Navigation elements
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", rippleEffect);
});

const pageContent = document.querySelectorAll(".page-content li");

pageContent.forEach((item) => {
  item.addEventListener("click", rippleEffect);
});

const optionToggle = document.querySelector(".option-toggle");

optionToggle.addEventListener("click", showOptions);

const changeThemeButton = document.querySelector(".changeTheme-button");

let darkTheme = {
  "--primary-background": "black",
  "--secondary-background": "rgba(24, 24, 35, 0.75);",
  "--primary-heading": "darkslategray",
  "--primary-text": "white",
  "--accent": "#5221e6",
  "--hover": "#242431",
};

let lightTheme = {
  "--primary-background": "white",
  "--secondary-background": "#f1f2f3",
  "--primary-heading": "darkgray",
  "--primary-text": "black",
  "--accent": "#7247f3",
  "--hover": "#f9f8f7",
};

let theme = "dark";
changeThemeButton.addEventListener("click", (e) => {
  theme = changeIcon(theme);
  theme === "dark" ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

//  * Stretch Goal do it to become the best
// (function () {
//   const follower = document.createElement("div");
//   follower.classList.add("follow-blob");
//   document.body.appendChild(follower);
// })();
