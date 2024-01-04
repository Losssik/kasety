import styled from "styled-components";

const StyledSlogan = styled.h1`
  position: absolute;
  top: 20%;
  left: 5%;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 5rem;
  color: #18181b;
  text-decoration: underline;
  width: 45%;
  padding: 2rem;

  span {
    background-color: var(--color-brand-500);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

function Slogan() {
  return (
    <StyledSlogan>
      here put some <span>slogan</span> or some other
      <span> info that u like</span>
    </StyledSlogan>
  );
}

export default Slogan;
