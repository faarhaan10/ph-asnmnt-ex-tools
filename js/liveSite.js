const liveSite = () => {
  displayButtons(scrollTop + reload + scrollBottom + closeTab);

  const top = getElement(true, "scrollTop");
  const down = getElement(true, "scrollBottom");

  top.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  down.addEventListener("click", function () {
    window.scrollTo(0, 9999999999);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") {
      window.close();
    }
  });
};
