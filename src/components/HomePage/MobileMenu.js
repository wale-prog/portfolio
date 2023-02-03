import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { PropTypes } from 'prop-types';
import './MobileMenu.css';

const MobileMenu = (props) => {
  const { menu, onCloseMenu } = props;
  const closeMenu = () => {
    onCloseMenu(false);
  };

  // const path = window.location.href;

  const activeStyle = { opacity: '1', color: '#fff', textDecoration: 'underline #ea7911 3px' };

  return (
    <div
      className={`${menu ? 'menu active' : 'menu'}`}
      role="presentation"
      onClick={closeMenu}
    >
      <ul className="menu-list">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavHashLink
            to="/#projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PROJECTS
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#contact"
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACT
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
