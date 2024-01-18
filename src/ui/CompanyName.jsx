import styled, { keyframes } from "styled-components";

const slideInAndOut = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(10%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledCompanyName = styled.p`
  position: absolute;
  top: 48%;
  left: 6%;
  letter-spacing: 5px;
  font-weight: 700;
  font-size: 5.4rem;
  color: #212128;

  text-decoration: underline;
  padding: 1rem 3rem 1rem 1rem;
  animation: ${slideInAndOut} 1s ease-in-out 2s forwards; /* Apply animation with 2s delay */
  opacity: 0;
  background-color: var(--color-brand-600);
  letter-spacing: 7px;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 100%, 95% 0);
  z-index: 150;
  color: var(--color-grey-200);
`;

function CompanyName() {
  return <StyledCompanyName>TapesTransfer.com</StyledCompanyName>;
}

export default CompanyName;
