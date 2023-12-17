import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsJSON from "../../assets/data/projects.json";

const Demo = () => {
    const navigate = useNavigate();
	const [project, setProject] = useState(null);

	const { slug } = useParams();


    const App = lazy(() => import(`./${slug}/App`));

	useEffect(() => {
        const proj = projectsJSON.find((project) => project.slug === slug)
        if(!proj){
            navigate('/projects')
        }else if(proj.demo){
        navigate(`/projects/${proj.slug}/demo`)
        
        }else{
            setProject(proj)
        }
        console.log(proj)
    }, [slug,navigate]);

	// if (!project) return <Navigate to='/projects/:slug'/>;

	return( <Suspense>
        <App/>
    </Suspense>)
};
export default Demo;
