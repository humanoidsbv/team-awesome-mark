import { AppProps } from "next/app";
import { ThemeProvider, ServerStyleSheet } from "styled-components";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import React from "react";

import { Header } from "../src/components/header/Header";
import { theme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

export class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default function RootLayout(
  { children }: { children: React.ReactNode },
  { Component, pageProps }: AppProps,
) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <Header />
          <Component {...pageProps} />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
