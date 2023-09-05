import { onCleanup, onMount } from "solid-js";
import Hero from "./components/Hero";
import Sadhya from "./components/Sadhya";
import sadhya2 from "./assets/sadhya2.png";
import grass from "./assets/grass.png";
import { parallaxer } from "./utils/parallaxer";
import Lake from "./components/Lake";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

function App() {
	let root, mainref, ref1, ref2, ref3, lakeref;

	onMount(() => {
		parallaxer(root, mainref, ({ layer, yPos }) => {
			const scrollY = yPos;

			if (layer.id == "colorbg") {
				layer.style.background = `rgb(255, 245, 182, ${-scrollY / 500})`;
			} else if (layer.id == "grass") {
				// layer.style.filter = `brightness(${-scrollY/1000})`
				layer.style.transform = `translateY(${-yPos / 4}px)`;
				// layer.style.transform = `scale(${Math.min(-(yPos / 20) + 1, 100)} )`;
				// console.log(`${-yPos}`);
				// layer.style.textShadow = `rgba(255 , 185 , ${
				// 	scrollY / 100
				// } , 1) 0px 0px 20px`;
			}
		});

		parallaxer(root, ref1, ({ layer, yPos }) => {
			layer.style.transform = `translateY(${-yPos}px)`;
		});
		parallaxer(root, lakeref, ({ layer, yPos }) => {
			switch (layer.id) {
				case "text":
					layer.style.transform = `translateX(${yPos}px)`;
					break;
				default:
					layer.style.transform = `translateY(${-yPos}px)`;
					break;
			}
		});
		parallaxer(root, ref3, ({ layer, yPos }) => {
			layer.style.transform = `translateX(${yPos}px)`;
			if (layer.id == "sadhya") {
				// layer.style.transform = `translateY(${yPos}px)`;
				// layer.style.transform = `translateX(${yPos}px)`;
			}
		});
		// parallaxer(root, ref4, ({ layer, yPos }) => {
		// 	layer.style.transform = `translateY(${-yPos}px)`;
		// });
		parallaxer(root, ref2, ({ layer, yPos }) => {
			layer.style.transform = `translateY(${-yPos}px)`;
		});
	});

	return (
		<div
			ref={root}
			class="h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory"
		>
			<div
				ref={mainref}
				id="der"
				class="relative overflow-hidden h-full snap-start w-full bg-[#000000] text-[10rem] flex flex-col justify-center items-center"
			>
				<div
					id="colorbg"
					data-speed="1"
					class="parallax absolute top-0 left-0 w-screen h-screen text-white"
				></div>
				<h2
					data-speed="1.1"
					class="parallax absolute  p-10 font-black  text-amber-500 "
				>
					MAAVELI
				</h2>
				<ScrollIndicator></ScrollIndicator>
				<img
					id="grass"
					data-speed="1.1"
					alt="grass"
					src={grass}
					class="parallax absolute object-cover h-[100%]  w-[200%] brightness-[0.2]"
				/>
			</div>
			<Hero ref={ref1} id="section1"></Hero>

			{/* <div  class="absolute top-0 h-full w-full bg-[#0a1206]"></div> */}
			<div
				ref={ref3}
				class="relative overflow-hidden h-screen snap-start w-full bg-[#0a1206] p-10   flex flex-col justify-start items-start"
			>
				<h3
					data-speed="1.2"
					class="parallax sticky top-[10vh] text-center justify-center  text-[#696338] font-black md:text-[9rem] text-[3rem]"
				>
					Oru Adaar
				</h3>
				<h3
					data-speed="1.2"
					class="parallax sticky top-[10vh] text-center justify-center  text-amber-500 font-black md:text-[9rem] text-[3rem]"
				>
					Onasadhya
				</h3>
				{/* <h3
					data-speed="1.2"
					class="parallax sticky top-[10vh] text-center justify-center  text-amber-500 font-black md:text-[9rem] text-[3rem]"
				>
					Onasadhya
				</h3>
				<h3
					data-speed="1.2"
					class="parallax sticky top-[10vh] text-center justify-center  text-amber-500 font-black md:text-[9rem] text-[3rem]"
				>
					Onasadhya
				</h3> */}
				<img
					id="sadhya"
					data-speed="-1.1"
					alt="grass"
					src={sadhya2}
					class="parallax -right-[10%] h-[90%] brightness-75 absolute  "
				/>
			</div>

			{/* <Hero ref={ref4} id="section7"></Hero> */}
			{/* <Hero ref={ref2} id="section4"></Hero> */}
			<Sadhya ref={ref2}></Sadhya>
			<Lake ref={lakeref}></Lake>
			<div
				id="section"
				class="snap-start h-full w-full bg-[#071607] p-10  flex flex-col justify-center items-center"
			></div>
			<div
				id="section2"
				class="h-full w-full bg-[#ffffff] p-10  flex flex-col justify-center items-center"
			></div>
		</div>
	);
}

export default App;
