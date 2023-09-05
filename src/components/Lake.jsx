import lakebg from "../assets/lake.jpg";
import vallam from "../assets/Vallam21.png";

function Lake({ id , ref }) {

	return (
		<div
			id={id}
			ref={ref}
			class="bg-[#0a1206] snap-start w-full h-full relative overflow-hidden"
		>
			<img
				data-speed="1.5"
				id="bg"
				src={lakebg}
				alt="bg"
				class="parallax absolute -bottom-[30%] h-[200%]  w-[100%]"
			/>
			<img
				data-speed="1.1"
				id="vallam"
				src={vallam}
				alt="bg"
				class="parallax absolute -bottom-20 -left-[30%]  min-w-[100px] w-[80%] h-[140%]  object-contain"
			/>
			<img
				data-speed="1.4"
				id="vallam2"
				src={vallam}
				alt="bg"
				class="parallax absolute -bottom-0 -right-[40%]  min-w-[100px] w-[80%] h-[140%]  object-contain"
			/>
			<div
				data-speed="1.3"
				class="parallax absolute w-full h-[100%] flex flex-col justify-center items-center pl-15 p-5 box-border"
			>
				<h3
					data-speed="1.1"
					id="text"
					class="parallax text-white font-black text-[4rem] md:text-[9rem] drop-shadow-lg text-center"
				>
					Beauty of
				</h3>
				<h3
					data-speed="-1.1"
					id="text"
					class="parallax text-white font-black text-[4rem] md:text-[9rem] drop-shadow-lg text-center"
				>
					Vallamkali
				</h3>
				{/* <h2 class=" text-center text-gray-300 font-black md:text-[2.1rem] text-[1.3rem]">
					Mukhyam Makkale
				</h2> */}
			</div>
		</div>
	);
}

export default Lake;
