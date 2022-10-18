import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $activity: String!
    $client: String!
    $startTime: String!
    $endTime: String!
  ) {
    createTimeEntry(
      activity: $activity
      client: $client
      startTime: $startTime
      endTime: $endTime
    ) {
      id
      activity
      client
      startTime
      endTime
    }
  }
`;

export const DELETE_TIME_ENTRY = gql`
  mutation removeTimeEntry($id: ID!) {
    removeTimeEntry(id: $id) {
      id
    }
  }
`;
