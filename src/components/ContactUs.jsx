import styled from "styled-components";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  input,
  textarea {
    padding: 1rem 1rem;
    width: 44%;
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

  &:hover {
    background-color: var(--color-brand-900);
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
      <Form onSubmit={handleSubmit} ref={form}>
        <div>
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Your email" name="email" required />
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
    </div>
  );
};
