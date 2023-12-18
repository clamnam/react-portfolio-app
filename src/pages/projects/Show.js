import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from "../../assets/data/projects.json";
import { Link } from "react-router-dom";

const Show = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  const tags = project?.tags?.map((tag, i) => (
    <div key={i} className="badge badge-outline badge-primary">
      {tag}
    </div>
  ));

  useEffect(() => {
    setProject(projectsJSON.find((proj) => proj.slug === slug));
  }, [slug]);

  if (!project) return <h1>Project doesn't exist</h1>;

  return (
    <>
      <div className="container">
        <div className="text-6xl flex justify-center font-light py-16 " >
          {project.title}
        </div>
      </div>
      <div className="container">
      <img src={project.images[0].path} alt="visual representation of the course"/>

        <p>
          <b>Title:</b> {project.title}
        </p>
        <p>
          <b>Description:</b> {project.description}
        </p>
        <p>
          <b>Date:</b> {project.date}
        </p>
        <p>
          <b>Tags:</b> {tags}
        </p>
        <p>
          <b>Website:</b> <a href={project.website}>website</a>
        </p>
        <p>
          <b>GitHub:</b> <a href={project.github}>github</a>
        </p>

        {project.demo ? (
          <Link to={`/projects/${project.slug}/demo`}>Demo</Link>
        ) : (
          <p>Demo goes here</p>
        )}
      </div>
    </>
  );
};

export default Show;
