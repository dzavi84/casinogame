import styled from 'styled-components';

const NavBar = ({ type, text }) => {
  return (
    <div>
      <Container>
        <a className={`neon ${type}`}> {text} </a>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-color: transparent;
`;

export default NavBar;
