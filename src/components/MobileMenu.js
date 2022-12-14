import React from 'react';
import { PropTypes } from 'prop-types';
import './MobileMenu.css';

const MobileMenu = (props) => {
  const { menu } = props;
  return (
    <div className={`${menu ? 'menu active' : 'menu'}`}>
      <ul className="menu-list">
        <li><a href="/">HOME</a></li>
        <li><a href="/">ABOUT</a></li>
        <li><a href="/">PROJECTS</a></li>
        <li><a href="/">CONTACT ME</a></li>
      </ul>
    </div>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default MobileMenu;
