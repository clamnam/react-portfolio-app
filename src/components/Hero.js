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

                    <div className="col-span-2 text-white text-3xl">
					My name is Jack I am a student and novice software developer. <br />
						I have a wealth of experience in many different languages and
						Softwares, Python and JavaScript being my particular favorites.
						<br />
						A veteran of the service industry, I have tried and tested
						interpersonal skills and a strong work ethic. <br />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-stone-600 py-4">
                <div className="grid grid-cols-3 gap-4 container">
                    <div className="col-span-2 text-white font-medium text-2xl">
                        <h1 className="text-4xl">My Experience</h1>
                        <br />
                        <p className="my-2">
                            - I have used Python to develop applications and solve logical
                            problems. I really enjoy using Python, and I think its
                            applicability/versatility of the language has meant I could
                            expand my horizons to a great extent
                        </p>
                        <p> - I have used React to develop multiple single-page applications.</p>
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
                <div className="grid grid-cols-3 gap-4 container">
<CanvasComponent/>
                    <div className="col-span-2 text-white font-medium text-2xl">
                        <h1 className="text-4xl">Languages + Softwares I have worked in</h1>
                        <br />
                        <p className="my-2">
                            - I have used Python to develop applications and solve logical
                            problems. I really enjoy using Python, and I think its
                            applicability/versatility of the language has meant I could
                            expand my horizons to a great extent
                        </p>
                        <p> - I have used React to develop multiple single-page applications.</p>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Hero;
