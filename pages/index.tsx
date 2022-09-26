import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/subheader";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import { TimeEntries } from "../src/components/time-entries";
import * as Types from "../src/types/types";
import GlobalStyle from "../src/styles/global";

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  return {
    props: {
      initialTimeEntries,
    },
  };
};

const Homepage = ({ initialTimeEntries }: Types.HomepageProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SubHeader entries={0} label="Timesheets" />
        <TimeEntries initialTimeEntries={initialTimeEntries} />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
