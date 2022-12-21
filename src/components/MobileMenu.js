import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './MobileMenu.css';

const MobileMenu = (props) => {
  const { menu, onCloseMenu } = props;
  const closeMenu = () => {
    onCloseMenu(false);
  };
  return (
    <div
      className={`${menu ? 'menu active' : 'menu'}`}
      role="presentation"
      onClick={closeMenu}
    >
      <ul className="menu-list">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="about">ABOUT</NavLink></li>
        <li><NavLink to="projects">PROJECTS</NavLink></li>
        <li><NavLink to="contact">CONTACT ME</NavLink></li>
      </ul>
    </div>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
