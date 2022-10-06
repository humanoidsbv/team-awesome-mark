import { useState } from "react";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { SubHeader } from "../src/components/subheader";
import { TimeEntries } from "../src/components/time-entries";
import * as Types from "../src/types/types";

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

const TimeSheets = ({ initialTimeEntries }: HomepageProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <SubHeader entries={initialTimeEntries.length} label="Timesheets" handleModal={handleModal} />
      <TimeEntries
        isModalActive={isModalActive}
        initialTimeEntries={initialTimeEntries}
        handleModal={handleModal}
      />
    </>
  );
};

export default TimeSheets;
