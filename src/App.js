import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hompegage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Hompegage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
