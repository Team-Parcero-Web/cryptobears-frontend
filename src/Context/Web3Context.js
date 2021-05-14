import React, { createContext, useContext } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useCookies } from 'react-cookie';
import Contract from 'web3-eth-contract';
import { bearsABI } from '../contracts/bears';

const Web3Context = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return { ...state, isLoggedIn: true };
    }
    case 'logout': {
      return { ...state, isLoggedIn: false };
    }
    case 'setContract': {
      return { ...state, contract: action.payload };
    }
    case 'setBearPrice': {
      return { ...state, bearPrice: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const [cookie, setCookie] = useCookies(['isLoggedIn']);

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
  });

  const [state, dispatch] = React.useReducer(globalReducer, {
    contract: null,
    isMetamask: true,
    bearPrice: 0,
    isLoggedIn: Boolean(cookie.isLoggedIn) || false,
  });

  React.useEffect(() => {
    Contract.setProvider(window.web3?.currentProvider);
    const firstContract = new Contract(
      bearsABI,
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    );
    dispatch({ type: 'setContract', payload: firstContract });
  }, []);

  React.useEffect(() => {
    setCookie('isLoggedIn', JSON.stringify(state.isLoggedIn), {
      path: '/',
      maxAge: 28800, // Expires after 1hr
      sameSite: true,
    });
  }, [setCookie, state.isLoggedIn]);

  const customInitState = { injected, state, dispatch };

  return (
    <Web3Context.Provider value={customInitState}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => useContext(Web3Context);
