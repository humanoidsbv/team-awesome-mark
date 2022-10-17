import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
                                mutation CreateTimeEntry($client: String!, $endTimestamp: String!, $startTimestamp: String!) {                
                                  createTimeEntry(client: $client, endTimestamp: $endTimestamp, startTimestamp: $startTimestamp) {
                                  id client date: { endTimestamp startTimestamp }
                                  }
                                }
                              `;
