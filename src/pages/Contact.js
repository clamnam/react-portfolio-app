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
						<div className="flex justify-center">
							<div>
								<p className="text-6xl flex justify-center font-light py-16 ">
									Contact Details
										</p>
										<p className="pb-16 text-xl flex justify-center"> If you wish to contact me, please do so via email.</p>

										<a href="https://www.linkedin.com/in/jackmob/" className="hover:underline unde flex text-xl justify-center">LinkedIn</a>
										<a href="clamnam@protonmail.com" className="hover:underline unde flex text-xl justify-center">Email</a>
										<a href="https://github.com/clamnam" className="hover:underline unde flex text-xl justify-center"> Github</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
