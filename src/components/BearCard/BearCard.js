import React from "react";
import { Label } from "../lib";
import styled from "styled-components";

const BearCard = ({ bear }) => {
  const { image, id } = bear;
  return (
    <Wrapper>
      <img src={image} alt="bear" />
      <Label>Bear number {id}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  img {
    max-width: 200px;

    @media (max-width: 768px) {
      max-width: 150px;
    }
  }
`;

export default BearCard;
