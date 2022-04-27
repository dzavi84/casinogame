import styled from 'styled-components';
import LeftSide from './LeftSide';

const NavBar = (props) => {
  return (
    <div class='box glowing'>
      <div className='App'>
        <LeftSide></LeftSide>
      </div>
    </div>
  );
};

export default NavBar;
