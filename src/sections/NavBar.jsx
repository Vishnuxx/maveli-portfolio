import { For } from "solid-js";

function Navbar({ data = {} }) {
	return (
		<div class="flex flex-row justify-center p-5 w-full text-white z-10 text-[1.2rem] absolute top-0 left-0">
			<For each={Object.keys(data)}>
				{(key, index) => {
					return (
						<div class="p-6 cursor-pointer">
							<a
								href={data[key]}
								class="p-2  border-green-500 font-semibold text-[#909090] transition-all duration-100 hover:text-white rounded-sm hover:border-b-2"
							>
								{key}
							</a>
						</div>
					);
				}}
			</For>
		</div>
	);
}

export default Navbar;
