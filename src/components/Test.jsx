import styled from "styled-components";
import contact from "../assets/contact.jpg";
const StyledTest = styled.div`
  height: 100vh;
`;

const BackgroundPhoto = styled.div`
  position: relative;
  background: linear-gradient(rgba(23, 8, 83, 0.568), rgba(41, 7, 97, 0.568)),
    url(${contact});
  background-size: cover;
  height: 100%;
  margin-right: 1rem;
`;

function Test() {
  return (
    <StyledTest>
      <BackgroundPhoto />
    </StyledTest>
  );
}

export default Test;
