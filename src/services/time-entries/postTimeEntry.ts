import * as Types from "../../types/types";

export async function postTimeEntry(newTimeEntry: Types.TimeEntry) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&_order=desc`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTimeEntry),
    },
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
