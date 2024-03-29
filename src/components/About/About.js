import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styled from 'styled-components';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import Link from 'next/link';
import { useWeb3Context } from '../../Context/Web3Context';
import {
  CenteredContent,
  Container,
  Button,
  Heading3,
  GetButton,
} from '../lib';

const About = () => {
  const { chainId, account, activate, error } = useWeb3React();
  const { injected } = useWeb3Context();

  function handleLogin() {
    activate(injected);
  }

  return (
    <Container id="about">
      <Wrapper>
        <Inner>
          <Images>
            <img src="/images/bear.png" alt="Bear example" />
            <img src="/images/bears.png" alt="Bear example" />
            <BlackBox />
            <Overlay />
          </Images>
          <Content>
            <Heading3>About our series 1 bears:</Heading3>

            {chainId && chainId !== +process.env.NEXT_PUBLIC_CHAIN_ID && (
              <h1 style={{ color: 'tomato' }}>
                <b style={{ fontSize: 30, lineHeight: 0 }}>&#8594;</b>
                Whoops, you&apos;re not in the BNB network
              </h1>
            )}
            {!!error && (
              <h1 style={{ color: 'tomato' }}>
                {error instanceof UserRejectedRequestError
                  ? 'whoops you rejected'
                  : ''}
              </h1>
            )}

            {!account && (
              <h1 style={{ color: 'tomato' }}>
                <b style={{ fontSize: 30, lineHeight: 0 }}>&#8594;</b>
                It&apos;s seems that you&apos;re not logged in
              </h1>
            )}
            <p>
              Despite their cute looks, these mischievous bears are on the loose
              in the market causing chaos and downtrends. Make them yours right
              now. Be strong, resist, and don&#39;t let them hang around. You
              have to teach the bears who&#39;s boss, and what better way to do
              it than by laying your gauntlet on these collectibles. If you want
              to share the fun, sending it to a friend is your best option.
              Support the financial market, buy a &quot;cryptobear&quot; and
              change the world of crypto, one collectible bear at a time. What
              more extraordinary way to protect our investments?
            </p>
            <Link href="/get-bear">
              <a href="/get-bear">
                <GetButton className="mt-4">Befriend a bear</GetButton>
              </a>
            </Link>
          </Content>
        </Inner>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(CenteredContent)`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  @media (max-width: 976px) {
    padding: 2rem 0;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 976px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 33%;
  img {
    width: 100px;
  }

  img:hover {
    transform: translateY(-2px);
  }
  h3 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    margin: 0;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
    margin: 4rem 0 2rem;
  }

  @media (max-width: 976px) {
    width: 100%;
    p {
      margin: 30px 0;
    }
  }
`;

const Images = styled.div`
  width: 50%;
  height: 700px;
  position: relative;
  z-index: 2;

  @media (max-width: 976px) {
    height: auto;
    width: 100%;
    margin-bottom: 3rem;
  }
  img:first-child {
    position: absolute;
    top: 0;
    left: 0;
    z-index: inherit;
    width: 350px;
    height: 400px;
    object-fit: cover;
    object-position: 0 0;

    @media (max-width: 976px) {
      width: 100%;
      height: auto;
      position: inherit;
    }
  }

  img:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: inherit;
    height: 310px;
    width: 360px;
    object-fit: cover;

    @media (max-width: 976px) {
      display: none;
    }
  }
`;

const BlackBox = styled.div`
  background-color: ${({ theme }) => '#c1c1c1'};
  height: 300px;
  width: 300px;
  border-radius: 1000px;
  z-index: -1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 200px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  @media (max-width: 976px) {
    display: none;
  }
`;

const Overlay = styled(BlackBox)`
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.purple};
  mix-blend-mode: overlay;
`;

export default About;
