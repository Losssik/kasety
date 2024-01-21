import styled from "styled-components";
import parralax from "../assets/parralax.jpg";
import { MdOutlinePhoneInTalk } from "react-icons/md";

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
  margin-bottom: 10rem;
  gap: 2rem;

  a {
    display: flex;
    gap: 2rem;
    align-items: center;

    font-size: 5rem;
    background: rgb(8, 2, 37);
    padding: 2rem 5rem;
    border-radius: 15px;
    color: var(--color-grey-0);
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: rgba(13, 6, 224, 0.648) 0px 0px 38px 10px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    letter-spacing: 5px;
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

const StyledCiPhone = styled.div`
  font-size: 3.6rem;
  color: var(--color-brand-700);
`;

function PhoneParralax() {
  return (
    <StyledParralax>
      <a href="tel:666-121-659">
        <StyledCiPhone>
          <MdOutlinePhoneInTalk />
        </StyledCiPhone>
        +48 666-121-659
      </a>
    </StyledParralax>
  );
}

export default PhoneParralax;
