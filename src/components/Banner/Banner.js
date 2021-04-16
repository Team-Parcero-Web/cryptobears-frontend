import React from "react";
import { Container, Heading, CenteredContent, floating, floating2, Button } from "../lib";
import styled from "styled-components";
import Link from "next/link";

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <MainContent>
          <div className="left">
            <Heading xlarge={true}>CryptoBears.</Heading>
            <Heading>Welcome to the forest of these restless bears.</Heading>
            <Link href="/get-bear">
              <a href="">
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

const GetButton = styled(Button)`
  font-size: 2.4rem;
  width: 240px;
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
