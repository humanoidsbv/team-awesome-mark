import * as Types from "../../types/types";

export interface TeamEntryApi extends Types.TeamEntry {}

export async function getTeamEntries(): Promise<TeamEntryApi[] | Error> {
  const data = await fetch("process.env.NEXT_PUBLIC_DB_HOST/team-entries")
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
