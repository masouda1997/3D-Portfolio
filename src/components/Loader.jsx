import { useProgress, Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
	const { progress } = useProgress();

	return (
		<Html>
			<span className="canvas-load"></span>
			<p
				style={{
					fontSize: 20,
					color: "#8b68fe",
					fontWeight: 700,
					marginTop: 20,
				}}
			>
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default Loader;
