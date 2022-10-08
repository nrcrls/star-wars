import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className='header flex'>
      <div>
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
      </div>
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
