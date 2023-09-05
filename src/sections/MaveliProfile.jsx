import { onMount } from "solid-js";

import bg from "../assets/maveli6-bg.png";
import maveli from "../assets/maveli6 copy.png";
import layer1 from "../assets/maveli6-flowerlayer.png";
import bananaleaves from "../assets/bananaleaves.png";
import grass from "../assets/grass.png";
import Particles from "./Particles";
import { parallaxer } from "../utils/parallaxer";

function MaveliProfile({ id, root }) {
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
			class="bg-[#0a1206] snap-start w-screen h-screen relative overflow-hidden"
		>
			<img
				data-speed="1.5"
				id="bg"
				src={bg}
				alt="bg"
				class="parallax absolute bottom-0 h-[140%]  w-[140%] object-cover"
			/>
			<img
				data-speed="1.4"
				id="leaves"
				src={bananaleaves}
				alt="leaves"
				class="parallax absolute -left-20 md:-left-0 md:top-0 top-[200px]   h-[50%] w-fit object-cover  brightness-[0.2]"
			/>
			<div
				data-speed="1.3"
				class="parallax absolute w-full h-[40%] flex flex-col justify-center items-center p-5 box-border"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="363"
					height="133"
					viewBox="0 0 363 133"
					fill="none"
				>
					<g filter="url(#filter0_d_30_45)">
						<path
							d="M95.8241 82.44L82.0961 31.368H81.3281L70.8641 81L62.2241 82.44L41.3921 35.112H40.8161L39.2801 81L29.6801 81.48L34.1921 18.6L57.4241 17.64L67.1201 63.336L78.3521 17.16L101.584 18.6L104.464 81L95.8241 82.44Z"
							fill="#8F5600"
						/>
						<path
							d="M125.148 83.208C124.06 83.208 123.26 83.176 122.748 83.112C120.572 81.64 118.812 79.464 117.468 76.584C116.188 73.64 115.548 70.6 115.548 67.464C115.548 63.368 117.084 60.392 120.156 58.536C123.292 56.68 129.02 55.752 137.34 55.752C140.412 55.752 143.612 55.976 146.94 56.424L146.748 54.312C146.492 51.752 145.276 49.736 143.1 48.264C140.924 46.728 138.14 45.96 134.748 45.96C131.356 45.96 127.964 47.016 124.572 49.128L120.348 35.208C125.852 32.968 132.124 31.848 139.164 31.848C146.204 31.848 151.772 33.448 155.868 36.648C159.964 39.784 162.012 44.712 162.012 51.432C162.012 52.968 161.948 54.184 161.82 55.08L159.132 81.576L149.628 82.44L148.188 68.52H147.42C145.244 73.128 142.236 76.744 138.396 79.368C134.556 81.928 130.14 83.208 125.148 83.208ZM147.324 60.456L142.236 60.36C138.012 60.36 134.556 60.584 131.868 61.032C130.972 62.824 130.524 64.424 130.524 65.832C130.524 67.24 130.716 68.584 131.1 69.864C131.484 71.144 131.9 72.008 132.348 72.456C140.028 71.24 145.02 67.24 147.324 60.456Z"
							fill="#8F5600"
						/>
						<path
							d="M191.299 31.752L197.635 68.52H198.403L210.787 32.04L218.563 34.152L199.843 81.192L192.067 82.44L170.755 34.92L191.299 31.752Z"
							fill="#8F5600"
						/>
						<path
							d="M244.158 29.256C259.646 35.464 267.39 43.176 267.39 52.392C267.39 57.192 266.014 60.68 263.262 62.856C260.574 64.968 255.55 66.024 248.19 66.024C243.518 66.024 239.678 65.672 236.67 64.968C235.454 67.976 234.846 71.112 234.846 74.376C237.726 74.76 240.99 74.952 244.638 74.952C251.294 74.952 257.566 73.896 263.454 71.784L266.334 81.096C261.662 82.568 256.414 83.304 250.59 83.304C240.222 83.304 232.606 81.416 227.742 77.64C226.718 73.096 226.206 68.808 226.206 64.776C226.206 56.712 227.966 49.448 231.486 42.984C235.07 36.52 239.294 31.944 244.158 29.256ZM238.59 60.456C239.422 60.52 241.502 60.552 244.83 60.552C248.222 60.552 252.094 60.104 256.446 59.208C256.638 57.992 256.734 56.776 256.734 55.56C256.734 51.72 255.678 48.04 253.566 44.52C247.23 48.744 242.238 54.056 238.59 60.456Z"
							fill="#8F5600"
						/>
						<path
							d="M284.304 82.44L279.408 15.432L299.952 12.264L293.808 81.576L284.304 82.44Z"
							fill="#8F5600"
						/>
						<path
							d="M318.241 82.44L313.345 34.92L333.889 31.752L327.745 81.576L318.241 82.44ZM316.321 24.264C314.593 22.472 313.729 20.36 313.729 17.928C313.729 15.496 314.593 13.416 316.321 11.688C318.113 9.896 320.225 9 322.657 9C325.089 9 327.169 9.896 328.897 11.688C330.689 13.416 331.585 15.496 331.585 17.928C331.585 20.36 330.689 22.472 328.897 24.264C327.169 25.992 325.089 26.856 322.657 26.856C320.225 26.856 318.113 25.992 316.321 24.264Z"
							fill="#8F5600"
						/>
						<path
							d="M93.4098 83.089C93.7437 84.3314 94.966 85.1175 96.2351 84.906L104.875 83.466C106.124 83.2579 107.02 82.1493 106.961 80.8847L104.081 18.4847C104.023 17.2097 103.013 16.1838 101.739 16.1048L78.5067 14.6648C77.2979 14.5899 76.2092 15.3923 75.9229 16.5691L67.2863 52.0751L59.8696 17.1211C59.6165 15.928 58.5394 15.0918 57.3208 15.1421L34.0888 16.1021C32.8182 16.1546 31.7895 17.1526 31.6985 18.4211L27.1865 81.3011C27.1352 82.0151 27.3925 82.7169 27.8932 83.2285C28.3939 83.7402 29.0899 84.0126 29.8049 83.9769L39.4049 83.4969C40.7032 83.432 41.7352 82.3829 41.7787 81.0836L42.9883 44.9442L59.9359 83.4472C60.3964 84.4933 61.5076 85.0939 62.6351 84.906L71.275 83.466C72.2902 83.2968 73.098 82.5228 73.3103 81.5157L81.9596 40.4911L93.4098 83.089ZM121.347 85.1827C121.673 85.4034 122.047 85.5439 122.437 85.5927C123.113 85.6771 124.043 85.708 125.148 85.708C130.591 85.708 135.498 84.3044 139.782 81.4481L139.806 81.4321C142.327 79.7096 144.51 77.6065 146.359 75.1402L147.141 82.6973C147.282 84.0586 148.491 85.0536 149.854 84.9297L159.358 84.0657C160.55 83.9574 161.498 83.0192 161.619 81.8283L164.302 55.3806C164.449 54.3229 164.512 52.9909 164.512 51.432C164.512 44.1952 162.283 38.4164 157.397 34.6704C152.73 31.0283 146.56 29.348 139.164 29.348C131.859 29.348 125.258 30.5103 119.405 32.8924C118.209 33.3794 117.58 34.6978 117.955 35.9339L122.179 49.8539C122.405 50.5979 122.964 51.1945 123.692 51.4681C124.419 51.7417 125.233 51.6612 125.893 51.2502C128.96 49.3406 131.9 48.46 134.748 48.46C137.765 48.46 140.006 49.1405 141.658 50.3064C141.671 50.316 141.685 50.3254 141.699 50.3347C142.976 51.1985 143.746 52.2524 144.089 53.5804C141.783 53.3619 139.534 53.252 137.34 53.252C133.098 53.252 129.443 53.4878 126.404 53.9802C123.392 54.468 120.831 55.2314 118.882 56.3846L118.863 56.3962C114.924 58.7761 113.048 62.6396 113.048 67.464C113.048 70.9512 113.761 74.3299 115.175 77.5808C115.184 77.6011 115.193 77.6212 115.202 77.6412C116.697 80.8449 118.725 83.4089 121.347 85.1827ZM193.763 31.3275C193.531 29.9837 192.266 29.0734 190.918 29.2812L170.374 32.4492C169.603 32.5681 168.932 33.0402 168.559 33.7256C168.186 34.411 168.155 35.2311 168.474 35.943L189.786 83.463C190.249 84.4949 191.347 85.0876 192.463 84.9084L200.239 83.6604C201.109 83.5209 201.84 82.9344 202.166 82.1164L220.886 35.0764C221.149 34.4145 221.118 33.6717 220.799 33.0345C220.481 32.3972 219.906 31.9261 219.218 31.7394L211.442 29.6274C210.168 29.2813 208.844 29.9859 208.42 31.2364L198.687 59.9053L193.763 31.3275ZM245.088 26.9355C244.392 26.6562 243.606 26.7048 242.949 27.0679C237.559 30.0464 233.038 35.0292 229.3 41.7717L229.291 41.7884C225.552 48.6535 223.706 56.3352 223.706 64.776C223.706 69.0188 224.245 73.4924 225.303 78.1896C225.431 78.7553 225.751 79.2592 226.209 79.6148C231.723 83.8952 240.012 85.804 250.59 85.804C256.622 85.804 262.13 85.0419 267.086 83.4805C268.398 83.0671 269.129 81.6715 268.723 80.3573L265.843 71.0453C265.641 70.3935 265.182 69.8523 264.571 69.5475C263.961 69.2426 263.252 69.2004 262.61 69.4308C257.01 71.4396 251.025 72.452 244.638 72.452C242.021 72.452 239.628 72.3508 237.453 72.152C237.595 70.6828 237.879 69.2455 238.305 67.8377C241.132 68.303 244.437 68.524 248.19 68.524C251.976 68.524 255.256 68.2537 257.993 67.6785C260.708 67.1078 263.048 66.2041 264.807 64.8218L264.813 64.817C268.366 62.0079 269.89 57.6569 269.89 52.392C269.89 41.4938 260.707 33.1959 245.088 26.9355ZM281.81 82.6222C281.859 83.2911 282.175 83.9124 282.686 84.3463C283.198 84.7802 283.862 84.9905 284.53 84.9297L294.034 84.0657C295.238 83.9563 296.191 83.001 296.298 81.7967L302.442 12.4847C302.51 11.7195 302.222 10.9655 301.661 10.4401C301.101 9.91465 300.33 9.67612 299.571 9.79321L279.027 12.9612C277.739 13.1598 276.819 14.3145 276.914 15.6142L281.81 82.6222ZM315.754 82.6962C315.895 84.058 317.104 85.0537 318.467 84.9297L327.971 84.0657C329.143 83.9592 330.082 83.0499 330.226 81.882L336.37 32.058C336.466 31.2805 336.192 30.5031 335.63 29.9577C335.068 29.4122 334.282 29.1618 333.508 29.2812L312.964 32.4492C311.648 32.6522 310.722 33.8514 310.858 35.1762L315.754 82.6962ZM314.521 25.9993C314.542 26.0212 314.564 26.0426 314.586 26.0636C316.831 28.2291 319.561 29.356 322.657 29.356C325.756 29.356 328.471 28.2261 330.665 26.0318C332.904 23.7929 334.085 21.0535 334.085 17.928C334.085 14.8144 332.911 12.1012 330.665 9.91997C328.484 7.67363 325.771 6.5 322.657 6.5C319.532 6.5 316.792 7.68138 314.553 9.92023C312.359 12.1145 311.229 14.8294 311.229 17.928C311.229 21.0241 312.356 23.7536 314.521 25.9993ZM133.585 63.3074C135.89 63.0149 138.757 62.8607 142.212 62.86L143.488 62.8841C142.614 64.3586 141.544 65.5869 140.288 66.5931C138.549 67.9869 136.361 69.0266 133.658 69.656C133.605 69.5025 133.55 69.3327 133.494 69.1456C133.184 68.1109 133.024 67.0098 133.024 65.832C133.024 65.1721 133.182 64.3381 133.585 63.3074ZM244.83 58.052C244.198 58.052 243.616 58.0508 243.081 58.0485C245.715 54.3248 248.909 51.0482 252.672 48.2158C253.722 50.609 254.234 53.052 254.234 55.56C254.234 56.0737 254.215 56.5878 254.177 57.1025C250.672 57.7418 247.56 58.052 244.83 58.052Z"
							stroke="#462A00"
							stroke-width="5"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_30_45"
							x="0.680054"
							y="0"
							width="362.209"
							height="132.304"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="20" />
							<feGaussianBlur stdDeviation="12" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_30_45"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_30_45"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
				{/* <h1 class=" text-amber-800 font-black text-[4rem] md:text-[5rem] text-center">
					മാവേലി Maaveli
				</h1> */}
				<h2 class=" text-center text-amber-950 font-bold md:text-[2.1rem] text-[1.3rem]">
					The Legendary King of Onam
				</h2>
			</div>

			<img
				data-speed="1.2"
				id="maveli"
				src={maveli}
				alt="maveli"
				class="parallax absolute -bottom-10  min-w-[400px]  h-[80%] w-[90%] object-contain"
			/>
			<Particles
				data-speed="1.1"
				class="parallax h-screen w-screen top-0 absolute"
			></Particles>

			<img
				data-speed="0.95"
				id="flowers"
				src={layer1}
				alt="flowers"
				class="parallax absolute -bottom-[100px] w-full h-full object-cover"
			/>

			
		
		</div>
	);
}

export default MaveliProfile;