window.addEventListener("load", () => {
	for (el of document.getElementsByTagName("a")) {
		let href = el.getAttribute("href");
		if (href[0] == "#") {
			el.addEventListener("click", (ev) => {
				document.querySelector(href).scrollIntoView({
					behavior: "smooth"
				});
				ev.preventDefault();
			});
		}
	}
});

window.addEventListener("scroll", () => {
	for (el of document.getElementsByTagName("h2")) {
		if (el.getBoundingClientRect().y <= 0) {
			el.classList.add("sticky");
		} else {
			el.classList.remove("sticky");
		}
	}
});
