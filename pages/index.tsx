import { useState } from "react";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { Header } from "../src/components/header";
import { EntriesProvider } from "../src/context/EntriesProvider";
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
      <EntriesProvider initialTimeEntries={initialTimeEntries}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <SubHeader
            entries={initialTimeEntries.length}
            label="Timesheets"
            handleModal={handleModal}
          />
          <TimeEntries isModalActive={isModalActive} handleModal={handleModal} />
        </ThemeProvider>
      </EntriesProvider>
    </>
  );
};

export default Homepage;
