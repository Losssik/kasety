import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSubheader = styled.p`
  color: var(--color-brand-800);
  text-align: center;
`;

function Subheader({ children }) {
  return <StyledSubheader>{children}</StyledSubheader>;
}

Subheader.propTypes = {
  children: PropTypes.any,
};

export default Subheader;
