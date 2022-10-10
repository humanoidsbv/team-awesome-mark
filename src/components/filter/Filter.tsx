import { useContext } from "react";
import * as Styled from "./Filter.styled";
import { TeamEntriesContext } from "../../context/TeamEntriesProvider";

interface Filter {}

export const Filter = ({}: Filter) => {
  const { teamEntries, setTeamEntries } = useContext(TeamEntriesContext);

  return (
    <>
      <Styled.Container>
        <Styled.Label for="client-filter">Filter by client:</Styled.Label>
        <Styled.Select
          name="clients"
          id="client-filter"
          onChange={(event) => handleChange("client", event)}
        >
          <option value="">Choose a client</option>
          <option value="Hike One">Hike One</option>
          <option value="Koppert">Koppert</option>
          <option value="Heineken">Port of Rotterdam</option>
        </Styled.Select>
      </Styled.Container>
    </>
  );
};
