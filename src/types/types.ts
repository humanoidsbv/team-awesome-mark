export interface HomepageProps {
  initialTimeEntries: TimeEntryProps[];
}

export interface TimeEntryProps {
  activity: string;
  client: string;
  endTime: string;
  id: number;
  startTime: string;
}
