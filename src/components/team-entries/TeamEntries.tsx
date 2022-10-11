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
  const [toggleSort, setToggleSort] = useState<boolean>(false);
  const [orderedEntries, setOrderedEntries] = useState(teamEntries);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [currentClient, setCurrentClient] = useState("");

  const order = ["ascending", "descending"];

  const handleSort = async () => {
    orderedEntries.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return order === "ascending" ? 1 : -1;
      }
      if (a.firstName > b.firstName) {
        return order === "descending" ? 1 : -1;
      }
      return 0;
    });
    setSortOrder(sortOrder);
    setOrderedEntries(orderedEntries);
    setToggleSort(!toggleSort);
  };

  useEffect(() => {
    handleSort();
  }, [sortOrder]);

  return (
    <Styled.Container>
      <Modal isActive={isModalActive} onClose={handleModal} title={"New Humanoid"}>
        <TeamEntryForm isActive={isModalActive} handleModal={handleModal} />
      </Modal>
      <Styled.Wrapper>
        <Styled.Sort onClick={handleSort} value={order}>
          {!toggleSort ? "Sort by first name (A-Z) ▼" : "Sort by first name (Z-A) ▲"}
        </Styled.Sort>
        <Filter setCurrentClient={setCurrentClient} />
      </Styled.Wrapper>
      {orderedEntries
        .filter((teamEntry) => currentClient === "" || teamEntry.client === currentClient)
        .map((teamEntry, i, arr) => {
          return (
            <div key={Math.random()}>
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
