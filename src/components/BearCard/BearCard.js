import React from "react";
import { Label } from "../lib";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const BearCard = ({ bear, mobile }) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  const { image, index } = bear;
  return (
    <Wrapper>
      {!imgLoaded && <Skeleton height={mobile ? 120 : 250} width={mobile ? 100 : 220} />}
      <img src={image} alt="bear" onLoad={() => setImgLoaded(true)} />
      <Label className="mt-3">Bear number {index}</Label>
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
