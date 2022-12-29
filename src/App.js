import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hompegage from './components/Homepage';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Hompegage />} />
            <Route exact path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
