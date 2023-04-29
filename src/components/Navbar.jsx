import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
	const [active, setActive] = useState(" ");
	const [toggle, setToggle] = useState(false);
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
						className="w-12 h-12 object-contain "
					/>
					<p className="text-white text-[18px] cursor-pointer md:flex ">
						Masoud &nbsp;
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

				{/* toggle menu */}
				<div className="sm:hidden flex justify-end items-center flex-1">
					<img
						className="w-[28px] h-[28px] object-contain cursor-pointer "
						onClick={() => setToggle(!toggle)}
						alt="menu"
						src={toggle ? close : menu}
					/>
				</div>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
				>
					<ul className="list-none flex sm:flex flex-col items-end gap-4 justify-center">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title
										? "text-white"
										: "text-secondary"
								} font-poppins font-medium cursor-pointer text-[16px] `}
								onClick={() => {
									setToggle(!toggle);
									setActive(link.title);
								}}
							>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
