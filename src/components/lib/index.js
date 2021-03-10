import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1440px) {
    max-width: 1280px;
  }

  @media (max-width: 1280px) {
    max-width: 976px;
  }

  @media (max-width: 976px) {
    max-width: 768px;
  }
`;

export const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 1280px) {
    max-width: 776px;
  }

  @media (max-width: 976px) {
    max-width: 668px;
  }
`;
export const Heading = styled.h1`
  font-size: 6rem;
  letter-spacing: 5px;
  margin: 0;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const BtnLink = styled.div`
  a {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    color: "black";
    text-transform: uppercase;
  }
`;

//Keyframes

export const floating = keyframes`
	0% {
		transform: translatey(20px) rotate(-10deg); ;
	}
	50% {
		transform: translatey(-60px) rotate(-10deg); ;
	}
	100% {
		transform: translatey(20px) rotate(-10deg); ;
	}
`;

export const floating2 = keyframes`
	0% {
		transform: translatey(10px) rotate(15deg); ;
	}
	50% {
		transform: translatey(-20px) rotate(15deg); ;
	}
	100% {
		transform: translatey(10px) rotate(15deg); ;
	}
`;
