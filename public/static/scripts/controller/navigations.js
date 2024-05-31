export function showOptions() {
  const options = document.querySelector(".options");

  if (options.style.display === "flex") {
    anime({
      targets: ".options",
      top: "0px",
      opacity: "0",
      duration: 250,
      easing: "linear",
    });
    setTimeout(() => {
      options.style.display = "none";
    }, 300);
  } else {
    anime({
      targets: ".options",
      top: "65px",
      opacity: "1",
      duration: 200,
      easing: "linear",

      begin: function () {
        document.querySelector(".options").style.display = "flex";
      },
    });
  }
}

export function hideOverlay(element) {
  const object = document.querySelector(element);
  anime({
    targets: element,
    top: "0px",
    opacity: "0",
    duration: 1200,
  });
  setTimeout(() => {
    object.style.display = "none";
  }, 300);
}

export function changeIcon(theme) {
  const icon = document.querySelector(".changeTheme-button i");
  if (theme === "dark") {
    icon.classList.replace("fa-moon", "fa-sun");
    return "light";
  }
  if (theme === "light") {
    icon.classList.replace("fa-sun", "fa-moon");
    return "dark";
  }
}

export function changeTheme(theme) {
  for (let key in theme) {
    document.querySelector(":root").style.setProperty(key, theme[key]);
  }
}
