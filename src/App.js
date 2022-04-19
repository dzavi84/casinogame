import './App.css';
import './flow.css';
import './neonButton.css';
import GlowBox from './GlowBox';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <div className='divBut'>
        <NavBar></NavBar>, <NavBar className='drugi'></NavBar>,<NavBar></NavBar>
      </div>
      <GlowBox></GlowBox>
    </div>
  );
}

export default App;
