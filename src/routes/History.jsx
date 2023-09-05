import MaveliProfile from "../sections/MaveliProfile";

function History() {
    let root;
    return (
			<div ref={root} class="w-full h-full overflow-y-scroll">
				<MaveliProfile root={root}></MaveliProfile>
				<div class="h-full w-fit md:px-20 md:py-[200px] p-4 ">
					<h3 class="text-white text-[2rem] font-bold py-5 md:text-[3rem]">
						Introduction
					</h3>
					<p class="text-white text-[1rem] md:text-[1.5rem] ">
						I am Maveli, also known as Mahabali, a name that resonates through
						the annals of Kerala's rich history. Allow me to take you on a
						journey through my life and the legends that surround it.
					</p>
					<h3 class="text-white text-[2rem] font-bold py-5 md:text-[3rem]">
						My History
					</h3>
					<p class="text-white text-[1rem] md:text-[1.5rem] ">
						I was born into a time when Kerala flourished under my benevolent
						rule. As a king, I cherished the welfare of my subjects above all
						else. During my reign, there was no room for poverty, injustice, or
						sorrow in my beloved kingdom. Kerala, known then as the land of
						harmony, prosperity, and equality, thrived under my leadership.
						However, legends are often shaped by twists of fate, and mine was no
						different. My unwavering devotion and dedication attracted the
						attention of the divine. Lord Vishnu, in the guise of a dwarf
						Brahmin named Vamana, came to test my humility. Little did I know
						that this encounter would forever alter the course of my life.
					</p>
					<h3 class="text-white text-[2rem] font-bold py-5 md:text-[3rem]">
						The Vamana Avatar
					</h3>
					<p class="text-white text-[1rem] md:text-[1.5rem] ">
						One fateful day, Vamana requested a simple gift: three paces of
						land. Being a generous and compassionate ruler, I readily agreed to
						his modest request. However, in an extraordinary turn of events,
						Vamana expanded to cover the earth and the heavens in just two
						steps. Realizing his divine nature, I offered my own head as a
						resting place for his third step.
					</p>
					<h3 class="text-white text-[2rem] font-bold py-5 md:text-[3rem]">
						The Banishment and Blessing
					</h3>
					<p class="text-white text-[1rem] md:text-[1.5rem] ">
						Despite my noble sacrifice, I was banished to the netherworld
						(Patala) as a result of Vamana's actions. Yet, Lord Vishnu, moved by
						my unwavering devotion, granted me a unique boon. He allowed me to
						visit my beloved Kerala once a year, an occasion that would become
						the grand festival of Onam.
					</p>
                    
				</div>
			</div>
		);
}

export default History;