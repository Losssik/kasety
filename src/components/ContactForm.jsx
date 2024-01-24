import styled from "styled-components";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";

const Form = styled.form`
  background-color: red;
  text-align: center;
`;

function handleSubmit(e) {
  console.log("test");
  e.preventDefault();
}

function ContactForm() {
  return (
    <div id="contact">
      <Header>Contact us</Header>
      <Subheader>
        Embark on a journey where history meets innovation. Contact
        Tapestransfer.com to discuss your digital media transformation
      </Subheader>
      <Form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <input type="email" placeholder="Your email" name="email" />
        </div>
        <div>
          <input type="text" placeholder="Subject" name="subject" />
        </div>
        <div>
          <textarea
            cols="30"
            rows="8"
            placeholder="Your message"
            name="message"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="send message"></input>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
