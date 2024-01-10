import styled from "styled-components";
import Greeting from "../components/Greeting";

const StyledMenu = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 1rem;
`;

const StyledMenuItem = styled.li`
  a:hover {
    color: #000;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledMenuItem>
        <a href="#services">service</a>
      </StyledMenuItem>
      <StyledMenuItem>
        <a href="#about">about us</a>
      </StyledMenuItem>
      <StyledMenuItem>
        <a href="#">projects</a>
      </StyledMenuItem>
      <StyledMenuItem>
        <a href="#">FAQ</a>
      </StyledMenuItem>
      <Greeting />
    </StyledMenu>
  );
}

export default Menu;
