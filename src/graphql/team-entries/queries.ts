import { gql } from "@apollo/client";

export const GET_TEAM_ENTRIES = gql`
  query GetTeamEntries {
    allTeamEntries {
      id
      client
      firstName
      lastName
      role
      startDate
    }
  }
`;
