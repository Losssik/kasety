import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const StyledSlogan = styled.h1`
  letter-spacing: 7px;
  font-size: 5rem;
  animation: ${fadeIn} 2s ease-in-out;
  z-index: 150;
  color: var(--color-grey-300);
  text-transform: uppercase;
  font-weight: 900;
`;

const StyledCompanyName = styled.p`
  letter-spacing: 5px;
  font-weight: 700;
  font-size: 5.4rem;
  padding: 1rem 3rem 1rem 1rem;
  animation: ${slideInAndOut} 1s ease-in-out 2s forwards;
  opacity: 0;
  letter-spacing: 7px;
  z-index: 150;
  color: var(--color-brand-900);
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 90vh;
`;

const Button = styled.a`
  background: transparent;
  border: 3px solid var(--color-brand-700);
  font-size: 3.6rem;
  padding: 1rem 8rem;
  color: var(--color-brand-600);
  letter-spacing: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 150;
  margin-top: 5rem;
  box-shadow: 0px 5px 100px 51px rgba(20 0 190 / 67%);
  text-transform: uppercase;

  &:hover {
    border-color: var(--color-brand-800);
    color: var(--color-brand-700);
  }
`;

function Slogan() {
  return (
    <CenteredContainer>
      <StyledSlogan>
        {'"'}Your Stories, Our Expertise{'"'}
      </StyledSlogan>
      <StyledCompanyName>TapesTransfer.com</StyledCompanyName>
      <Button href="#about">our offer</Button>
    </CenteredContainer>
  );
}

export default Slogan;
