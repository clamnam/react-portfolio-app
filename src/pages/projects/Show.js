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
    <div className="container mx-auto">
      
                  <div className="text-6xl flex justify-center font-normal py-16 " >
          {project.title}
        </div>


      <div className="grid md:grid-cols-2 gap-8 container">
      <div>
          <img
            src={project.images[0].path}
            alt="visual representation of the course"
            className="w-full"
          />
        </div>
        <div>
          <div>
            <p className="text-xl mb-4 ">
              {project.description}
            </p>
            <div className=" my-2">   
                      {tags}
</div>
            <p>
              <b>Date:</b> {project.date}
            </p>
            
            
            

          </div>
        </div>

      </div>
      <br/>

      <div className="container flex justify-center gap-2">  




            <p>
              <a className="font-semibold hover:underline" href={project.github}>Github</a>
            </p>
            {project.website &&(
              <a className='font-semibold hover:underline' href={`${project.website}`}>Website</a>
            )}
            {project.demo && (
              <Link className='font-semibold hover:underline' to={`/projects/${project.slug}/demo`}>Demo</Link>
            ) }</div>

    </div>
  );
};

export default Show;
