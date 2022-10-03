import * as Types from "../../types/types";

export async function postTimeEntry(newTimeEntry: Promise<Types.TimeEntry[]>) {
  const response = await fetch("http://localhost:3004/time-entries?_sort=startTime&_order=desc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTimeEntry),
  })
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
