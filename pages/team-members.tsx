import { useState } from "react";

import { SubHeader } from "../src/components/subheader";
import { TeamEntries } from "../src/components/team-entries";
import { TeamEntriesProvider } from "../src/context/TeamEntriesProvider";
import * as Types from "../src/types/types";
import { GET_TEAM_ENTRIES } from "../src/graphql/team-entries/queries";
import { client } from "../src/services/apollo-client/apollo-client";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TEAM_ENTRIES,
  });

  return {
    props: {
      initialTeamEntries: data.allTeamEntries,
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
          entriesLabel="Humanoids"
        />
        <TeamEntries isModalActive={isModalActive} handleModal={handleModal} />
      </TeamEntriesProvider>
    </>
  );
};

export default TeamMembers;
