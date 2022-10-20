import { useState } from "react";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { SubHeader } from "../src/components/subheader";
import { TimeEntries } from "../src/components/time-entries";
import * as Types from "../src/types/types";
import { TimeEntriesProvider } from "../src/context/TimeEntriesProvider";

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  return {
    props: {
      initialTimeEntries,
    },
  };
};

interface TimeSheetsProps {
  initialTimeEntries: Types.TimeEntry[];
}

const TimeSheets = ({ initialTimeEntries }: TimeSheetsProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <TimeEntriesProvider initialTimeEntries={initialTimeEntries}>
        <SubHeader
          entries={initialTimeEntries.length}
          label="Timesheets"
          handleModal={handleModal}
          entriesLabel="Entries"
          buttonText="New time entry"
        />
        <TimeEntries isModalActive={isModalActive} handleModal={handleModal} />
      </TimeEntriesProvider>
    </>
  );
};

export default TimeSheets;
