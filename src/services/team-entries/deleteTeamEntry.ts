import * as Types from "../../types/types";

export async function deleteTeamEntry(teamEntry: Types.TeamEntry) {
  const data = await fetch(
    `https://my-json-server.typicode.com/humanoidsbv/team-awesome-mark/team-entries/${teamEntry.id}`,
    {
      method: "DELETE",
    },
  )
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
