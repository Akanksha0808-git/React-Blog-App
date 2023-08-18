import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };

  return (
    <div className="container">
      <div id='heading'><span id="Head1">The</span>
        <h1 id="Head2">Siren</h1>

      </div>
      <div className="navbar">
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu ${menuOpen ? 'open' : ''}`} >
          <li>

            <NavLink to="/" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/Bollywood" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Bollywood</NavLink>
          </li>
          <li>
            <NavLink to="/Technology" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Technology</NavLink>
          </li>
          <li>
            <NavLink to="/Hollywood" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Hollywood</NavLink>
          </li>
          <li>
            <NavLink to="/Fitness" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Fitness</NavLink>
          </li>
          <li>
            <NavLink to="/Food" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Food</NavLink>
          </li>
        </ul>



      </div>
    </div>
  );
};

export default Navbar;
