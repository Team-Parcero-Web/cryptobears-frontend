import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import { useWeb3Context } from "../../Context/Web3Context";
import { useWeb3React } from "@web3-react/core";

const Layout = ({ children }) => {
  const { activate } = useWeb3React();
  const { injected } = useWeb3Context();

  React.useEffect(() => {
    if (
      window.localStorage.getItem("isLoggedIn") &&
      window.localStorage.getItem("isLoggedIn") === "true"
    ) {
      activate(injected);
    }
  }, []);

  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  min-height: calc(100vh - 10rem);
  padding-top: 8rem;
`;
export default Layout;
