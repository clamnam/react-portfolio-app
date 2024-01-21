import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="footer p-10  bg-neutral-900 text-neutral-content flex justify-center  text-lg">
        <nav className="flex">
            <Link to={'/'} className="link link-hover">Home</Link> 
            <Link to={'/projects'} className="link link-hover">Projects</Link> 
        </nav> 

        |
		<a href="https://www.linkedin.com/in/jackmob/" className=" link link-hover">LinkedIn</a>
		<a href="clamnam@protonmail.com" className=" link link-hover">Email</a>
		<a href="https://github.com/clamnam" className=" link link-hover"> Github</a>
	

        </footer>
    );
}
export default Footer;