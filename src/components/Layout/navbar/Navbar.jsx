import React from 'react';
import { NavLink } from 'react-router-dom';

import menuItems from './navigationsLinks';
import './style.scss';
import logo from '../../../assets/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Space Travelers" />
      <h2>Space Traverlers&apos; Hub</h2>
    </div>
    <ul className="menu-items">
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path} activeclassname="active" className="menu-link">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
