/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				bgzoom: "bg 1s ease-out ",
				maveli: "maveli 1s ease-out",
				flowerlayer: "flowerlayer 1s ease-out ",
				grasslayer: "grasslayer 1s ease-out ",
			},
			keyframes: {
				bg: {
					"0%": {
						transform: "translateX(100px) translateY(-100px)",
						scale: "1.3",
					},
					"100%": {
						transform: " translateX(0px) translateY(0px)",
						scale: "1",
					},
				},
				maveli: {
					"0%": {
						transform: "translateX(-40px) rotateY(0deg) translateY(40px)",
						scale: "1.6",
					},
					"100%": {
						transform: " translateX(0px) rotateY(0deg) translateY(0px)",
						scale: "1",
					},
				},
				flowerlayer: {
					"0%": {
						transform: "translateX(-80px) translateY(400px)",
						scale: "2.5",
					},
					"100%": {
						transform: " translateX(0px) translateY(0px)",
						scale: "1",
					},
				},
				grasslayer: {
					"0%": {
						transform: "translateX(-80px) translateY(40px)",
						scale: "6",
					},
					"100%": {
						transform: " translateX(0px) translateY(0px)",
						scale: "1",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

