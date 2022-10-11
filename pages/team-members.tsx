import { useState } from "react";

import { getTeamEntries } from "../src/services/team-entries";
import { SubHeader } from "../src/components/subheader";
import { TeamEntries } from "../src/components/team-entries";
import { TeamEntriesProvider } from "../src/context/TeamEntriesProvider";
import * as Types from "../src/types/types";

export const getServerSideProps = async () => {
  const initialTeamEntries = await getTeamEntries();

  return {
    props: {
      initialTeamEntries,
    },
  };
};

interface TeamMembersProps {
  initialTeamEntries: Types.TeamEntry[];
}

const TeamMembers = ({ initialTeamEntries }: TeamMembersProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <TeamEntriesProvider initialTeamEntries={initialTeamEntries}>
        <SubHeader
          entries={initialTeamEntries.length}
          label="Team members"
          handleModal={handleModal}
          entriesLabel={"Humanoids"}
        ></SubHeader>
        <TeamEntries isModalActive={isModalActive} handleModal={handleModal} />
      </TeamEntriesProvider>
    </>
  );
};

export default TeamMembers;
