import React from "react";
import { CenteredContent, Container, BtnLink } from "../lib";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <Images>
            <img src="/black.jpg" alt="Picture of the author" />
            <img src="/deer.jpg" alt="Picture of the author" />
            <BlackBox />
            <Overlay />
          </Images>
          <Content>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quos ut porro optio
              voluptatum libero rerum minima deleniti. Id, voluptatum, dolor ad quam enim earum illo
              dolores provident quidem rem atque alias at ducimus ex delectus temporibus, incidunt
              beatae. At, suscipit sint. Possimus pariatur in veritatis illo non expedita minima!
            </p>
            <BtnLink>
              <a href="#bears">Watch bears</a>
            </BtnLink>
          </Content>
        </Inner>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(CenteredContent)`
  padding: 48px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 33%;

  @media (max-width: 976px) {
    width: 40%;
  }

  h3 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    line-height: 3rem;
    font-weight: 300;
    margin: 40px 0 72px;
  }
`;

const Images = styled.div`
  width: 50%;
  height: 700px;
  position: relative;
  z-index: 2;

  @media (max-width: 976px) {
    height: 600px;
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
    transform: scaleX(-1);

    @media (max-width: 976px) {
      width: 250px;
      height: 300px;
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
      height: 260px;
      width: 300px;
    }
  }
`;

const BlackBox = styled.div`
  background-color: ${({ theme }) => "#c1c1c1"};
  height: 300px;
  width: 300px;
  border-radius: 1000px;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 200px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  @media (max-width: 976px) {
    height: 200px;
    width: 200px;
  }
`;

const Overlay = styled(BlackBox)`
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.purple};
  mix-blend-mode: overlay;
`;

export default About;
