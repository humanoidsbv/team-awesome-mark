export interface HomepageProps {
  timeEntriesAtBuild: TimeEntryProps[];
}

export interface TimeEntryProps {
  activity: string;
  client: string;
  endTime: string;
  id: number;
  startTime: string;
}
