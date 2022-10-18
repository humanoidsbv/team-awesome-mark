import { gql } from "@apollo/client";

export const ADD_TEAM_ENTRY = gql`
  mutation CreateTeamEntry(
    $client: String!
    $firstName: String!
    $lastName: String!
    $role: String!
    $startDate: String!
  ) {
    createTeamEntry(
      client: $client
      firstName: $firstName
      lastName: $lastName
      role: $role
      startDate: $startDate
    ) {
      id
      client
      firstName
      lastName
      role
      startDate
    }
  }
`;

export const DELETE_TEAM_ENTRY = gql`
  mutation RemoveTeamEntry($id: ID!) {
    removeTeamEntry(id: $id) {
      id
    }
  }
`;
