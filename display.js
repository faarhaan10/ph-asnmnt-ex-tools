const displayButtons = (items) => {
	const btnsContainer = document.getElementById("toolsId");
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
<div class="d-flex  flex-column flex flex-col p-2 rounded bg-blur  border" id='my-btns'>
${items + cross}
</div>
</div>
`;

	const reloadBtn = document.getElementById("reload");
	if (reloadBtn) {
		reloadBtn.addEventListener("click", function () {
			window.location.reload();
		});
	}

	const crossBtn = getElement(true, "cross");
	crossBtn.addEventListener("click", function () {
		getElement(true, "toolsId").innerHTML = "";
		localStorage.setItem("tools", JSON.stringify(false));
	});
};
