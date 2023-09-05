import { onCleanup, onMount } from "solid-js";
import Maveli from "./sections/Maveli";
import Sadhya from "./sections/Sadhya";
import Lake from "./sections/Lake";
import AdaarSadhya from "./sections/AdaarSadhya";
import Hero from "./sections/Hero";
import Countdown from "./sections/Countdown";

function App() {
	let root;

	return (
		<div
			ref={root}
			class="h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory"
		>
			<Hero root={root}></Hero>
			<Maveli root={root} id="mavelisection"></Maveli>
			<AdaarSadhya root={root}></AdaarSadhya>
			<Sadhya root={root}></Sadhya>
			<Lake root={root}></Lake>
			<div
				id="section"
				class="snap-start h-full w-full bg-[#071607] p-10  flex flex-col justify-center items-center"
			>
				<Countdown></Countdown>
			</div>
			
		</div>
	);
}

export default App;
