import styled from "styled-components";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";
import emailjs from "emailjs-com";
import { useRef } from "react";
import contact from "../assets/contact.jpg";

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  margin-top: 5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 0 3rem;

  input,
  textarea {
    padding: 1rem 1rem;
    width: 97%;
    border: none;
    border-bottom: 2px solid var(--color-brand-200);
    outline-color: var(--color-brand-200);
    color: var(--color-brand-900);
  }

  textarea {
    resize: none;
  }

  ::placeholder {
    color: var(--color-brand-900);
  }
`;

const SubmitFormButton = styled.input`
  background-color: var(--color-brand-950);
  color: var(--color-grey-50) !important;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-brand-900);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const BackgroundPhoto = styled.div`
  position: relative;
  background: rgba(8, 3, 65, 0.949) url(${contact});
  background-blend-mode: multiply;
  background-size: cover;
  height: 100%;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--color-grey-50);
    margin-bottom: 2rem;
  }
`;

export const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s2fawgp",
        "template_7kpbrxn",
        form.current,
        "Q-_C632UKuIFHRiVy"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <Header>Contact us</Header>
      <Subheader>
        Embark on a journey where history meets innovation. Contact
        Tapestransfer.com to discuss your digital media transformation
      </Subheader>
      <FormWrapper>
        <BackgroundPhoto>
          <h2>if you have any questions feel free to reach us</h2>
          <p>email: contact@tapestransfer.com</p>
          <p>phone: +48 500 500 689</p>
        </BackgroundPhoto>
        <Form onSubmit={handleSubmit} ref={form}>
          <div>
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
          </div>
          <div>
            <input type="text" placeholder="Subject" name="subject" required />
          </div>
          <div>
            <textarea
              cols="30"
              rows="6"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
          </div>
          <div>
            <SubmitFormButton type="submit" value="send a message" disabled />
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
};
