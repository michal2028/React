
import './styles/App.css';
import './components/Header';
import Header from './components/Header';
import Slider from './components/Slider';
import Aboutme from './components/Aboutme';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Header/>
      <Slider/>
      <Aboutme/>
      <Roadmap/>
      <div className='test'>
        <h3>Test text</h3>
      </div>
      </div>
      
    </div>
  );
}

export default App;
