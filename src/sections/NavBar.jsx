import { For } from "solid-js";

function Navbar({ data = {} }) {
	return (
		<div class="flex flex-row justify-center p-5 w-full text-white z-10 text-[1.2rem] absolute top-0 left-0">
			<For each={Object.keys(data)}>
				{(key, index) => {
					return (
						<div class="p-6 cursor-pointer">
							<a
								href={data[key]?.url}
								class="p-2  border-green-500 rounded-sm hover:border-b-2"
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