import styled from "styled-components";
import background from "../photos/background.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import Slogan from "../ui/Slogan";
import logo from "../photos/logo.jpg";

const BackgroundImage = styled.div`
  background-image: linear-gradient(
      to top left,
      rgba(245, 246, 252, 0.614),
      rgba(17, 156, 216, 0.73)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: center;
  z-index: 2;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  padding: 1rem;

  img {
    width: 80px;
  }
`;

function HeroSection() {
  return (
    <>
      <BackgroundImage>
        <StyledHeader>
          <LanguageSwitcher />

          <div>
            <img src={logo} />
          </div>
        </StyledHeader>
      </BackgroundImage>
      <Slogan />
    </>
  );
}

export default HeroSection;
