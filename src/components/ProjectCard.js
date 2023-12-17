import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {

  const tags = project.tags.map((tag, i) => {
    return <div key={i} className="badge  text-black bg-green-500">{tag}</div>;
  });

  return (
    <div className="card w-96 bg-zinc-800 m-5  shadow-xl">
    <figure><img src={project.images[0].path} alt={project.images[0].caption} /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {project.title}
      </h2>
      <p>{project.description}</p>
      <div className="card-actions ">
        {tags}
        <br/>
    <div className='w-full'>
        {(project.website) ? (<Link to={project.website} target="_blank" rel="noreferrer" className="btn mr-2 btn-primary">Website</Link>) : ""}

        {(project.github) ? (<Link to={project.github} target="_blank" rel="noreferrer" className="btn  btn-primary">GitHub</Link>) : ""}
        </div>
        <Link className='justify-end btn ' to={`/projects/${project.slug}`}>Take a look</Link>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;