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

  const onlyClients = teamEntries.map(function (entry) {
    return entry.client;
  });

  const formattedClients = [...new Set(onlyClients)];

  return (
    <>
      <Styled.Container>
        <Styled.Label>Filter by client:</Styled.Label>
        <Styled.Select name="clients" id="client-filter" onChange={handleFilter}>
          <option value="">Choose a client</option>
          {formattedClients.map((entry) => {
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
