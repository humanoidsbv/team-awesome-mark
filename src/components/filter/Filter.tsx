import { useContext, SetStateAction } from "react";
import * as Styled from "./Filter.styled";
import { TeamEntriesContext } from "../../context/TeamEntriesProvider";

interface FilterProps {
  setCurrentClient: React.Dispatch<SetStateAction<string>>;
}

export const Filter = ({ setCurrentClient }: FilterProps) => {
  const { teamEntries, setTeamEntries } = useContext(TeamEntriesContext);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentClient(event.target.value);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Label>Filter by client:</Styled.Label>
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
