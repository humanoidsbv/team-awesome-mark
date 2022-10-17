import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import React from "react";

import { ApolloProvider } from "@apollo/client";
import { client } from "../src/services/apollo-client/apollo-client";
import { Header } from "../src/components/header/Header";
import { theme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

function TeamAwesome({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default TeamAwesome;
