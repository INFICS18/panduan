window.addEventListener("scroll", () => {
	for (el of document.getElementsByTagName("h2")) {
		if (el.getBoundingClientRect().y <= 0) {
			el.classList.add("sticky");
		} else {
			el.classList.remove("sticky");
		}
	}
});
