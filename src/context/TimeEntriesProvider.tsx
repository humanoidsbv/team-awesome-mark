import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import * as Types from "../types/types";

interface TimeEntriesProviderProps {
  children: ReactNode;
  initialTimeEntries: Types.TimeEntry[];
}

interface TimeEntriesContextProps {
  initialTimeEntries?: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  timeEntries: Types.TimeEntry[];
}

export const TimeEntriesContext = createContext<TimeEntriesContextProps>(
  {} as TimeEntriesContextProps,
);

export const TimeEntriesProvider: FC<TimeEntriesProviderProps> = ({
  children,
  initialTimeEntries,
}) => {
  const [timeEntries, setTimeEntries] = useState(initialTimeEntries);
  const entries = {
    timeEntries,
    setTimeEntries,
  };

  return <TimeEntriesContext.Provider value={entries}>{children}</TimeEntriesContext.Provider>;
};
