import React from "react";
import styled from "styled-components";
import {
  CenteredContent,
  Card,
  Input,
  FormControl,
  Label,
  TextArea,
  Button,
  Heading2,
  Info,
  Spinner,
} from "../lib";
import { isEmail } from "../../utils/validations";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({ fullName: "", email: "", message: "" });
  const [error, setError] = React.useState("");
  const handleSendMail = (e) => {
    const { fullName, email, message } = formData;
    e.preventDefault();
    if (!fullName || !email || !message) {
      setError("All fields are required");
    } else if (!isEmail(email)) {
      setError("You should use a valid email");
    }
    setError("");
  };
  return (
    <Wrapper id="contact">
      <Inner>
        <ContactCard>
          <Heading2>Let's get in touch!</Heading2>
          <form>
            <FormControl>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                value={formData.fullName}
                type="text"
                placeholder="Full Name"
                name="fullname"
                id="fullname"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                value={formData.email}
                type="text"
                placeholder="name@email.com"
                name="email"
                id="email"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="message">Message</Label>
              <TextArea
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                value={formData.message}
                type="text"
                placeholder="Your message"
                name="message"
                id="message"
                rows="4"
              />
            </FormControl>
            <Button
              type="submit"
              className="mt-3 w-3"
              onClick={handleSendMail}
              loading={true}
              disabled={true}
            >
              Submit
            </Button>
            {error && (
              <Info className="error" size="2">
                {error}
              </Info>
            )}
          </form>
        </ContactCard>
      </Inner>
    </Wrapper>
  );
};

export default ContactUs;
const Wrapper = styled(CenteredContent)`
  padding: 12rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  @media (max-width: 976px) {
    padding: 0rem 0 4rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ContactCard = styled(Card)`
  width: 60%;
  form {
    margin-top: 3rem;
  }
  @media (max-width: 976px) {
    width: 100%;
  }
`;
