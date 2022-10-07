import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className="primary-header">
      <Link to='/'><img src={logo} alt="logo" /></Link>

      <nav>
        <ul className="nav-menu flex">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/destination'>Destination</Link>
          </li>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
