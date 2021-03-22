import React from "react";
import { Container } from "../lib";
import Link from "next/link";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

const Header = () => {
  const { account, deactivate } = useWeb3React();
  React.useEffect(() => {
    console.log(account);
  }, [account]);
  return (
    <Wrapper>
      <Container>
        <InnerHeader>
          <Logo>
            <Link href="/">
              <a>{/* <img src="/paw2.png" alt="logo" /> */}</a>
            </Link>
          </Logo>
          <div>
            <nav>
              <Link href="/#about">
                <NavButton>About</NavButton>
              </Link>
              <Link href="/#contact">
                <NavButton>contact</NavButton>
              </Link>
              {!account && (
                <Link href="/login">
                  <NavButton>Sign in</NavButton>
                </Link>
              )}
              {account && (
                <NavButton
                  onClick={() => {
                    deactivate();
                    window.sessionStorage.setItem("isLoggedIn", false);
                  }}
                >
                  Sign out
                </NavButton>
              )}
              {account && (
                <Link href="/my-profile">
                  <NavButton>my profile</NavButton>
                </Link>
              )}
            </nav>
          </div>
        </InnerHeader>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 10;
`;

const Logo = styled.div`
  img {
    width: 100px;
    margin-top: 20px;
  }
  p {
    display: inline;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
  a {
    display: flex;
    align-items: center;
  }
`;

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const NavButton = styled.a`
  margin: 0 20px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
  position: relative;
  min-width: 100px;
  transition: all 0.2s ease;
  margin-bottom: 30px;
  top: 0;
  cursor: pointer;

  @media (max-width: 976px) {
    font-size: 1.2rem;
    margin: 0 7px;
  }
  &:hover {
    top: -3px;
  }
  &:last-child {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    transition: background 2.5s linear, color 0.25s linear;
    background: ${({ theme }) => theme.colors.purple};
    transition: min-width 0.3s ease;
    height: 4px;
    min-width: 0px;
    left: 0;
    border-radius: 10px;
  }

  &:hover::after {
    min-width: 50%;
    height: 4px;
  }
`;
