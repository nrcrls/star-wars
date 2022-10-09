import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from "react-icons/md"
import { useState } from 'react';

function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  function handleToggle() {
    setHamburgerMenu(prev => !prev);
  }

  function closeMenu() {
    setHamburgerMenu(false);
  }


  return (
    <header className='flex'>
      <div>
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
      </div>
      <button onClick={handleToggle} className='hamburger-open text-accent fs-700'>{hamburgerMenu ? <MdClose className='hamburger--close' /> : <HiMenu className='hamburger--open' />}</button>
      <nav>
        <ul className={`primary-navigation flex  ${hamburgerMenu ? " showMenu" : ""}`}>
          <li className="active underline-indicator">
            <Link to="/" activeClassName="active-link" onClick={() => closeMenu()} className='text-light uppercase ff-sans letter-spacing-2'>Home</Link>
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
