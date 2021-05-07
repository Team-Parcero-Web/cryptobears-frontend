import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import { debounce } from '../../utils/debounce';
import { Container } from '../lib';
import { useWeb3Context } from '../../Context/Web3Context';

Router.onRouteChangeStart = () => {
  NProgress.start();
  NProgress.configure({ showSpinner: false });
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouterChangeError = () => NProgress.done();

const Header = () => {
  const { account, deactivate } = useWeb3React();
  const { setState } = useWeb3Context();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Wrapper visible={visible}>
      <Container className="container">
        <InnerHeader>
          <Logo>
            {/* <Link href="/" passHref>
              <a> <img src="/images/paw2.png" alt="logo" /> </a>
            </Link> */}
          </Logo>
          <div>
            <nav>
              <Link href="/bears" passHref>
                <NavButton>Bears</NavButton>
              </Link>
              <Link href="/#contact" passHref>
                <NavButton>contact</NavButton>
              </Link>
              {!account && (
                <Link href="/login" passHref>
                  <NavButton>Sign in</NavButton>
                </Link>
              )}
              {account && (
                <Link href="/my-profile" passHref>
                  <NavButton>my profile</NavButton>
                </Link>
              )}
              {account && (
                <NavButton
                  onClick={() => {
                    deactivate();
                    setState({ isLoggedIn: false });
                  }}
                >
                  Sign out
                </NavButton>
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
  position: fixed;
  top: ${({ visible }) => (visible ? '0' : '-80px')};
  z-index: 10;
  transition: top 0.3s, background-color 0.5s 0.1s;
  background-color: ${({ theme }) => theme.colors.pink};
  .container {
    height: 80px;
    padding: 0px 2rem;
  }
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

  &:last-child {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    content: '';
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
