import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import logo from '../images/mobile/logo.png';
import './Header.css';

const Header = (props) => {
  const { onSetMobileMenu } = props;
  const [mobileMenu, setMobileMenu] = useState(false);
  const header = useRef();
  const showMenu = () => {
    header.current.classList.toggle('active');
    setMobileMenu(!mobileMenu);
    onSetMobileMenu(!mobileMenu);
  };
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="page logo" />
        <div ref={header} className="hamburger" role="presentation" onClick={showMenu} onKeyDown={showMenu}>
          <div />
          <div />
          <div />
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  onSetMobileMenu: PropTypes.func.isRequired,
};

export default Header;
