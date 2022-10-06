import * as Types from "../../types/types";

export interface TimeEntryApi extends Types.TimeEntry {}

export async function getTeamEntries(): Promise<TimeEntryApi[] | Error> {
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
