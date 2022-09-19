import { ThemeProvider } from "styled-components";
import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/subheader";

import GlobalStyle from "../src/styles/global.ts";
import { theme } from "../src/styles/theme.ts";

const Homepage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SubHeader />
      </ThemeProvider>
    </>
  );
};

export default Homepage;