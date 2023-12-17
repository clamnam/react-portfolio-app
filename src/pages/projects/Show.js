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
    <div className="container">
      <div className="carousel">
        {project.images &&
          project.images.map((image, i) => (
            <div
              key={i}
              className={`carousel-item${i === 0 ? ' active' : ''}`}
            >
              <img
                title={image.caption}
                src={image.path}
                className="w-full"
                alt={image.caption}
              />
            </div>
          ))}
      </div>

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
  );
};

export default Show;
