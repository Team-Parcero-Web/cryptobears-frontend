import React, { createContext, useContext } from "react";
import Contract from "web3-eth-contract";
import { InjectedConnector } from "@web3-react/injected-connector";
import { bearsABI } from "../contracts/bears";

const Web3Context = createContext();

export const GlobalProvider = ({ children }) => {
  const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 56] });
  const [contract, setContract] = React.useState({});
  const [isMetamask, setIsMetamask] = React.useState(true);

  React.useEffect(() => {
    Contract.setProvider(window.web3?.currentProvider);
    setIsMetamask(window.web3 ? true : false);
    setContract(new Contract(bearsABI, "0x7A2CB10a677bd1185E7EC03060758c7AD35a463c"));
  }, []);

  const customInitState = { injected, contract, isMetamask };

  return <Web3Context.Provider value={customInitState}>{children}</Web3Context.Provider>;
};

export const useWeb3Context = () => useContext(Web3Context);
