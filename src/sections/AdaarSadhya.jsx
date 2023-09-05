import { onMount } from "solid-js";
import { parallaxer } from "../utils/parallaxer";
import sadhya2 from "../assets/sadhya2.png";

function AdaarSadhya({root }) {
    let ref
    onMount(()=>{
        parallaxer(root, ref, ({ layer, yPos }) => {
					
					if (layer.id == "meme") {
						layer.style.opacity = `${100/Math.abs(yPos)}`;
					
					}else {
						layer.style.transform = `translateX(${yPos}px)`;
					}
				});
    })
	return (
		<div
			ref={ref}
			class="relative overflow-hidden h-screen snap-start w-full bg-[#0a1206] p-20   flex flex-col justify-start items-start"
		>
			<img
				id="sadhya"
				data-speed="2.6"
				alt="grass"
				src={sadhya2}
				class="parallax -right-[10%] h-[90%] brightness-90 absolute  "
			/>
			<h3
				data-speed="1.2"
				class="parallax sticky top-[10vh] text-center justify-center  text-[#696338] font-black md:text-[9rem] text-[3rem]"
			>
				Oru Adaar
			</h3>
			<h3
				data-speed="-1.2"
				class="parallax sticky top-[10vh] text-center justify-center  text-amber-500 font-black md:text-[9rem] text-[3rem]"
			>
				Onasadhya
			</h3>
			<p
			id="meme"
				data-speed="1.2"
				class="parallax w-fit h-fit  translate-y-[-50px]   text-start  py-10 font-semibold text-[1.6rem] md:text-[3rem]  text-violet-300 opacity-50 "
			>
				ഓണത്തിന്റെയിടയിൽ പുട്ടുകച്ചവടം
			</p>
			<button
				onClick={() =>
					root.scrollTo({ y: window.innerHeight, behaviour: "smooth" })
				}
				class=" z-10 mt-10  border-2 border-green-400 text-white hover:bg-green-400 hover:scale-110 transition-transform hover:text-black w-fit h-fit px-20 py-2 text-[1.4rem] rounded-2xl"
			>
				Order Now
			</button>
		</div>
	);
}

export default AdaarSadhya;
