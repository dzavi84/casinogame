import styled from 'styled-components';

const NavBar = (props) => {
  return (
    <div>
      <Container>
        <a class='neon'>Neon</a>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-color: transparent;
`;

export default NavBar;
