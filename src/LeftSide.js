//import React, { Fragment } from 'react';
import React, { Fragment, useState, useEffect } from 'react';

function Clock() {
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date('May 30,2023 ').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <Fragment>
      <section className='timer-container'>
        <section className='timer'>
          <div className='clock'>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
}

Clock.defaultProps = {
  timerMinutes: 3,
  timerSeconds: 0,
};

export default Clock;
