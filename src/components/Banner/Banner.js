import React from "react";
import Image from "next/image";
import { Container, Heading, CenteredContent, floating, floating2 } from "../lib";
import styled, { keyframes } from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <MainContent>
          <div className="left">
            <Heading xlarge={true}>CryptoBears.</Heading>
            <Heading>Welcome to the forest of these restless bears.</Heading>
            <img src="/paw3.png" />
          </div>
          <img src="/paw1.png" />
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
    margin-top: 10rem;
    justify-items: center;

    .left {
      max-width: 100%;
      position: relative;
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
