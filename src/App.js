import { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import './App.css';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuStatus = (mobileMenu) => {
    setMobileMenu(mobileMenu);
  };
  return (
    <div className="App">

      <div className="container">
        <Header onSetMobileMenu={mobileMenuStatus} />
        <MobileMenu menu={mobileMenu} />
      </div>
    </div>
  );
}

export default App;
