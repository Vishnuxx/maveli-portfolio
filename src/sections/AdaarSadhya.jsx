import { onMount } from "solid-js";
import { parallaxer } from "../utils/parallaxer";
import sadhya2 from "../assets/sadhya2.png";

function AdaarSadhya({root }) {
    let ref
    onMount(()=>{
        parallaxer(root, ref, ({ layer, yPos }) => {
					layer.style.transform = `translateX(${yPos}px)`;
					if (layer.id == "sadhya") {
						// layer.style.transform = `translateY(${yPos}px)`;
						// layer.style.transform = `translateX(${yPos}px)`;
					}
				});
    })
	return (
		<div
			ref={ref}
			class="relative overflow-hidden h-screen snap-start w-full bg-[#0a1206] p-10   flex flex-col justify-start items-start"
		>
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

			<img
				id="sadhya"
				data-speed="2.6"
				alt="grass"
				src={sadhya2}
				class="parallax -right-[10%] h-[90%] brightness-90 absolute  "
			/>
		</div>
	);
}

export default AdaarSadhya;
