import styled from "styled-components";

const StyledAboutUs = styled.div`
  text-align: center;

  h2 {
    font-size: 6rem;
    color: var(--color-brand-950);
    margin-top: 5rem;
  }

  p {
    color: var(--color-brand-800);
  }
`;
function AboutUs() {
  return (
    <StyledAboutUs id="about">
      <h2>Frequently asked questions</h2>
      <p>
        We are here to help with any questions you have about the service with
        offer
      </p>
    </StyledAboutUs>
  );
}

export default AboutUs;
