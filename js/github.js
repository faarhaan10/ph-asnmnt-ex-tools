const github = () => {
  displayButtons(view + reload + closeTab);

  const gitAction = () => {
    const date =
      document.getElementsByTagName("relative-time")[0].attributes.title.value;
    const commits = document.getElementsByTagName("strong")[13].innerHTML;

    const resultBtn = `<button id="handleCopy" type="button" class="btn btn-primary text-bolder mb-2 ">
      <span>${date}</span>
      <hr class='m-0'/>
      <span>Total Commits:- ${commits}</span>
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
