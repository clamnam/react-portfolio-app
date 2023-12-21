import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="footer p-10 bg-neutral text-neutral-content flex justify-center">
        <nav className="flex text-lg">
            <Link to={'/'} className="link link-hover">Home</Link> 
            <Link to={'/about'} className="link link-hover">About</Link> 
            <Link to={'/projects'} className="link link-hover">Projects</Link> 
            <Link to={'/contact'} className="link link-hover">Contact</Link> 
        </nav> 


        </footer>
    );
}
export default Footer;