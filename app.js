// common function to get elements using class/id
const getElement = (isId, name) => {
  let element;
  if (isId) {
    element = document.getElementById(name);
  } else {
    element = document.getElementsByClassName(name);
  }
  return element;
};

const div = document.createElement("div");
div.setAttribute("id", "toolsId");

const route = document.location.href;

const showRoutes = () => {
  if (route.includes("github.com/")) {
    github();
  } else if (route.includes("meet.google.com/")) {
    meet();
  } else if (route.includes("web.programming-hero.com/")) {
    iPortal();
  } else {
    liveSite();
  }
};

window.onload = () => {
  document.body.insertBefore(div, document.body.firstChild);
  const tools = JSON.parse(localStorage.getItem("tools"));
  const darkMode = JSON.parse(localStorage.getItem("tools-DarkMode"));

  // setting some styles in the headTag
  if (darkMode) {
    const headTag = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerText = `#tools-overlay{background-color: rgb(227 211 211 / 75%)!important;} .swal-modal{filter:invert(92%) !important;} .ReactModalPortal div div{filter:invert(94%) !important;}
  `;
    headTag.appendChild(style);
  }

  if (tools === null || tools) {
    showRoutes();
  }
};

// document.onload(() => displayButtons(buttons))

document.addEventListener("keypress", function (e) {
  if (e.key === "_") {
    showRoutes();
    localStorage.setItem("tools", JSON.stringify(true));
  }
});
