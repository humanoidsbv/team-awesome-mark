import { useState } from "react";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { SubHeader } from "../src/components/subheader";
import { TimeEntries } from "../src/components/time-entries";
import * as Types from "../src/types/types";
import { EntriesProvider } from "../src/context/EntriesProvider";

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  return {
    props: {
      initialTimeEntries,
    },
  };
};

interface TimeSheetProps {
  initialTimeEntries: Types.TimeEntry[];
}

const TimeSheets = ({ initialTimeEntries }: TimeSheetProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <EntriesProvider initialTimeEntries={initialTimeEntries}>
        <SubHeader
          entries={initialTimeEntries.length}
          label="Timesheets"
          handleModal={handleModal}
        />
        <TimeEntries isModalActive={isModalActive} handleModal={handleModal} />
      </EntriesProvider>
    </>
  );
};

export default TimeSheets;
