import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation createTimeEntry(
    $activity: String!
    $client: String!
    $startTime: Date!
    $endTime: Date!
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
