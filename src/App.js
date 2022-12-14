import { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Intro from './components/Intro';
import './App.css';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuStatus = (mobileMenu) => {
    setMobileMenu(mobileMenu);
  };
  return (
    <div className="App">
      <div className='container'>
        <Header onSetMobileMenu={mobileMenuStatus} />
        <MobileMenu menu={mobileMenu} />
        <Intro />
      </div>
    </div>
  );
}

export default App;
