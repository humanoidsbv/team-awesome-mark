import { useContext } from "react";

import { TeamEntriesContext } from "../../context/TeamEntriesProvider";
import { Modal } from "../modal/Modal";
import { TeamEntry } from "../team-entry/TeamEntry";
import { TeamEntryForm } from "../team-entry-form";
import * as Styled from "./TeamEntries.styled";

interface TeamEntriesProps {
  handleModal: () => void;
  isModalActive: boolean;
}

export const TeamEntries = ({ isModalActive, handleModal }: TeamEntriesProps) => {
  const { teamEntries, setTeamEntries } = useContext(TeamEntriesContext);

  return (
    <>
      <Styled.Container>
        <Modal isActive={isModalActive} onClose={handleModal} title={"New Humanoid"}>
          <TeamEntryForm isActive={isModalActive} handleModal={handleModal} />
        </Modal>
        {teamEntries.map((teamEntry, i, arr) => {
          const currentClient = teamEntry.client;
          const previousClient = arr[i - 1]?.client;
          return (
            <div key={teamEntry.id}>
              {previousClient !== currentClient && (
                <Styled.Section>
                  <Styled.Client>{currentClient}</Styled.Client>
                </Styled.Section>
              )}
              <TeamEntry
                client={teamEntry.client}
                firstName={teamEntry.firstName}
                lastName={teamEntry.lastName}
                role={teamEntry.role}
                startDate="February 2022"
              />
            </div>
          );
        })}
      </Styled.Container>
    </>
  );
};
