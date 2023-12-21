import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import axios from "axios";

const Index = () => {
	const [projects, setProjects] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [selectedOption, setSelectedOption] = useState("All");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://port-data-5e763-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
				);
				const fetchedProjects = response.data;
				setProjects(fetchedProjects);
				setFilteredProjects(fetchedProjects);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []); 

	const projectList = filteredProjects.map((project, i) => (
		<ProjectCard key={i} project={project} cardKey={i} />
	));

	const filterProjects = (filter) => {
		setSelectedOption(filter);

		if (filter === "All") {
			setFilteredProjects(projects);
		} else {
			const filtered = projects.filter((project) =>
				project.tags.includes(filter)
			);
			setFilteredProjects(filtered);
		}
	};

	const tags = [
		"All",
		"JavaScript",
		"React",
		"HTML",
		"Front-End",
		"API",
		"CSS",
		"Tailwind",
		"Python",
	];

	return (
		<div className="justify-items-center">
			<div className="container">
				<div className="text-6xl flex justify-center font-light py-16">
					My Projects
				</div>
				<div className="relative text-left flex justify-center">
					<button
						type="button"
						className="btn-dropdown"
						onClick={() => filterProjects(selectedOption)}
					></button>
					<div className="flex justify-center my-3">
						{tags.map((option) => (
							<div
								key={option}
								className={`badge mx-1 cursor-pointer  p-3 badge-outline ${
									option === selectedOption ? "selected" : ""
								}`}
								role="menuitem"
								onClick={() => filterProjects(option)}
							>
								{option}
							</div>
						))}
					</div>
				</div>
			</div>
			<div>{projectList}</div>
		</div>
	);
};

export default Index;
