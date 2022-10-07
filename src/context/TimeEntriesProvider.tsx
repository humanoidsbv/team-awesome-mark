import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import * as Types from "../types/types";

interface TimeEntriesProvider {
  children: ReactNode;
  initialTimeEntries: Types.TimeEntry[];
}

interface TimeEntriesContext {
  initialTimeEntries?: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  timeEntries: Types.TimeEntry[];
}

export const TimeEntriesContext = createContext<TimeEntriesContext>({} as TimeEntriesContext);

export const TimeEntriesProvider: FC<TimeEntriesProvider> = ({ children, initialTimeEntries }) => {
  const [timeEntries, setTimeEntries] = useState(initialTimeEntries);
  const entries = {
    timeEntries,
    setTimeEntries,
  };

  return <TimeEntriesContext.Provider value={entries}>{children}</TimeEntriesContext.Provider>;
};
