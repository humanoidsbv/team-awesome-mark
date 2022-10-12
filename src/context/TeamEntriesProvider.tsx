import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import * as Types from "../types/types";

interface TeamEntriesProviderProps {
  children: ReactNode;
  initialTeamEntries: Types.TeamEntry[];
}

interface TeamEntriesContextProps {
  initialTeamEntries?: Types.TeamEntry[];
  setTeamEntries: Dispatch<SetStateAction<Types.TeamEntry[]>>;
  teamEntries: Types.TeamEntry[];
}

export const TeamEntriesContext = createContext<TeamEntriesContextProps>(
  {} as TeamEntriesContextProps,
);

export const TeamEntriesProvider: FC<TeamEntriesProviderProps> = ({
  children,
  initialTeamEntries,
}) => {
  const [teamEntries, setTeamEntries] = useState(initialTeamEntries);
  const entries = {
    teamEntries,
    setTeamEntries,
  };

  return <TeamEntriesContext.Provider value={entries}>{children}</TeamEntriesContext.Provider>;
};
