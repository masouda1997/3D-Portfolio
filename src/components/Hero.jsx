import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
	return (
		<section className="relative w-full mx-auto h-screen ">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
			>
				{/* purple vertical line */}
				<div className="flex flex-col justify-center items-center mt-5 ">
					<div className="w-5 h-5 bg-[#915eff] rounded-full" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm <span className="text-[#915eff]">Masoud</span>
					</h1>
					<p className={`${styles.heroSubText} text-white-100 mt-2`}>
						I'm a Front-end web developer{" "}
						<br className="sm:block" /> designing 3D user interfaces
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[30px] h-[50px] rounded-3xl border-[3px] border-secondary flex justify-center items-start ">
						<motion.dev
							animate={{
								y: [5, 23, 5],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-4 h-4 rounded-full bg-secondary mb-5 "
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
