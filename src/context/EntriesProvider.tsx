import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import * as Types from "../types/types";

interface EntriesProvider {
  children: ReactNode;
  initialTimeEntries: Types.TimeEntry[];
}

interface EntriesContext {
  initialTimeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  timeEntries: Types.TimeEntry[];
}

export const EntriesContext = createContext<EntriesContext>({} as EntriesContext);

export const EntriesProvider: FC<EntriesProvider> = ({ children, initialTimeEntries }) => {
  const [timeEntries, setTimeEntries] = useState(initialTimeEntries);
  const entries = {
    timeEntries,
    setTimeEntries,
  };

  return <EntriesContext.Provider value={entries}>{children}</EntriesContext.Provider>;
};
