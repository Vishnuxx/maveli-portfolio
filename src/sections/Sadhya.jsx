import room from "../assets/room2.png";
import maveli2 from "../assets/maveli2.png";
import sadhya from "../assets/sadhya.png";
import { onMount } from "solid-js";
import { parallaxer } from "../utils/parallaxer";

function Sadhya({ id, root }) {
	let ref;
	onMount(() => {
		parallaxer(root, ref, ({ layer, yPos }) => {
			layer.style.transform = `translateY(${-yPos}px)`;
		});
	});
	return (
		<div
			id={id}
			ref={ref}
			class="bg-[#0a1206 snap-start w-full h-full relative overflow-hidden"
		>
			<img
				data-speed="1.5"
				id="bg"
				src={room}
				alt="bg"
				class="parallax absolute -bottom-[40%] h-[200%]  w-[140%] object-cover"
			/>

			<div
				data-speed="1.2"
				class="parallax absolute w-full  -bottom-[10%] flex flex-col items-center"
			>
				<img
					id="maveli"
					src={maveli2}
					alt="maveli"
					class="   min-w-[400px]  h-fit w-[80%]  object-cover"
				/>
			</div>

			<div
				data-speed="1.4"
				class="parallax  absolute left-20  w-[30%] h-[40%] flex flex-auto justify-around items-center p-5 box-border"
			>
				<h3 class=" left-0 text-start text-black font-black text-[6rem] md:text-[5rem]">
					Sadhya Mukhyam
				</h3>

				{/* <h2 class=" absolute right-0 text-center text-amber-950 font-black md:text-[2.1rem] text-[1.3rem]">
					Mukhyam
				</h2> */}
			</div>
			<img
				data-speed="1.1"
				id="flowers"
				src={sadhya}
				alt="flowers"
				class="parallax absolute -bottom-[10px]  w-[100%] object-cover"
			/>
		</div>
	);
}

export default Sadhya;
