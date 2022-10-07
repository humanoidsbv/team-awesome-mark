import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import * as Types from "../types/types";

interface TeamEntriesProvider {
  children: ReactNode;
  initialTeamEntries: Types.TeamEntry[];
}

interface TeamEntriesContext {
  initialTeamEntries?: Types.TeamEntry[];
  setTeamEntries: Dispatch<SetStateAction<Types.TeamEntry[]>>;
  teamEntries: Types.TeamEntry[];
}

export const TeamEntriesContext = createContext<TeamEntriesContext>({} as TeamEntriesContext);

export const TeamEntriesProvider: FC<TeamEntriesProvider> = ({ children, initialTeamEntries }) => {
  const [teamEntries, setTeamEntries] = useState(initialTeamEntries);
  const entries = {
    teamEntries,
    setTeamEntries,
  };

  return <TeamEntriesContext.Provider value={entries}>{children}</TeamEntriesContext.Provider>;
};
