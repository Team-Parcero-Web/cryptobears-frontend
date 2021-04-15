import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

const Content = styled.div`
  min-height: calc(100vh - 18rem);
  margin-top: 8rem;
`;
export default Layout;
