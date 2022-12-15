import React, { useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import logo from '../images/mobile/logo.png';
import './Header.css';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const header = useRef();
  const showMenu = () => {
    header.current.classList.toggle('active');
    setMobileMenu(!mobileMenu);
    document.body.classList.toggle('scroll-lock');
  };
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="page logo" />
        <MobileMenu menu={mobileMenu} />
        <div ref={header} className="hamburger" role="presentation" onClick={showMenu} onKeyDown={showMenu}>
          <div />
          <div />
          <div />
        </div>
      </nav>
    </div>
  );
};

export default Header;
