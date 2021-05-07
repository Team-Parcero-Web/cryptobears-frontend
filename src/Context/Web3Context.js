import React, { createContext, useContext } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useCookies } from 'react-cookie';
import Contract from 'web3-eth-contract';
import { bearsABI } from '../contracts/bears';

const Web3Context = createContext();

export const GlobalProvider = ({ children }) => {
  const [cookie, setCookie] = useCookies(['isLoggedIn']);

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
  });

  const [state, setState] = React.useState({
    contract: null,
    isMetamask: true,
    bearValue: 0,
    isLoggedIn: Boolean(cookie.isLoggedIn) || false,
  });

  React.useEffect(() => {
    Contract.setProvider(window.web3?.currentProvider);

    setState({
      ...state,
      isMetamask: !!window.web3,
      contract: new Contract(
        bearsABI,
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      ),
    });
  }, []);

  React.useEffect(() => {
    setCookie('isLoggedIn', JSON.stringify(state.isLoggedIn), {
      path: '/',
      maxAge: 28800, // Expires after 1hr
      sameSite: true,
    });
  }, [setCookie, state.isLoggedIn]);

  const changeState = React.useCallback(
    statePortion => {
      setState({ ...state, ...statePortion });
    },
    [state.contract],
  );

  const customInitState = { injected, state, setState: changeState };

  return (
    <Web3Context.Provider value={customInitState}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => useContext(Web3Context);
