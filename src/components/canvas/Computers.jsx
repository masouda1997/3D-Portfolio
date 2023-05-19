import React, { Suspense, useEffect, useState } from "react";
//use for empty canvas
import { Canvas } from "@react-three/fiber";
// helpers for  draw on canvas and GLTF allow us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const [lightOnOff, setLightOnOff] = useState(false);

	// 3d Model
	const computer = useGLTF("./desktop_pc/scene.gltf");
	return (
		<mesh onClick={() => setLightOnOff(!lightOnOff)}>
			<hemisphereLight intensity={0.3} groundColor="red" />

			{lightOnOff ? (
				<>
					<pointLight intensity={0.3} />
					<spotLight
						position={[-20, 50, 10]}
						angle={0.2}
						penumbra={1}
						intensity={0.5}
						castShadow
						shadow-mapSize={1024}
					/>
				</>
			) : (
				<pointLight intensity={0} />
			)}
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.5 : 0.7}
				position={[1, -2.5, -2]}
				rotation={[-0.01, -1.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setisMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width:980px)");

		setisMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => {
			setisMobile(e.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 0, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			{/* ****************************************************** */}
			{/* ****************************************************** */}
			{/* ********* if crash you must fix Canvas loader ******** */}
			{/* ****************************************************** */}
			{/* ****************************************************** */}

			<Suspense fallback={<CanvasLoader />}>
				{/* orbits lets us to move the model */}
				<OrbitControls
					enableZoom={false}
					// line below let you move model around specific axis not every direction
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
