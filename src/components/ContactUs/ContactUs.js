import React from "react";

const ContactUs = () => {
  return (
    <Wrapper>
      <Inner>
        <h1>contact us</h1>
      </Inner>
    </Wrapper>
  );
};

export default ContactUs;
const Wrapper = styled(CenteredContent)`
  padding: 48px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
