import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import React from "react";

import { Header } from "../src/components/header/Header";
import { theme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

function TeamAwesome({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default TeamAwesome;
