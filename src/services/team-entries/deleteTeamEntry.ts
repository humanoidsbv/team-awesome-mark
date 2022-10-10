import * as Types from "../../types/types";

export async function deleteTeamEntry(teamEntry) {
  const response = await fetch(`http://localhost:3004/team-entries/${teamEntry.id}`, {
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

  return response;
}
