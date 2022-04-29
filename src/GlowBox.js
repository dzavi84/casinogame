import styled from 'styled-components';
import LeftSide from './LeftSide';
import RollDice from './RollDice';
import './RollDice.css';

const NavBar = (props) => {
  let onTimesup = () => {
    //alert(`Time is up!`);
  };
  return (
    <div class='box glowing'>
      <div className='App'>
        <LeftSide onTimesup={onTimesup} duration={180} /> <RollDice></RollDice>
      </div>
    </div>
  );
};

export default NavBar;
