import styled from 'styled-components';

const NavBar = ({ type }) => {
  return (
    <div>
      <Container>
        <a className={`neon ${type}`}>Neon</a>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-color: transparent;
`;

export default NavBar;
