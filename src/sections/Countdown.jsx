import { createSignal, onMount } from "solid-js";

function Countdown(props) {
	let ref;
	const [day , setDay] = createSignal(0),
		[hour , setHour] = createSignal(0),
        [minute , setMinute] = createSignal(0),
		[seconds , setSeconds] = createSignal(0);
	onMount(() => {
		startCountdown(17, 9, 2024, ({ days, hours, minutes ,seconds }) => {
            setDay(days)
            setHour(hours)
            setMinute(minutes)
            setSeconds(seconds)
        });
	});
	function startCountdown(day, month, year, tick = () => {}) {
		const timerDisplay = document.getElementById("timer");

		const targetDay = parseInt(day);
		const targetMonth = parseInt(month) - 1; // JavaScript months are 0-based (0 = January)
		const targetYear = parseInt(year);

		const targetDate = new Date(targetYear, targetMonth, targetDay).getTime();

		// Update the countdown every second
		const countdownInterval = setInterval(function () {
			const currentDate = new Date().getTime();
			const timeLeft = targetDate - currentDate;

			if (timeLeft <= 0) {
				clearInterval(countdownInterval);
				timerDisplay.innerHTML = "Countdown expired!";
			} else {
				const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
				tick({ days, hours, minutes, seconds });
			}
		}, 1000);
	}
	return (
		<div class=" flex flex-col space-x-2 h-fit w-fit justify-center text-bold text-white">
			<p class="text-[3rem] w-full text-center p-10 font-bold text-amber-500">
				Waiting for Onam 2024
			</p>
			<div class="flex flex-col  md:flex-row  ">
				<div class="flex flex-col m-3  min-w-[200px]  justify-center items-center border-4 rounded-md p-5">
					<p class="text-[1.9rem] md:text-[2rem] text-center text-gray-500">
						Days
					</p>
					<p class="text-[1.9rem] md:text-[4rem] text-center h-fit">{day()}</p>
				</div>

				<div class="flex flex-col m-3 min-w-[200px] border-4 rounded-md p-5">
					<p class="text-[1.9rem] md:text-[2rem] text-center text-gray-500">
						Hours
					</p>
					<p class="text-[1.9rem] md:text-[4rem] h-fit text-center">{hour()}</p>
				</div>

				<div class="flex flex-col m-3 min-w-[200px] border-4 rounded-md p-5">
					<p class="text-[1.9rem] md:text-[2rem] text-center text-gray-500">
						Minutes
					</p>
					<p class="text-[1.9rem] md:text-[4rem] h-fit text-center">
						{minute()}
					</p>
				</div>

				<div class="flex flex-col m-3 min-w-[100px] border-4 rounded-md p-5">
					<p class="text-[1.9rem] md:text-[2rem] text-center text-gray-500">
						Seconds
					</p>
					<p class="text-[1.9rem] md:text-[4rem] h-fit text-center">
						{seconds()}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Countdown;
