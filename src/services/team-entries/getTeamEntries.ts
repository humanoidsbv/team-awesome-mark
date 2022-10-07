import * as Types from "../../types/types";

export interface TeamEntryApi extends Types.TeamEntry {}

export async function getTeamEntries(): Promise<TeamEntryApi[] | Error> {
  const response = await fetch("http://localhost:3004/clients")
    .then(async (response) => {
      if (response.status !== 200) {
        throw new Error(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      return error;
    });

  return response;
}
