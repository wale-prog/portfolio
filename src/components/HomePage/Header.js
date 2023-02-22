import React, { useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logo from '../../images/mobile/logo.png';
import './Header.css';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const header = useRef();
  const menuOptions = (menu) => {
    header.current.classList.toggle('active');
    setMobileMenu(menu);
    document.body.classList.remove('scroll-lock');
  };
  const showMenu = () => {
    menuOptions(!mobileMenu);
  };
  const closeMenu = (menu) => {
    menuOptions(menu);
  };

  return (
    <div className="main-header">
      <nav className="header">
        <img src={logo} alt="page logo" />
        <BrowserRouter>
          <MobileMenu menu={mobileMenu} onCloseMenu={closeMenu} />
        </BrowserRouter>
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
