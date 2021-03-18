import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { GlobalProvider } from "../Context/Web3Context";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CryptoBears | Home</title>
      </Head>
      <GlobalStyle />
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Component {...pageProps} />
          </Web3ReactProvider>
        </ThemeProvider>
      </GlobalProvider>
    </>
  );
}
