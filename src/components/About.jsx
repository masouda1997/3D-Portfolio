import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full ">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[3px] rounded-[20px] shadow-card "
			>
				<div
					// these are the tilt options
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center ">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction </p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dignissimos, iure odit. Explicabo eligendi ut officia non
				perferendis officiis ea itaque in enim, fugiat neque at facere
				soluta? Temporibus, illo id? Animi omnis pariatur quo quasi?
				Odio atque asperiores fugit nobis ipsam quos reiciendis. Culpa
				consequuntur quis minus veniam ipsa laudantium commodi
				cupiditate quos, harum molestiae maxime iure magnam doloribus
				laborum asperiores quam placeat deserunt a. Omnis magni sunt
				recusandae laudantium tempore fugit, quidem aut vitae eum
				consectetur porro quae perferendis.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10 ">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default About;
