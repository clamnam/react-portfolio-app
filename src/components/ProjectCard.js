import { Link } from "react-router-dom";

const ProjectCard = (props) => {
	const project = props.project;

	const tags = project.tags.map((tag, i) => {
		return (
			<div key={i}
				className="btn btn-ghost border-solid hover:border-primary p-2 mr-1 mt-3 xs:mt-0 cursor-pointer hover:btn-primary badge-outline "
				onClick={() => props.filterProjects(tag)}>
				# {tag}
			</div>
		);
	});
	let card;
	if (props.cardKey % 2 === 0) {
		card = (
			<div className={`container-fluid  bg-neutral py-4`}>
				
				<div className="xl:grid grid-cols-3 gap-4 sm:container">
					<div className="text-white  col-span-1 font-medium  flex content-center">
						<img
							src={project.images[0].path}
							alt={project.images[0].caption}
							className="mx-auto w-500 h-500"
						/>
					</div>

					<div className="col-span-2 text-white m-4 sm:m-0">
						<h2 className=" hover:underline underline-offset-8">
							<Link
								className="justify-end p-0 text-4xl "
								to={`/projects/${project.slug}`}
							>
								{project.title}
							</Link>
						</h2>
						{tags}
						<br />

						<p className="text-lg line-clamp-5">{project.description}</p>

						<div className="w-full flex  bottom-0 ">
							{project.website ? (
								<Link
									to={project.website}
									target="_blank"
									rel="noreferrer"
									className="btn m-2 hover:btn-neutral bg-neutral-900"
								>
									Website
								</Link>
							) : (
								""
							)}

							{project.github ? (
								<Link
									to={project.github}
									target="_blank"
									rel="noreferrer"
									className="btn m-2 hover:btn-neutral bg-neutral-900 flex justify-self-end	"
								>
									GitHub
								</Link>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		card = (
			<div className={`container-fluid py-4 bg-neutral-900`}>
				<div className="xl:grid grid-cols-3 gap-4 sm:container">
					<div className="col-span-2 text-white text-4xl m-4 sm:m-0">
						<h2 className="text-3xl hover:underline underline-offset-8">
							<Link
								className="justify-end p-0 text-4xl   "
								to={`/projects/${project.slug}`}
							>
								{" "}
								{project.title}
							</Link>
						</h2>
						{tags}
						<br />

						<p className="text-lg line-clamp-5">{project.description}</p>
						<div className="w-full flex xl:justify-end self-end  align-bottom inset-x-0 bottom-0 ">
							{project.website ? (
								<Link
									to={project.website}
									target="_blank"
									rel="noreferrer"
									className="btn m-2 bg-neutral"
								>
									Website
								</Link>
							) : (
								""
							)}

							{project.github ? (
								<Link
									to={project.github}
									target="_blank"
									rel="noreferrer"
									className="btn m-2  bg-neutral"
								>
									GitHub
								</Link>
							) : (
								""
							)}
						</div>
					</div>
					<div className="text-white col-span-1 font-medium flex content-center">
						<img
							src={project.images[0].path}
							alt={project.images[0].caption}
							className="mx-auto w-500 h-500"
						/>
					</div>
				</div>
			</div>
		);
	}

	return <div>{card}</div>;
};

export default ProjectCard;
