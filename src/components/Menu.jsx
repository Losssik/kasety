import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1rem;
`;

const StyledMenuItem = styled.li`
  a:hover {
    color: #000;
  }
`;

const LanguageSwitcherWrapper = styled.div`
  margin-left: auto;
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
      <LanguageSwitcherWrapper>
        <LanguageSwitcher />
      </LanguageSwitcherWrapper>
    </StyledMenu>
  );
}

export default Menu;
