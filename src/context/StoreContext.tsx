import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import * as Types from "../types/types";

interface StoreProviderProps {
  children: ReactNode;
  initialTimeEntries: Types.TimeEntry[];
}

interface StoreContextProps {
  initialTimeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialTimeEntries }) => {
  const [timeEntries, setTimeEntries] = useState(initialTimeEntries);
  const entries = {
    timeEntries,
    setTimeEntries,
  };

  return <StoreContext.Provider value={entries}>{children}</StoreContext.Provider>;
};
