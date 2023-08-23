const iPortal = () => {
  let isActiveArrowKeys = JSON.parse(
    localStorage.getItem("tools-activeArrowKeys")
  );

  displayButtons(
    openModal +
      pressE +
      focus +
      submitMark +
      assimentAdd +
      unassign +
      closeModal +
      arrowKey +
      reload
  );

  // instructor dashboard buttons
  const focusButton = getElement(true, "focus");
  const modalOpen = getElement(true, "openModal");
  const modalClose = getElement(true, "closeModal");
  const press = getElement(true, "pressE");
  const submitMarkSecondary = getElement(true, "submitMark");
  const addAssignment = getElement(true, "addAssignment");
  const unAssign = getElement(true, "unassign");
  const arrowKeyBtn = getElement(true, "arrowKeys");

  // add mark function
  const addMark = () => {
    const inputMark = getElement(true, "Mark");
    const insertBtn = getElement(true, "insertBtn");
    if (insertBtn) insertBtn.click();
    const suggetMark = document
      .getElementsByClassName("m-2 w-50 markSuggestions")[0]
      .innerText.split(" ")[0];
    navigator.clipboard.writeText(parseInt(suggetMark));
    inputMark.focus();
  };

  // ass submit function
  const submitAss = () => {
    const submitButtonPrimary = getElement(false, "btn px-4 btn-primary")[0];
    submitButtonPrimary.click();
  };

  // open ass function
  const openAss = () => {
    const open = getElement(false, "btn btn-icon btn-eye-icon btn-primary");
    const ok = getElement(false, "swal-button swal-button--confirm")[0];
    if (ok) {
      ok.click();
    }
    open[0].click();

    // get links
    const links = getElement(false, "col-12 col-md-11")[8].children;
    const all = [...links].map((i) => i?.children[0]?.href);
    console.log(all);
    press.click();
    [...links].map(
      (item) => item?.children[0] && window.open(item?.children[0]?.href)
    );
  };

  // close opened ass function
  const closeAss = () => {
    const close = getElement(false, "btn btn-close");
    close[0].click();
  };

  // change arrowKey btn status function
  const changeArrowKey = () => {
    if (isActiveArrowKeys) {
      arrowKeyBtn.classList.add("btn-danger");
      arrowKeyBtn.classList.remove("btn-secondary");
      arrowKeyBtn.innerText = "👨‍👩‍👧‍👦";
      arrowKeyBtn.title = "Now you can use arrow keys";
    } else {
      arrowKeyBtn.classList.remove("btn-danger");
      arrowKeyBtn.classList.add("btn-secondary");
      arrowKeyBtn.innerText = "👨";
      arrowKeyBtn.title = "Now you are pure single";
    }
  };
  changeArrowKey();

  // press focus
  focusButton.addEventListener("click", function () {
    addMark();
  });

  // press submit
  submitMarkSecondary.addEventListener("click", function () {
    submitAss();
  });

  // press to open 1st assignment
  modalOpen.addEventListener("click", function () {
    openAss();
  });

  // press toclose the Modal window
  modalClose.addEventListener("click", function () {
    closeAss();
  });

  // press ]
  press.addEventListener("click", function () {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "]" }));
  });

  //add assignment
  addAssignment.addEventListener("click", function () {
    const checkbox = getElement(true, "thead-checkbox");
    const assignBtn = getElement(
      false,
      "low-op-btn float-right btn btn-outline-primary"
    )[0];
    checkbox.click();
    assignBtn.click();
    const okBtn = getElement(
      false,
      "swal-button swal-button--confirm swal-button--danger"
    )[0];

    okBtn.click();
  });

  //to unassign an assignment
  unAssign.addEventListener("click", () => {
    const open = getElement(false, "btn btn-icon btn-eye-icon btn-primary")[0];
    open.click();
    [...document.getElementsByClassName("btn btn-primary")]
      .find((item) => item.innerText == "Unassigned To me")
      .click();
    const ok = getElement(false, "swal-button swal-button--confirm")[0];
    ok.click();
  });

  // press to toggle use arrowKeys
  arrowKeyBtn.addEventListener("click", () => {
    isActiveArrowKeys = !isActiveArrowKeys;
    localStorage.setItem("tools-activeArrowKeys", isActiveArrowKeys);
    changeArrowKey();
  });

  // press focus and submit button  (< | >)
  document.addEventListener("keydown", function (e) {
    if (!isActiveArrowKeys) return;

    switch (e.key) {
      case "ArrowLeft":
        addMark();
        break;
      case "ArrowRight":
        submitAss();
        break;

      case "ArrowUp":
        openAss();
        break;
      case "ArrowDown":
        closeAss();
        break;

      default:
        break;
    }
  });
};
