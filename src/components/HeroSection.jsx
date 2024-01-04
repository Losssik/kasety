import styled from "styled-components";
import background from "../photos/background.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import Slogan from "../ui/Slogan";

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: center;
`;

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;

  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 2%;
    z-index: -1; /* Place it behind the header content */
  }
`;

function HeroSection() {
  return (
    <>
      <BackgroundImage>
        <StyledHeader>
          <div>
            <span>test</span>
            <span>test</span>
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </StyledHeader>
      </BackgroundImage>
      <Slogan />
    </>
  );
}

export default HeroSection;
