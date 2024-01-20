import styled from "styled-components";
import parralax from "../assets/parralax2.jpg";

const StyledParralax = styled.div`
  height: 55vh;
  background-color: red;
  background-image: url(${parralax});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  gap: 2rem;

  a {
    font-size: 5rem;
    background: rgb(8, 2, 37);
    padding: 2rem 5rem;
    border-radius: 15px;
    color: var(--color-grey-0);
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: rgba(13, 6, 224, 0.648) 0px 0px 38px 10px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;

    &:hover {
      color: var(--color-brand-700);
    }

    &:active {
      scale: 0.99;
    }
  }

  p {
    padding: 1rem;
    font-size: 2rem;
  }
`;

function Parralax() {
  return (
    <StyledParralax>
      <a href="mailto:janpaweldrugi@gmail.com">Get in Touch</a>
    </StyledParralax>
  );
}

export default Parralax;
