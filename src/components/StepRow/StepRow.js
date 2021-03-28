import React from "react";
import styled from "styled-components";
import { Heading3, Heading2 } from "../lib";

const StepRow = ({ step, textPosition }) => {
  const { stepText, image, id } = step;
  return (
    <Step textPosition={textPosition}>
      <Small textPosition={textPosition}>
        <div className="smallimg">
          <img src={image} alt="step image" />
        </div>
      </Small>
      <Large textPosition={textPosition}>
        <Heading2> Step {id}</Heading2>
        <p>{stepText}</p>
      </Large>
    </Step>
  );
};

const Step = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ textPosition }) =>
    textPosition === "left" ? "1fr 0.3fr" : "0.3fr 1fr"};
  grid-gap: 10rem;
  padding: 2rem 0;
  border-bottom: 2px solid #c1c1c1;
  padding: 7rem 0rem;
  justify-content: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 5rem;
    padding: 5rem 0rem;
  }
`;

const Small = styled.div`
  order: ${({ textPosition }) => (textPosition === "left" ? 2 : 1)};
  @media (max-width: 768px) {
    order: 2;
  }
  img {
    box-shadow: 1px 5px 5px 3px rgba(0, 0, 0, 0.2);
    transition: 0.3s transform;
  }

  .smallimg:hover {
    transform: scale(1.11);
  }

  .smallimg {
    position: relative;
    transition: 0.3s transform;
    width: 300px;
  }

  .smallimg::after {
    display: block;
    position: absolute;
    top: 20px;
    left: ${({ textPosition }) => (textPosition === "left" ? "-30px" : " 30px")};
    width: 100%;
    height: 100%;
    content: "";
    z-index: -1;
    border: ${({ theme }) => `3px solid ${theme.colors.purple}`};
    border-radius: 5px;
    transition: 0.3s top, 0.3s left;

    @media (max-width: 768px) {
      left: -20px;
    }
  }
  .smallimg:hover::after {
    top: 10px;
    left: ${({ textPosition }) => (textPosition === "left" ? "-10px" : " 10px")};
  }
`;

const Large = styled.div`
  order: ${({ textPosition }) => (textPosition === "left" ? 1 : 2)};
  text-align: ${({ textPosition }) => (textPosition === "left" ? "left" : "right")};
  @media (max-width: 768px) {
    text-align: center;
    order: 1;
  }
  p {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
`;

export default StepRow;
