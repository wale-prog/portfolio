import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HomePage/Header';
import Homepage from './components/HomePage/Homepage';
import Test from './components/HomePage/Test';
import About from './components/AboutPage/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
