export const parallaxer = (root , target , callback) => {
	const layers = target.querySelectorAll(".parallax");
	const element = root ?? document.body;
	let bounds = target.getBoundingClientRect();
	let scrollY = -(element.scrollTop - target.offsetTop);
	let prevscroll = element.scrollTop;

	element.addEventListener(
		"scroll",
		(e) => {
			if (
				element.scrollTop > target.offsetTop - window.innerHeight &&
				element.scrollTop < target.offsetTop + bounds.height
			) {
				scrollY += prevscroll - element.scrollTop;
				prevscroll = element.scrollTop;
				layers.forEach((layer) => {
					const speed = parseFloat(layer.getAttribute("data-speed"));
					const yPos = scrollY * speed;
                    if(callback) callback({yPos , speed , scrollY , layer})
					// layer.style.transform = `translateY(${-yPos}px)`;
				});
			}
		},
		false
	);
};


function Parallaxer() {
    this.parallax = (root , target) => {

    }
}

export default Parallaxer;