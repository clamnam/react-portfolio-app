import { Link } from "react-router-dom";

const ProjectCard = (props) => {
	const project = props.project;
	const tags = project.tags.map((tag, i) => {
		return (
			<div key={i} className="badge m0.5 text-black bg-white">
				{tag}
			</div>
		);
	});
	let card;
	if (props.cardKey % 2 === 0) {
		card = (
				<div
					className={`container-fluid  bg-neutral py-4`}
				>
					<div className="lg:grid grid-cols-3 gap-4 container">
						<div className="text-white m-3 col-span-1 font-medium text-2xl flex content-center">
							<img
								src={project.images[0].path}
								alt={project.images[0].caption}
								className="mx-auto w-500 h-500"
							/>
						</div>

						<div className="col-span-2 text-white text-4xl">
							<h2 className="text-3xl hover:underline underline-offset-8">
								<Link
									className="justify-end p-0 text-5xl "
									to={`/projects/${project.slug}`}
								>
									{project.title}
								</Link>
							</h2>
							{tags}
							<br />

							<p className="text-xl line-clamp-5">{project.description}</p>
							<div className="w-full flex inset-x-0 bottom-0 ">
								{project.website ? (
									<Link
										to={project.website}
										target="_blank"
										rel="noreferrer"
										className="btn mr-2 bg-neutral-900"
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
										className="btn bg-neutral-900 "
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
				<div
					className={`container-fluid py-4 bg-neutral-900`}
				>
					<div className="lg:grid grid-cols-3 gap-4 container">
						<div className="col-span-2 text-white text-4xl">
							<h2 className="text-3xl hover:underline underline-offset-8">
								<Link
									className="justify-end p-0 text-5xl  "
									to={`/projects/${project.slug}`}
								>
									{" "}
									{project.title}
								</Link>
							</h2>
							{tags}
							<br />

							<p className="text-xl line-clamp-5">{project.description}</p>
							<div className="w-full flex inset-x-0 bottom-0 ">
								{project.website ? (
									<Link
										to={project.website}
										target="_blank"
										rel="noreferrer"
										className="btn mr-2 bg-neutral"
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
										className="btn  bg-neutral"
									>
										GitHub
									</Link>
								) : (
									""
								)}
							</div>
						</div>
						<div className="text-white m-3  col-span-1 font-medium text-2xl flex content-center">
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
