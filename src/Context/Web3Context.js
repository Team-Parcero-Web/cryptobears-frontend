import React, { createContext, useContext } from "react";
import Contract from "web3-eth-contract";
import { InjectedConnector } from "@web3-react/injected-connector";
import { bearsABI } from "../contracts/bears";

const Web3Context = createContext();

export const GlobalProvider = ({ children }) => {
  const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 56, 97] });
  const [state, setState] = React.useState({ contract: null, isMetamask: true, value: 0 });

  React.useEffect(() => {
    Contract.setProvider(window.web3?.currentProvider);
    setState({
      isMetamask: window.web3 ? true : false,
      contract: new Contract(bearsABI, process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    });
  }, []);

  React.useEffect(() => {
    if (state.contract?.methods && window.web3) {
      state.contract.methods
        .claimPrice()
        .call()
        .then((data) =>
          setState({
            ...state,
            value: data,
          })
        );
    }
  }, [state.contract]);
  const customInitState = { injected, state };

  return <Web3Context.Provider value={customInitState}>{children}</Web3Context.Provider>;
};

export const useWeb3Context = () => useContext(Web3Context);
