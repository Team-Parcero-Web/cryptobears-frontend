import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { GlobalProvider } from "../Context/Web3Context";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Head from "next/head";
import "nprogress/nprogress.css";

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

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>CryptoBears | Home</title>
      </Head>
      <GlobalStyle />
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                  },
                  pageExit: {
                    opacity: 0,
                  },
                }}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                key={router.route}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Web3ReactProvider>
        </ThemeProvider>
      </GlobalProvider>
    </>
  );
}
