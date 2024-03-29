import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState(null);

  const { slug } = useParams();

  const tags = project?.tags?.map((tag, i) => (
    <div key={i} className="btn btn-ghost border-solid hover:border-primary p-2 mr-1  cursor-pointer hover:btn-primary badge-outline ">
      # {tag}
    </div>
  ));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://port-data-5e763-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter and find the specific project based on slug
    const foundProject = projects?.find((p) => p.slug === slug);
    setProject(foundProject);
  }, [slug, projects]);

  if (!project) return <h1>Project doesn't exist</h1>;

  return (
    <div className="container  ">
      <div className="text-6xl flex justify-center font-normal py-16 mx-4 xs:mx-0">
        {project.title}
      </div>

      <div className="grid  md:grid-cols-2 gap-0 md:gap-8 container">
        <div>
          <img
            src={project.images[0].path}
            alt="visual representation of the course"
            className="w-full"
          />
          <div className="mx-4 xs:mx-0">
          {tags}
          </div>
        </div>
        <div>
          <div>
            <div className="text-xl  mx-4 xs:mx-0">{project.description}</div>
            <p className="m-4 xs:m-0">
              <b>Date:</b> {project.date}
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="container flex justify-center gap-2 ">
        <p>
          <a className="font-semibold hover:underline" href={project.github}>
            Github
          </a>
        </p>
        {project.website && (
          <a
            className="font-semibold hover:underline"
            href={`${project.website}`}
          >
            Website
          </a>
        )}
        {project.demo && (
          <Link
            className="font-semibold hover:underline"
            to={`/projects/${project.slug}/demo`}
          >
            Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default Show;
