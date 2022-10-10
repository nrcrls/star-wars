import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { SidebarData } from './SidebarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  function handleToggle() {
    setSidebar(prev => !prev)
  }

  const closeMenu = () => {
    setSidebar(false)
  }

  return (
    <header className='flex-space-btwn'>
      <div>
        <NavLink to="/"><img src={logo} alt="logo" className="logo" /></NavLink>
      </div>

      <nav className='flex'>
        <button className="mobile-nav-toggle" onClick={handleToggle}>
          {sidebar ?
            (
              <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
              <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
            )
          }
        </button>
        <ul onClick={handleToggle} className={`list-style flex ${sidebar ? "primary-navigation" : "primary-navigation active"}`}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink activeClassName="active-link"
                  onClick={() => closeMenu()}
                  exactto={item.path} className={item.navLinkcName}>
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

    </header >
  );
}

export default Navbar;
