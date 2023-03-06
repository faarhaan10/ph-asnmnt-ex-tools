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
	}
};

window.onload = () => {
	document.body.insertBefore(div, document.body.firstChild);
	const tools = JSON.parse(localStorage.getItem("tools"));
	console.log("tools", tools);
	if (tools === null || tools) {
		showRoutes();
	}
};

// document.onload(() => displayButtons(buttons))
document.addEventListener("keydown", function (e) {
	console.log(e);
});
document.addEventListener("keypress", function (e) {
	console.log(e.key);
	if (e.key === "_") {
		showRoutes();
		localStorage.setItem("tools", JSON.stringify(true));
	}
});
