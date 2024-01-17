import styled from "styled-components";
import backgroundVideo from "../assets/background.mov";
import Slogan from "../ui/Slogan";
import Menu from "./Menu";

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

function HeroSection() {
  return (
    <Wrapper>
      <BackgroundVideo autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Menu />
      <Slogan />
    </Wrapper>
  );
}

export default HeroSection;
