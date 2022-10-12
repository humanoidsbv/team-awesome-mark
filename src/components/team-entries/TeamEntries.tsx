import { useContext, useEffect, useState } from "react";

import { TeamEntriesContext } from "../../context/TeamEntriesProvider";
import { Modal } from "../modal/Modal";
import { TeamEntry } from "../team-entry/TeamEntry";
import { TeamEntryForm } from "../team-entry-form";
import * as Styled from "./TeamEntries.styled";
import { Filter } from "../filter/Filter";

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
      if (a.firstName < b.firstName) {
        return ascending ? 1 : -1;
      }
      if (a.firstName > b.firstName) {
        return ascending ? -1 : 1;
      }
      return 0;
    });

    setOrderedEntries(sortedEntries);
  };

  useEffect(() => {
    handleSort();
  }, [ascending]);

  return (
    <Styled.Container>
      <Modal isActive={isModalActive} onClose={handleModal} title={"New Humanoid"}>
        <TeamEntryForm isActive={isModalActive} handleModal={handleModal} />
      </Modal>
      <Styled.Wrapper>
        <Styled.Sort onClick={() => setAscending(!ascending)}>
          {ascending ? "Sort by first name (A-Z) ▼" : "Sort by first name (Z-A) ▲"}
        </Styled.Sort>
        <Filter setCurrentClient={setCurrentClient} />
      </Styled.Wrapper>
      {orderedEntries
        .filter((teamEntry) => currentClient === "" || teamEntry.client === currentClient)
        .map((teamEntry, i, arr) => {
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
