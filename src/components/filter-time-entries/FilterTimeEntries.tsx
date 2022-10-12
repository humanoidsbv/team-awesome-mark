import React, { useContext, SetStateAction } from "react";
import * as Styled from "./FilterTimeEntries.styled";
import { TimeEntriesContext } from "../../context/TimeEntriesProvider";

interface FilterTimeEntriesProps {
  setCurrentClient: React.Dispatch<SetStateAction<string>>;
}

export const FilterTimeEntries = ({ setCurrentClient }: FilterTimeEntriesProps) => {
  const { timeEntries } = useContext(TimeEntriesContext);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentClient(event.target.value);
  };

  const clients = [...new Set(timeEntries.map((entry) => entry.client))];

  return (
    <>
      <Styled.Container>
        <Styled.Label>Filter by client:</Styled.Label>
        <Styled.Select name="clients" id="client-filter" onChange={handleFilter}>
          <option value="">Choose a client</option>
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
