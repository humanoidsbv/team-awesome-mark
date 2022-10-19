import React, { useContext, SetStateAction } from "react";
import * as Styled from "./FilterTeamMembers.styled";
import { TeamEntriesContext } from "../../context/TeamEntriesProvider";

interface FilterTeamMemberProps {
  setCurrentClient: React.Dispatch<SetStateAction<string>>;
}

export const FilterTeamMembers = ({ setCurrentClient }: FilterTeamMemberProps) => {
  const { teamEntries } = useContext(TeamEntriesContext);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentClient(event.target.value);
  };

  const clients = [...new Set(teamEntries.map((entry) => entry.client))];

  return (
    <>
      <Styled.Container>
        <Styled.Select name="clients" id="client-filter" onChange={handleFilter}>
          <option value="">--Filter by client--</option>
          {clients.map((entry) => {
            return (
              <option value={entry} label={entry} key={entry}>
                {entry}
              </option>
            );
          })}
        </Styled.Select>
      </Styled.Container>
    </>
  );
};
