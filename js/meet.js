const meet = () => {
	let isAdmit = false;
	displayButtons(startAdmit);

	const admit = getElement(true, "startAdmit");
	const admitText = getElement(true, "btn-text");

	admit.addEventListener("click", () => {
		isAdmit = !isAdmit;
		let startAdmit;
		if (isAdmit) {
			admitText.innerText = "🚫";

			const autoAdmit=()=> {
				for (let element of document.getElementsByTagName("span")) {
					if (element.innerHTML === "Admit") {
						console.log(
							"There is someone waiting to join this meeting, automatically admitting them..."
						);
						element.click();
					}
				}
			}

			console.log("Enabling Auto Admit");
			startAdmit= setInterval(autoAdmit, 3 * 1000);
		} else {
			admitText.innerText = "🟢";
			clearInterval(startAdmit);
			console.log("disabling Auto Admit");
		}
	});
};
