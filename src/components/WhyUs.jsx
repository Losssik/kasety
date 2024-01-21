import { PiCassetteTape } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { FaPhotoVideo, FaRegLightbulb } from "react-icons/fa";

import styled from "styled-components";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";

const Wrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 10rem;
  color: var(--color-brand-950);

  p {
    font-size: 2rem;
    text-align: center;
    padding: 2rem;
    color: var(--color-brand-800);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 2rem;
`;
function WhyUs() {
  return (
    <>
      <Header>Our Core Services</Header>
      <Subheader>AI powered solutions</Subheader>
      <Wrapper>
        <ContentContainer>
          <div>
            <PiCassetteTape />
          </div>
          <p>Advanced AI-Powered Digitization of DVC PRO Tapes</p>
        </ContentContainer>
        <ContentContainer>
          <div>
            <MdSpeed />
          </div>
          <p>Speedy and Efficient Data Processing</p>
        </ContentContainer>
        <ContentContainer>
          <div>
            <FaPhotoVideo />
          </div>
          <p>End-to-End Video Processing Services</p>
        </ContentContainer>
        <ContentContainer>
          <div>
            <FaRegLightbulb />
          </div>
          <p>
            Customized Solutions Catering to Broadcaster and Educational Needs
          </p>
        </ContentContainer>
      </Wrapper>
    </>
  );
}

export default WhyUs;
