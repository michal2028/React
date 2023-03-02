
import './styles/App.css';
import './components/Header';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Header/>
      <Slider/>
      <div className='test'></div>
      </div>
      
    </div>
  );
}

export default App;
