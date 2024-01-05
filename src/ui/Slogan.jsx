import styled, { keyframes } from "styled-components";
import CompanyName from "./CompanyName";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSlogan = styled.h1`
  position: absolute;
  top: 20%;
  left: 5%;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 5rem;
  color: #18181b;
  text-decoration: underline;
  width: 45%;
  padding: 2rem;
  animation: ${fadeIn} 2s ease-in-out;
`;

function Slogan() {
  return (
    <div>
      <StyledSlogan>Your Stories, Our Expertise:</StyledSlogan>
      <CompanyName />
    </div>
  );
}

export default Slogan;
