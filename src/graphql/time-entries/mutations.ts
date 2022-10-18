import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation createTimeEntry(
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
