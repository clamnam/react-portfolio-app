import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-neutral-900">
        <div className="navbar-start">
          <div className="dropdown">
 
            <ul tabIndex={0} className=" flex   shadow  text-white r w-52">
              <li className='m-2 btn  btn-ghost'><Link to='/'>Home</Link></li>
              <li className='m-2 btn  btn-ghost'><Link to='/about'>About</Link></li>
              <li className='m-2 btn  btn-ghost'><Link to='/projects'>Projects</Link></li>
              <li className='m-2 btn  btn-ghost'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to='/'  className="btn btn-ghost normal-case text-xl text-white">Jack</Link>
        </div>
        <div className="navbar-end">

        </div>
                  </div>
    );
};

export default Navbar;