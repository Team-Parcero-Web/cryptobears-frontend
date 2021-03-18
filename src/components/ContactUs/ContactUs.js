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
} from "../lib";

const ContactUs = () => {
  const handleSendMail = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Inner>
        <ContactCard>
          <Heading2>Let's get in touch!</Heading2>
          <form>
            <FormControl>
              <Label htmlFor="fullname">Full Name</Label>
              <Input type="text" placeholder="Full Name" name="fullname" id="fullname" />
            </FormControl>
            <FormControl>
              <Label htmlFor="email">Email</Label>
              <Input type="text" placeholder="Full Name" name="email" id="email" />
            </FormControl>
            <FormControl>
              <Label htmlFor="message">Message</Label>
              <TextArea type="text" placeholder="Full Name" name="message" id="message" rows="4" />
            </FormControl>
            <Button type="submit" className="mt-3 w-3" onClick={handleSendMail}>
              Submit
            </Button>
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
  @media (max-width: 976px) {
    width: 100%;
  }
`;
