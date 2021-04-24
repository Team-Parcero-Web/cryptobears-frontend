import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/#about">
            <FooterButton>About</FooterButton>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <FooterButton>contact</FooterButton>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <FooterButton>
              Rights <b> &#9400; </b> CRYPTOBEARS
            </FooterButton>
          </Link>
        </li>

        <li>
          <img src="/images/paw1.png" alt="Paw coin" />
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10rem;
  width: 100%;

  ul {
    display: flex;
    li:not(:last-child) {
      margin-left: 3rem;
    }

    li {
      display: flex;
      align-items: center;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media (max-width: 976px) {
    padding: 0 2rem;
    justify-content: center;
    ul {
      padding: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      li:not(:last-child) {
        margin-left: 0rem;
      }

      li:last-child {
        display: none;
      }
    }
  }
`;

const FooterButton = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 976px) {
    font-size: 1.4rem;
  }
`;
export default Footer;
