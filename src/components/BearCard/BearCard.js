import React from "react";
import { Label } from "../lib";
import styled from "styled-components";

const BearCard = ({ bear }) => {
  const { image, id } = bear;
  const imgSrc = image.split("?")[0];
  return (
    <Wrapper>
      <img src="/images/bears.png" alt="bear" />
      <Label className="mt-3">Bear number {id}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.32s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    transform: scale(1.15);
  }
  img {
    max-width: 225px;

    @media (max-width: 768px) {
      max-width: 100px;
    }
  }
`;

export default BearCard;
