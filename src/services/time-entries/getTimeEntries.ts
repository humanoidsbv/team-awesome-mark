import * as Classes from "../../classes/classes";
import * as Types from "../../types/types";

export async function getTimeEntries(): Promise<Types.EntryProps[]> {
  const response = await fetch("http://localhost:3004/time-entries?_sort=startTime&_order=desc")
    .then(async (response) => {
      if (response.status === 404) {
        throw new Classes.NotFoundError(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      if (error instanceof Classes.NotFoundError) {
        prompt("Sorry, we kunnen je data ff niet vinden man 🤷‍♂️");

        return error;
      }
    });

  return response;
}
