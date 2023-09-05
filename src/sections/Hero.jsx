import { onMount } from "solid-js";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import grass from "../assets/grass.png";
import onamaal from '../assets/maveli3.png'
import { parallaxer } from "../utils/parallaxer";
import Navbar from "./NavBar";

function Hero({ root }) {
	let ref;
	onMount(() => {
		parallaxer(root, ref, ({ layer, yPos }) => {
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
	});
	return (
		<div
			ref={ref}
			id="der"
			class="relative overflow-hidden h-full snap-start w-full bg-[#000000] text-[10rem] flex flex-col justify-center items-start"
		>
			<Navbar data={{
				History : "/",
				Onam : "/",
				Service : "/"
			}}></Navbar>
			<div
				id="colorbg"
				data-speed="1"
				class="parallax absolute pointer-events-none top-0 left-0 w-screen h-screen text-white"
			></div>
			<img
				id="grass"
				data-speed="1.1"
				alt="grass"
				src={onamaal}
				class="parallax  absolute -right-[10%] bottom-0 object-contain h-[70%]   brightness-[0.7]"
			/>
			<div class="flex flex-col items-center justify-center md:justify-normal  md:items-start  h-full w-full p-20">
				<div class="flex flex-col w-fit">
					<p class=" w-fit  translate-y-[60%]  text-center md:text-start  py-10 font-semibold text-[1.6rem] md:text-[3rem]  text-violet-300 ">
						മലയാളികളുടെ സ്വന്തം
					</p>
					<p class=" w-fit  py-0 z-[1] font-black text-[5rem] md:text-[10rem]  text-amber-500 ">
						MAAVELI
					</p>
				</div>
				<button
					onClick={() =>
						root.scrollTo({ y: window.innerHeight, behaviour: "smooth" })
					}
					class=" z-10 mt-10  border-2 border-green-400 text-white hover:bg-green-400 hover:scale-105 transition-transform hover:text-black w-fit h-fit px-20 py-2 text-[1.4rem] rounded-2xl"
				>
					Welcome
				</button>
			</div>
			<div class="flex justify-center w-full pointer-events-none">
				<ScrollIndicator></ScrollIndicator>
			</div>

			<img
				id="grass"
				data-speed="1.1"
				alt="grass"
				src={grass}
				class="parallax absolute object-cover h-[100%]   w-[200%] brightness-[0.2]"
			/>
		</div>
	);
}

export default Hero;
