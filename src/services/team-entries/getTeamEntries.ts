import * as Types from "../../types/types";

export interface TeamEntryApi extends Types.TeamEntry {}

export async function getTeamEntries(): Promise<TeamEntryApi[] | Error> {
  const data = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-mark/team-entries",
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      return error;
    });

  return data;
}
