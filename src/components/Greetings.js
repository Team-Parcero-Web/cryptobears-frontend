import React from "react";
import styled from "styled-components";

const Greetings = () => {
  return (
    <Scrolling>
      willkommen • Welcome • Bienvenido • 欢迎光临 • Benvenuto • Bem-vindo • добро пожаловать •
      ようこそ
    </Scrolling>
  );
};

const Scrolling = styled.div`
  text-transform: uppercase;
  position: absolute;
  font-size: 3rem;
  max-width: 1800px;
  width: 100%;
  text-align: center;
  color: black;
  z-index: 20;
  background-color: transparent;
  margin-top: 100px;
  left: 50%;
  transform: translatex(-50%);

  @media (max-width: 976px) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    margin-top: 8rem;
    max-width: 100%;
  }
`;
export default Greetings;
