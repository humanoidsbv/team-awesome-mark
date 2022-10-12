import * as Types from "../../types/types";

export interface TimeEntryApi extends Types.TimeEntry {}

export async function getTimeEntries(): Promise<TimeEntryApi[] | Error> {
  const data = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-mark/time-entries?_sort=startTime&_order=desc",
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
