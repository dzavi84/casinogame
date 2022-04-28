import './App.css';
import './flow.css';
import './neonButton.css';
import GlowBox from './GlowBox';
import NavBar from './NavBar';
import LeftSide from './LeftSide';
import './clock.css';
import React, { useState, useEffect } from 'react';
function App() {
  //const [timerMinutes, setTimerMinutes] = useState();
  //const [timerSeconds, setTimerSeconds] = useState();

  //let interval;

  //const startTimer = () => {
  //  const countDownDate = new Date('May 30,2023 ').getTime();

  //  interval = setInterval(() => {
  //    const now = new Date().getTime();

  //    const distance = countDownDate - now;

  //    const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //    const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //    if (distance < 0) {
  //      // Stop Timer

  //      clearInterval(interval.current);
  //    } else {
  //      // Update Timer
  //      setTimerMinutes(minutes);
  //      setTimerSeconds(seconds);
  //    }
  //  });
  //};

  //useEffect(() => {
  //  startTimer();
  //});
  return (
    <div>
      <div className='divBut'>
        <NavBar text={'score'}></NavBar>,{' '}
        <NavBar text={'Lucky Chucky'} type={'drugi'}></NavBar>,
        <NavBar text={'Numbers'}></NavBar>
      </div>
      <GlowBox>
        {/*<div className='App'>
          <LeftSide timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
        </div>*/}
      </GlowBox>
    </div>
  );
}

export default App;
