import React from 'react';
import styled from 'styled-components';

const Greetings = () => {
  return (
    <Scrolling>
      willkommen • Welcome • Bienvenido • 欢迎光临 • Benvenuto • Bem-vindo •
      добро пожаловать • ようこそ
    </Scrolling>
  );
};

const Scrolling = styled.div`
  text-transform: capitalize;
  position: absolute;
  font-size: 3rem;
  font-weight: 500;
  max-width: 1800px;
  width: 100%;
  text-align: center;
  color: black;
  z-index: 1;
  background-color: transparent;
  margin-top: 40px;
  left: 50%;
  transform: translatex(-50%);

  @media (max-width: 976px) {
    font-size: 1.2rem;
    max-width: 100%;
    top: 40px;
  }
`;
export default Greetings;
