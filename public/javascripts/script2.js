setTimeout(() => {
	const loader = document.querySelector(".loader");
	loader.style.opacity = "0";
	loader.style.backgroundColor = "transparent";
	setTimeout(() => {
		loader.style.display = "none";
		document.body.style.overflow = "visible";
	}, 1000);
}, 1500);