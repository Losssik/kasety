import styled from "styled-components";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";

const StyledCompanyService = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-content: center;
  padding: 5rem;
  gap: 6rem;
`;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 52vh;
  border-radius: 15px;
  box-shadow: rgb(5, 8, 10) 2px 15px 20px -4px;
  text-align: center;
  font-size: 4rem;
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s linear;

  &:hover {
    transform: scale(1.01);
  }

  p {
    background: rgba(255, 255, 255, 0.121);
    padding: 20px;
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  color: var(--color-brand-950);
  font-size: 2.5rem;
  display: flex;
  flex-direction: column; /* Align children in a column */
  align-items: start; /* Center horizontally */
  gap: 2rem;
  justify-content: center; /* Center vertically */

  h4 {
    font-size: 8rem;
    color: var(--color-grey-200);
  }
`;

function CompanyService() {
  return (
    <>
      <Header>Why Partner with Tapestransfer.com?</Header>
      <Subheader>We offer a wide range of services</Subheader>
      <StyledCompanyService>
        <ImageContainer imageUrl={photo1}>
          <p>State-of-the-Art AI Technology</p>
        </ImageContainer>

        <TextContainer>
          <h4>01</h4>
          <p>
            Dive into the future of digitization with our advanced AI
            algorithms. We preserve the authenticity of your recordings while
            enhancing their quality, ensuring a digitization process that honors
            the past and embraces the future.
          </p>
        </TextContainer>
        <TextContainer>
          <h4>02</h4>
          <p>
            Recognizing the fast-paced nature of broadcasting, we offer rapid
            processing capabilities, making us the go-to solution for
            broadcasters, production companies, and archives. Our extensive
            machine park translates into unparalleled efficiency and speed.
          </p>
        </TextContainer>

        <ImageContainer imageUrl={photo2}>
          <p>Tailored for the Broadcast Industry</p>
        </ImageContainer>

        <ImageContainer imageUrl={photo3}>
          <p>Expertise That Speaks Volumes</p>
        </ImageContainer>

        <TextContainer>
          <h4>03</h4>
          <p>
            Our team, enriched with seasoned professionals from the
            televisionindustry, brings a deep understanding and passion to each
            project.We blend technical prowess with creative vision, ensuring
            yourcontent is not just digitized, but truly revitalized.
          </p>
        </TextContainer>
        <TextContainer>
          <h4>04</h4>
          <p>
            We provide a holistic approach to video processing. From initial
            capturing to sophisticated AI-based post-production, our world-class
            equipment and expert team ensure every stage is handled with utmost
            care and precision.
          </p>
        </TextContainer>

        <ImageContainer imageUrl={photo4}>
          <p>Comprehensive Solutions</p>
        </ImageContainer>
      </StyledCompanyService>
    </>
  );
}

export default CompanyService;
