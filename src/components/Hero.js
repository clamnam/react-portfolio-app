import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CanvasComponent from "../assets/p5";

const Hero = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="container">
				<div className="text-6xl flex justify-center font-light py-16">
					About Me
				</div>
			</div>

			<div className="container-fluid bg-orange-600 py-4">
				<div className="grid grid-cols-3 gap-4 container">
					<div className="text-white col-span-1 font-medium text-2xl">
						<img
							className="w-full"
							src={require("../assets/images/profile.jpeg")}
							alt="github icon"
						/>
					</div>

					<div className="col-span-2 text-white text-4xl">
						<h2 className="my-2">
							My name is Jack, I am a Full Stack software developer.
						</h2>
						<h2 className="mb-2">
							I have a wealth of experience in many different languages and
							Softwares, Python and JavaScript being my particular favorites.
						</h2>
						<h2 className="mb-2">
							My interests are long distance running and reading.
						</h2>
						<h2 className="mb-2">
							A veteran of the service industry, I have tried and tested
							interpersonal skills and a strong work ethic.{" "}
						</h2>
					</div>
				</div>
			</div>

			<div className="container-fluid bg-stone-600 py-4">
				<div className="grid grid-cols-3 gap-4 container">
                <div className="col-span-2 text-white font-medium text-2xl">
						<h1 className="text-4xl">Languages + Softwares I have worked in</h1>
						<br />
						<p className="mb-2">
                        I have used Python to develop applications and solve logical
							problems. I really enjoy using Python, and I think its
							applicability/versatility of the language has meant I could expand
							my horizons to a great extent
						</p>
						<p className="mb-2">
                            I have successfully developed multiple React single-page
							applications (SPAs) that seamlessly integrate with APIs, providing
							robust functionality for sorting, searching, and full CRUD
							operations on both standalone and joined data points. I utilized
							React Hooks for efficient state management. Using the Tailwind and
							Bootstrap frameworks to ensure dynamic and responsive designs
							across various breakpoints. Additionally, I implemented advanced
							techniques using React Router, and context drilling .{" "}	
							<p className="mb-2">I have also worked in R, Java, and PHP maintaining a high level of profficiency.</p>
					</p>
					</div>

					<div className="text-white col-span-1 font-medium text-2xl">
                    <Link to={"https://github.com/clamnam"}>
							<img
								alt="github icon"
								className="w-full"
								src={require("../assets/images/github-mark.png")}
							/>
						</Link>	
					</div>
                    
				</div>
			</div>

			<div className="container-fluid bg-orange-600 py-4">
				<div className="lg:grid lg:grid-cols-3 gap-4 container">
					<div className="lg:col-span-1 flex justify-center">
                        <a href="https://www.linkedin.com/in/jackmob/">
                        <CanvasComponent />
                        </a>
					</div>
					<div className="col-span-2 text-white font-medium text-2xl">
						<h1 className="text-4xl">Education and Certifications</h1>
						<br />
						<p className="mb-2">
                            I am a third year student of Creative Computing where I gained a comprehensive knowledge of todays digital landscape. Developing skills in Programming end to end solutions, Networking and databases
						</p>
						<p className="mb-2">
                        Cisco Network Essentials completed with distinction on 06/12/2023
					</p>
                    <p className="mb-2">
                        AWS Cloud Foundations completed with distinction 14/12/2023
					</p>
                    <p className="mb-2">
                    <a className="underline " href="https://www.linkedin.com/in/jackmob/">Check out</a> the various Linkedin Learning course certifications
					</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
