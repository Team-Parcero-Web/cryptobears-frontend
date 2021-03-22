import React from "react";

const BearCard = ({ bear }) => {
  const { img, id } = bear;
  return (
    <div>
      <img src={img} alt="bear" />
    </div>
  );
};

export default BearCard;
