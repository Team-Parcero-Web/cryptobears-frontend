import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
  CenteredContent,
  Container,
  floating,
  floating2,
  GetButton,
  Heading,
} from '../lib';

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <MainContent>
          <div className="left">
            <Heading xlarge className="main">
              CryptoBears
              <span> NFTs.</span>
            </Heading>
            <Heading className="secondary">
              Welcome to the forest of these restless bears.
            </Heading>
            <Link href="/get-bear">
              <a href="/get-bear">
                <GetButton className="mt-4">Befriend a bear</GetButton>
              </a>
            </Link>
            <img src="/images/paw3.png" alt="paw coin" />
          </div>
          <img src="/images/paw1.png" alt="paw coin" />
        </MainContent>
      </Container>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
  margin-top: -4rem;
  height: 700px;

  @media (max-width: 768px) {
    height: 600px;
    align-items: start;
  }
`;

const MainContent = styled(CenteredContent)`
  .left {
    max-width: 60%;
    position: relative;

    .main {
      font-weight: 600;

      span {
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    .secondary {
      font-weight: 400;
    }
    img {
      width: 100px;
      height: auto;
      z-index: 11;
      bottom: -75px;
      right: 150px;
      display: block;
      position: absolute;
      animation: ${floating2} 5s ease-in-out infinite;
    }
  }

  img {
    transform: rotate(50deg);
    width: 400px;
    height: 400px;

    animation: ${floating} 6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    display: grid;
    margin-top: 8rem;
    justify-items: center;
    text-align: center;

    .left {
      max-width: 100%;
      position: relative;
      h1 {
        text-align: center;
      }
      img {
        display: none;
      }
    }

    img {
      margin-top: 30px !important;
      width: 200px;
      height: 200px;
    }
  }
`;
