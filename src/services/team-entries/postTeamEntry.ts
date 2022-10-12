import * as Types from "../../types/types";

export async function postTeamEntry(newTeamEntry: Types.TeamEntry) {
  const data = await fetch("http://localhost:3004/team-entries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTeamEntry),
  })
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
