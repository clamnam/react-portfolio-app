import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CanvasComponent from "../assets/p5";

const Hero = () => {
	const [canvasSize, setCanvasSize] = useState(500); // Default size

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth >= 1024) {
				setCanvasSize(360);
			} else if (screenWidth >= 640) {
				setCanvasSize(screenWidth * 0.75);
			} else {
				setCanvasSize(screenWidth);
			}
		};

		// Initial size calculation
		handleResize();

		// Listen for window resize events
		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const PhoneViewTop = () => {
		return (
			<>
				
				<div className="text-white col-span-1 font-medium text-2xl">
					<img
						className="w-full sm:hidden "
						src={require("../assets/images/profile.JPG")}
						alt="me"
					/>
				</div>
				<div className="container">
					<div className="text-6xl hidden sm:flex justify-center font-light py-16">
						About Me
					</div>
				</div>
			</>
		);
	};
	return (
		<div>
			<PhoneViewTop />

			<div className="container-fluid  bg-orange-600 py-4">
				<div className="lg:grid grid-cols-3 gap-4 container">
					<div className="text-white col-span-1 font-medium text-2xl flex justify-center items-center">
						<img
							className="  hidden sm:flex"
							src={require("../assets/images/profile.JPG")}
							alt="github icon"
						/>
					</div>

					<div className="col-span-2 text-white ">
						<h2 className="my-2 text-4xl mx-4 xs:mx-0">
							My name is Jack, I am a Full Stack software developer.
						</h2>
						<h2 className="mb-2 text-lg mx-4 xs:mx-0">
							I have a wealth of experience in many different languages and
							Softwares, Python and JavaScript being my particular favorites.
						</h2>
						<h2 className="mb-2 text-lg mx-4 xs:mx-0">
							My interests are long distance running and reading.
						</h2>
						<h2 className="mb-2 text-lg mx-4 xs:mx-0">
							A veteran of the service industry, I have tried and tested
							interpersonal skills and a strong work ethic.
						</h2>
					</div>
				</div>
			</div>

			<div className="container-fluid text-white bg-stone-900 py-4">
				<div className="lg:grid grid-cols-3 gap-4 container">
					<div className="col-span-2 font-medium text-2xl">
						<h1 className="text-5xl mx-4 xs:mx-0">Experience</h1>
						<br />
						<p className="mb-2 text-lg mx-4 xs:mx-0">
							I have taught myself Python and I think its
							applicability/versatility of the language has meant I could expand
							my horizons to a great extent.
						</p>
						<p className="mb-2 text-lg mx-4 xs:mx-0">
							I have successfully developed multiple React that have seamless
							and beautiful form and functionality. I utilized React Hooks for
							efficient state management. Using the Tailwind and Bootstrap
							frameworks to ensure dynamic and responsive designs across various
							breakpoints. Additionally, I implemented advanced techniques using
							React Router, and context drilling .
							<br/>
							I have also worked in R, Java, and PHP maintaining a high level
								of profficiency.
			
						</p>
					</div>

					<div className="text-white col-span-1 font-medium text-2xl flex justify-center items-center">
						<img
							className="  hidden sm:flex"
							src={require("../assets/images/Tab-Overload.jpg")}
							alt="github icon"
						/>
					</div>
				</div>
				<div className="text-white sm:hidden col-span-1 font-medium text-2xl flex justify-center items-center">
					<Link to={"https://github.com/"}>
						<img
							alt="github icon"
							className="w-screen"
							src={require("../assets/images/portfolio.jpg")}
						/>
					</Link>
				</div>
			</div>

			<div className="container-fluid bg-orange-600 py-4">
				<div className="lg:grid grid-cols-3 gap-4 container">
					<div className=" col-span-1 flex justify-center" >
						<a href="https://www.linkedin.com/in/jackmob/">
							<CanvasComponent size={canvasSize} className=" " />
						</a>
					</div>
					<div className="col-span-2 text-white font-medium ">
						<h1 className="text-4xl mx-4 xs:mx-0">Education and Certifications</h1>
						<br />
						<p className="mb-2 text-lg mx-4 xs:mx-0 ">
							I am a third year student of Computing where I gained a
							comprehensive knowledge of todays digital landscape. Developing
							skills in Programming end to end solutions, Networking and
							databases
						</p>
						<p className="mb-2 text-lg mx-4 xs:mx-0">
							Cisco Network Essentials completed with distinction on 06/12/2023
						</p>
						<p className="mb-2 text-lg mx-4 xs:mx-0">
							AWS Cloud Foundations completed with distinction 14/12/2023
						</p>
						<p className="mb-2 text-lg mx-4 xs:mx-0">
							<a
								className="underline "
								href="https://www.linkedin.com/in/jackmob/"
							>
								Check out 
							</a>
							&nbsp;
							the various Linkedin Learning course certifications
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
