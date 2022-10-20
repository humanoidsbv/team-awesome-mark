import { useContext, useEffect, useState } from "react";

import { TeamEntriesContext } from "../../context/TeamEntriesProvider";
import { Modal } from "../modal/Modal";
import { TeamEntry } from "../team-entry/TeamEntry";
import { TeamEntryForm } from "../team-entry-form";
import * as Styled from "./TeamEntries.styled";
import { FilterTeamMembers } from "../filter-team-members/FilterTeamMembers";

interface TeamEntriesProps {
  handleModal: () => void;
  isModalActive: boolean;
}

export const TeamEntries = ({ isModalActive, handleModal }: TeamEntriesProps) => {
  const { teamEntries } = useContext(TeamEntriesContext);
  const [orderedEntries, setOrderedEntries] = useState(teamEntries);
  const [ascending, setAscending] = useState(true);
  const [currentClient, setCurrentClient] = useState("");

  const handleSort = () => {
    const sortedEntries = teamEntries.sort((a, b) => {
      if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
        return ascending ? 1 : -1;
      }
      if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
        return ascending ? -1 : 1;
      }
      return 0;
    });

    setOrderedEntries(sortedEntries);
  };

  useEffect(() => {
    handleSort();
  }, [ascending, teamEntries]);

  return (
    <Styled.Container>
      <Modal isActive={isModalActive} onClose={handleModal} title="New Humanoid">
        <TeamEntryForm handleModal={handleModal} />
      </Modal>
      <Styled.Wrapper>
        <Styled.Sort onClick={() => setAscending(!ascending)}>
          {ascending ? "Sort by first name (A-Z) ▼" : "Sort by first name (Z-A) ▲"}
        </Styled.Sort>
        <FilterTeamMembers setCurrentClient={setCurrentClient} />
      </Styled.Wrapper>
      {orderedEntries
        .filter((teamEntry) => currentClient === "" || teamEntry.client === currentClient)
        .map((teamEntry) => {
          return (
            <div key={teamEntry.id}>
              <TeamEntry
                client={teamEntry.client}
                firstName={teamEntry.firstName}
                lastName={teamEntry.lastName}
                role={teamEntry.role}
                startDate="February 2022"
                key={teamEntry.id}
              />
            </div>
          );
        })}
    </Styled.Container>
  );
};
