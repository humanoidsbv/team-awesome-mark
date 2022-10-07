import { useContext } from "react";

import { TeamEntriesContext } from "../../context/TeamEntriesProvider";
import { Modal } from "../modal/Modal";
import { TeamEntry } from "../team-entry/TeamEntry";
// import { TeamEntryForm } from "../team-entry-form";
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
          {/* <TeamEntryForm isActive={isModalActive} handleModal={handleModal} /> */}
        </Modal>
        {teamEntries.map((teamEntry) => {
          return (
            <>
              <Styled.Section>
                <Styled.Weekday></Styled.Weekday>
                <Styled.Time>Koppert</Styled.Time>
              </Styled.Section>
              <TeamEntry
                client={teamEntry.client}
                teamMembers={teamEntry.teamMembers}
                startDate={teamEntry.startDate}
              />
            </>
          );
        })}
      </Styled.Container>
    </>
  );
};
