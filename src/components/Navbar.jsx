import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
	const [active, setActive] = useState(" ");
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
		>
			<div className="w-full font-bold flex justify-between items-center max-w-7xl mx-auto ">
				<Link
					to="/"
					className="flex s items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-9 h-9 object-contain "
					/>
					<p className="text-white text-[18px] h-9 cursor-pointer">
						Masoud
						<span className="sm:block hidden">
							| Front-end Developer
						</span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-white"
									: "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer `}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
