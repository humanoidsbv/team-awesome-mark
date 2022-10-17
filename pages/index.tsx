import { useState } from "react";

import { SubHeader } from "../src/components/subheader";
import { TimeEntries } from "../src/components/time-entries";
import * as Types from "../src/types/types";
import { TimeEntriesProvider } from "../src/context/TimeEntriesProvider";
import { GET_TIME_ENTRIES } from "../src/graphql/time-entries/queries";
import { client } from "../src/services/apollo-client/apollo-client";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TIME_ENTRIES,
  });

  return {
    props: {
      initialTimeEntries: data.allTimeEntries,
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
          entries={3}
          label="Timesheets"
          handleModal={handleModal}
          entriesLabel="Entries"
        />
        <TimeEntries isModalActive={isModalActive} handleModal={handleModal} />
      </TimeEntriesProvider>
    </>
  );
};

export default TimeSheets;
