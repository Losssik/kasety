import styled from "styled-components";

const StyledAboutUs = styled.div`
  background-color: yellowgreen;
  color: black;
`;
function AboutUs() {
  return (
    <StyledAboutUs id="about">
      <p>test</p>
      <h2>test</h2>
    </StyledAboutUs>
  );
}

export default AboutUs;
