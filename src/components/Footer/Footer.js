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
          <img src="/paw1.png" />
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray};
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
`;

const FooterButton = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
export default Footer;
