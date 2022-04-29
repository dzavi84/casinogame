import './App.css';
import './flow.css';
import './neonButton.css';
import GlowBox from './GlowBox';
import NavBar from './NavBar';
import './clock.css';
function App() {
  return (
    <div>
      <div className='divBut'>
        <NavBar text={'score'}></NavBar>,
        <NavBar text={'Lucky Chucky'} type={'drugi'}></NavBar>,
        <NavBar text={'Numbers'}></NavBar>
      </div>
      <GlowBox></GlowBox>
    </div>
  );
}

export default App;
