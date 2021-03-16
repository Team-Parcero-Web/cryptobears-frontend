import React from "react";
import { Container, Heading, CenteredContent, floating, floating2 } from "../lib";
import styled, { keyframes } from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <MainContent>
          <div className="left">
            <Heading>Lorem ipsum, dolor sit amet consectetur adipisicing.</Heading>
            <img src="/ether2.png" width="auto" height="auto" />
          </div>
          <img src="/ether.svg" width="auto" height="auto" />
        </MainContent>
      </Container>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1c8db;
  height: 700px;
`;

const MainContent = styled(CenteredContent)`
  .left {
    max-width: 60%;
    position: relative;
    img {
      width: 100px;
      height: auto;
      z-index: 11;
      bottom: 0px;
      right: 150px;
      display: block;
      position: absolute;
      animation: ${floating2} 5s ease-in-out infinite;
    }
  }

  img {
    transform: rotate(50deg);
    width: 500px;
    height: 500px;
    animation: ${floating} 6s ease-in-out infinite;
  }
`;
