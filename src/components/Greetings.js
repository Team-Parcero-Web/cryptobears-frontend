import React from "react";
import styled from "styled-components";

const Greetings = () => {
  return <Scrolling>willkommen • Welcome • Benvenuto • Bem-vindo • добро пожаловать</Scrolling>;
};

const Scrolling = styled.div`
  text-transform: uppercase;
  position: absolute;
  font-size: 4rem;
  white-space: nowrap;
  text-align: center;
  // padding-left: 100%;
  color: black;
  z-index: 20;
  background-color: transparent;
  margin-top: 100px;
  left: 50%;
  transform: translatex(-50%);
  @keyframes floatText {
    to {
      transform: translateX(-100%);
    }
  }
`;
export default Greetings;
