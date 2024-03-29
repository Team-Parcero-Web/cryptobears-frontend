import React from 'react';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';
import { useWeb3Context } from '../../Context/Web3Context';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  const { activate, chainId } = useWeb3React();
  const {
    injected,
    dispatch,
    state: { contract, isLoggedIn },
  } = useWeb3Context();

  React.useEffect(() => {
    if (isLoggedIn) {
      activate(injected);
    }
  }, [activate, injected, isLoggedIn]);

  React.useEffect(() => {
    if (chainId === +process.env.NEXT_PUBLIC_CHAIN_ID && contract) {
      contract.methods
        .claimPrice()
        .call()
        .then(data => {
          dispatch({ type: 'setBearPrice', payload: data });
        });
    }
  }, [chainId, contract, dispatch]);

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
