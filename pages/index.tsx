import { ThemeProvider } from "styled-components";
import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/subheader";
import { TimeEntries } from "../src/components/time-entries";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const Homepage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SubHeader entries={0} label="Timesheets" />
        <TimeEntries />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
