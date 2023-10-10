const displayButtons = (items) => {
  const btnsContainer = document.getElementById("toolsId");

  // show signature based on the route
  isInstructorPortal = document.location.href.includes(
    "web.programming-hero.com/"
  );
  btnsContainer.innerHTML = "";
  div.innerHTML = `
<div
    style=" 
        position: fixed;
        right: 0.3%; 
        top:1%;
        z-index: 99999; 
        height: 96vh; 
        border-radius: 10px 10px 10px 10px;
        display:flex; 
        justify-content: center;
        align-items: center;
    " 
>  
<div class="d-flex  flex-column flex flex-col p-2 rounded bg-blur  border" id='my-btns' style='display:flex;flex-direction:column'>
${items + cross}${isInstructorPortal ? sig : ""}
</div>
</div>
`;

  const reloadBtn = document.getElementById("reload");
  if (reloadBtn) {
    reloadBtn.addEventListener("click", function () {
      window.location.reload();
    });
  }

  const closeBtn = document.getElementById("close-tab");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      window.close();
    });
  }

  const crossBtn = getElement(true, "cross");
  crossBtn.addEventListener("click", function () {
    getElement(true, "toolsId").innerHTML = "";
    localStorage.setItem("tools", JSON.stringify(false));
  });
};
