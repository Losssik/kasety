import styled from "styled-components";
import backgroundVideo from "../assets/background.mp4";
import Slogan from "../ui/Slogan";
import Menu from "./Menu";
import initialbackground from "../assets/initialbackground.jpg";

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  background-image: url(${initialbackground});
  background-size: cover;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: #070c39;
`;

function HeroSection() {
  return (
    <Wrapper>
      <BackgroundImg />
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
