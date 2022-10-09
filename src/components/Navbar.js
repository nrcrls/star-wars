import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
function Navbar() {
  return (
    <header className='flex'>
      <div>
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
      </div>
      <button className='hamburger-menu text-accent fs-700'><HiMenu /></button>
      <nav>
        <ul className="primary-navigation flex">
          <li className="active underline-indicator">
            <Link to="/" className='text-light uppercase ff-sans letter-spacing-2'>Home</Link>
          </li>
          <li className="underline-indicator">
            <Link to="/destination" className='text-light uppercase ff-sans letter-spacing-2'>Destination</Link>
          </li>
          <li className="underline-indicator">
            <Link to="/ships" className='text-light uppercase ff-sans letter-spacing-2'>Our Spaceships</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
