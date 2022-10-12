import * as Types from "../../types/types";

export async function deleteTimeEntry(entry: Types.TimeEntry) {
  const data = await fetch(`http://localhost:3004/time-entries/${entry.id}`, {
    method: "DELETE",
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      return { error };
    });

  return data;
}
