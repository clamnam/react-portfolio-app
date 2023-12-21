import React, { useState } from "react";
import projectsJSON from "../../assets/data/projects.json";
import ProjectCard from "../../components/ProjectCard";

const Index = () => {
	const [projects, setProjects] = useState(projectsJSON);
	const [filteredProjects, setFilteredProjects] = useState(projectsJSON);
	const [selectedOption, setSelectedOption] = useState("All");

	const projectList = filteredProjects.map((project, i) => {
		return <ProjectCard key={i} project={project} cardKey={i} />;
	});

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
		"Rest Client",
		"API",
		"CSS",
		"Tailwind",
        "Python"
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
					>
					</button>
					<div className=" flex justify-center my-3">

							{tags.map((option) => (
								<div
									key={option}
									className="badge mx-1 cursor-pointer p-3 badge-outline "
									role="menuitem"
									onClick={() => filterProjects(option)}
								>
									{option}
								</div>
							))}
					</div>

				</div>
			</div>


			<div className="">{projectList}</div>
		</div>
	);
};

export default Index;
