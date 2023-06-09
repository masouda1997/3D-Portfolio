import { Tilt } from "react-tilt";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 45, scale: 1, speed: 40 }}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
			>
				<div className="relative w-full h-[230px] ">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onClick={() =>
								window.open(source_code_link, "_blank")
							}
						>
							<img
								src={github}
								alt={github}
								className="w-1/2 h-1/2 object-cover"
							/>
						</div>
					</div>
				</div>

				<div className="mt-3">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							className={`text-[14px] ${tag.color}`}
							key={tag.name}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My works</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex flex-col">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
					dolore porro obcaecati cupiditate consequatur, officia
					maiores blanditiis illum error ducimus quibusdam molestias
					repudiandae quasi natus quae quaerat, reiciendis ullam
					officiis nobis deleniti non voluptatem iure. Rerum nulla,
					voluptatem tempora debitis, temporibus quae nisi nihil
					repellat atque ex adipisci consequatur perferendis, in quasi
					dolores id numquam! Perspiciatis sunt quasi aliquam cum est,
					et fugit? Cupiditate, eos. Officiis sit in porro!
				</motion.p>
				<div className="mt-20 flex flex-wrap gap-7">
					{projects.map((p, index) => (
						<ProjectCard
							key={`project-${index}`}
							index={index}
							{...p}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
