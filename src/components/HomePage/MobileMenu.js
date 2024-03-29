import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';
import { PropTypes } from 'prop-types';
import './MobileMenu.css';

const MobileMenu = (props) => {
  const { menu, onCloseMenu } = props;
  const closeMenu = () => {
    onCloseMenu(false);
  };

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
            style={({ working }) => (working ? activeStyle : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ working }) => (working ? activeStyle : undefined)}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACT
          </NavLink>
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
