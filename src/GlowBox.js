import styled from 'styled-components';
import LeftSide from './LeftSide';

const NavBar = (props) => {
  let onTimesup = () => {
    alert(`Time is up!`);
  };
  return (
    <div class='box glowing'>
      <div className='App'>
        <LeftSide onTimesup={onTimesup} duration={180} />
      </div>
    </div>
  );
};

export default NavBar;
