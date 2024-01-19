import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.h2`
  font-size: 6rem;
  color: var(--color-brand-950);
  margin-top: 5rem;
  text-align: center;
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
