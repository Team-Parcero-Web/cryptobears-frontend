import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { theme } from "../styles/theme";

const Web3Provider = dynamic(() => import("react-web3"), { ssr: false });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = true;
  }, [Web3Provider]);
  return (
    <>
      <GlobalStyle />

      {ref.current ? (
        <Web3Provider>
          <ThemeProvider theme={theme}>
            hihi <Component {...pageProps} />
          </ThemeProvider>
        </Web3Provider>
      ) : (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}
