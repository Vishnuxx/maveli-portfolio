

function Particles(props) {
	const doc = document.createElement("div");
	doc.style.width = "100%";
	doc.style.height = "100%";
	for (let i = 0; i < 60; i++) {
		const particle = document.createElement("div");
		particle.className = "particle";
		particle.style.top = `${Math.random() * 100}%`;
		particle.style.left = `${Math.random() * 100}%`;
		doc.appendChild(particle);
	}
	return <div {...props}>{doc}</div>;
}

export default Particles;
