import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";

const StyledMenu = styled.ul`
  position: absolute;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1.3rem;
  text-transform: uppercase;
  z-index: 300;
`;

const StyledMenuItem = styled.li`
  padding-right: 2rem;
  border-right: 2px solid var(--color-brand-800);
  a {
    color: var(--color-grey-300);
    font-size: 1.5rem;
  }

  a:hover {
    color: var(--color-brand-700);
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
      <StyledMenuItem>
        <a href="#">contact</a>
      </StyledMenuItem>
      <LanguageSwitcherWrapper>
        <LanguageSwitcher />
      </LanguageSwitcherWrapper>
    </StyledMenu>
  );
}

export default Menu;
