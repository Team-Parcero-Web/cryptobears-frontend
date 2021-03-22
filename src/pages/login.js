import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { Heading2, Button, Info } from "../components/lib";
import { useWeb3React } from "@web3-react/core";
import { useWeb3Context } from "../Context/Web3Context";
import { useRouter } from "next/router";

const login = () => {
  const { account, activate, error } = useWeb3React();
  const { injected } = useWeb3Context();
  const router = useRouter();

  function handleLogin() {
    activate(injected).then(() => {
      router.push("/my-profile");
    });
    window.sessionStorage.setItem("isLoggedIn", true);
  }

  React.useEffect(() => {
    if (window.sessionStorage.getItem("isLoggedIn") === "true") {
      activate(injected);
    }
  }, []);

  React.useEffect(() => {
    if (account && window.sessionStorage.getItem("isLoggedIn") === "true") {
      router.push("/");
    }
  }, [account]);

  return (
    <Login>
      <Header />
      <Content>
        <Heading2>Sign in with Metamask</Heading2>
        <Button className="mt-4 w-3" onClick={handleLogin}>
          Sign in
        </Button>
        {error && (
          <Info>Didn't work? Maybe you have a pending request on your metamask extension!</Info>
        )}
      </Content>
    </Login>
  );
};

const Login = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 400px;
    width: 400px;
    background-color: ${({ theme }) => theme.colors.pink};
    top: 200px;
    left: -200px;
    border-radius: 100%;
    overflow-y: hidden;

    @media (max-width: 768px) {
      height: 150px;
      width: 150px;
      top: 75px;
      left: -75px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 300px;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.purple};

    bottom: 100px;
    right: -150px;
    border-radius: 100%;
    overflow-y: hidden;

    @media (max-width: 7680px) {
      height: 125px;
      width: 125px;
      bottom: 50px;
      right: -50px;
    }
  }
`;

const Content = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
`;

export default login;
