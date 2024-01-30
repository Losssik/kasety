import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 1rem;
  color: var(--color-brand-950);

  a {
    font-size: 2rem;
    color: var(--color-brand-950);

    &:hover {
      color: var(--color-brand-800);
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>meet us on socials</p>
      <div>
        <a href="https://react-icons.github.io/react-icons/search/#q=instagram">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://react-icons.github.io/react-icons/search/#q=instagram">
          <FaInstagram />
        </a>
      </div>
      <div>
        <a href="https://react-icons.github.io/react-icons/search/#q=instagram">
          <FaFacebookF />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
