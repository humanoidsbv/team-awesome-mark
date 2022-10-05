import { useState } from "react";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { Header } from "../src/components/header";
import { StoreProvider } from "../src/context/StoreContext";
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

interface HomepageProps {
  initialTimeEntries: Types.TimeEntry[];
}

const Homepage = ({ initialTimeEntries }: HomepageProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <StoreProvider initialTimeEntries={initialTimeEntries}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <SubHeader
            entries={initialTimeEntries.length}
            label="Timesheets"
            handleModal={handleModal}
          />
          <TimeEntries
            isModalActive={isModalActive}
            initialTimeEntries={initialTimeEntries}
            handleModal={handleModal}
          />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default Homepage;
