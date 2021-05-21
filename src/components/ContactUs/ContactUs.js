import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { client } from '../../api/client';
import { isEmail } from '../../utils/validations';
import {
  Button,
  Card,
  CenteredContent,
  FormControl,
  Heading2,
  Info,
  Input,
  Label,
  TextArea,
} from '../lib';

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSendMail = e => {
    const { fullName, email, message } = formData;
    setSuccess('');
    setError('');

    e.preventDefault();
    if (!fullName || !email || !message) {
      setError('All fields are required');
      return;
    }
    if (!isEmail(email)) {
      setError('You should use a valid email');
      return;
    }
    setLoading(true);
    client('contact/', { data: { name: fullName, email, message } })
      .then(() => {
        setLoading(false);
        setSuccess('Message succesfully sent!');
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
        setError('Unexpected error, please try again');
      });
  };

  const successAnimation = {
    visible: {
      opacity: 1,
      transform: 'scale(1)',
    },
    hidden: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  };
  return (
    <Wrapper id="contact">
      <Inner>
        <ContactCard>
          <Heading2>Join our Waitlist!</Heading2>
          <form onSubmit={handleSendMail}>
            <FormControl>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                onChange={e => {
                  if (success) {
                    setSuccess(false);
                  }
                  setFormData({ ...formData, fullName: e.target.value });
                }}
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
                onChange={e => {
                  if (success) {
                    setSuccess(false);
                  }
                  setFormData({ ...formData, email: e.target.value });
                }}
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
                onChange={e => {
                  if (success) {
                    setSuccess(false);
                  }
                  setFormData({ ...formData, message: e.target.value });
                }}
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
              isLoading={loading}
              disabled={loading}
            >
              Submit
            </Button>

            {error && (
              <Info className="error" size="2">
                {error}
              </Info>
            )}
            <AnimatePresence>
              {success && (
                <MotionInfo
                  className="success-message mt-2"
                  size="2"
                  variants={successAnimation}
                  aria-label="modal-"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  role="alert"
                >
                  {success}
                </MotionInfo>
              )}
            </AnimatePresence>
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

  .success-message {
    background-color: ${({ theme }) => theme.colors.success} !important;
    color: white;
    border-radius: 4px;
    padding: 0.5rem 0;
  }
`;

const MotionInfo = motion(Info);
