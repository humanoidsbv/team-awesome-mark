import { useContext, useState } from "react";
import * as Styled from "./Filter.styled";
import { TeamEntriesContext } from "../../context/TeamEntriesProvider";

export const Filter = ({ setCurrentClient, currentClient }) => {
  const { teamEntries, setTeamEntries } = useContext(TeamEntriesContext);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentClient(event.target.value);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Label for="client-filter">Filter by client:</Styled.Label>
        <Styled.Select name="clients" id="client-filter" onChange={handleFilter}>
          <option value="">Choose a client</option>
          {teamEntries.map((entry) => {
            return (
              <option value={entry.client} label={entry.client}>
                {entry.client}
              </option>
            );
          })}
        </Styled.Select>
      </Styled.Container>
    </>
  );
};
