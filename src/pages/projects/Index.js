import { useState } from 'react';

import projectsJSON from '../../assets/data/projects.json';

import ProjectCard from '../../components/ProjectCard';

const Index = () => {
    const [projects, setProjects] = useState(projectsJSON);

    const projectList = projects.map((project, i) => {
        return <ProjectCard key={i} project={project} cardKey={i} />
    });

    return (
        <div className='  justify-items-center'>
            			<div className="container ">
				<div className="text-6xl flex justify-center font-light py-16">My<span> </span>Projects</div>
			</div>
            <div className=''>
            {projectList}
            </div>
        </div>
    );
};

export default Index;