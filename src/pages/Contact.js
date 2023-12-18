import React, { useEffect, useState } from "react";

const Contact = () => {
	const [isNavHidden, setNavHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setNavHidden((prev) => window.scrollY > 0 && window.scrollY > prev);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{/* Title w/ Full width background */}
			<div className="bg-off-white text-light pt-3 img width-auto">
				<div className="container-fluid">
					<div className="container">
						<div className="row pt-5">
							<div>
								<p className="pt-5 mb-5 text-center text-dark display-1 display-title col-12 ">
									About Me
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
