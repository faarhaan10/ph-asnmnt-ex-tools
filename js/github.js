const github = () => {
  displayButtons(view + reload + closeTab);

  const gitAction = () => {
    const date =
      document.getElementsByTagName("relative-time")[0].attributes.title
        .value || "N/A";
    const commitsElmnt = document.getElementsByClassName(
      "Text-sc-17v1xeu-0 hfRvxg"
    );

    // update: commits location
    const commits = commitsElmnt[0]?.innerHTML || "N/A";
    // document.getElementsByTagName("strong")[13].innerHTML || "N/A";

    const resultBtn = `<button id="handleCopy" type="button" class="btn btn-primary text-bolder mb-2 ">
      <span>${date}</span>
      <hr class='m-0'/>
      <span>Total: ${commits}</span>
      </button>`;
    displayButtons(resultBtn + closeTab + reload + view);

    //to copy
    document
      .getElementById("handleCopy")
      .addEventListener("click", function () {
        navigator.clipboard.writeText(date);
      });
  };
  document.getElementById("handleView").addEventListener("click", function () {
    console.log("object", 11);
    gitAction();
  });

  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowUp":
        gitAction();
        break;
      case "ArrowLeft":
        window.close();
        break;
      default:
        break;
    }
  });
};
