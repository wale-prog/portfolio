import Header from './components/Header';
import Intro from './components/Intro';
import AboutSummary from './components/AboutSummary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
        <AboutSummary />
      </div>
    </div>
  );
}

export default App;
