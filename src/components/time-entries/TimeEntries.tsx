import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";

interface TimeEntriesProps {
  time: string;
  weekday: string;
  date: string;
  day: string;
}

export const TimeEntries = ({ time, weekday, date, day }: TimeEntriesProps) => (
  <Styled.Container>
    <Styled.Weekday>Friday 29-07 (Today)</Styled.Weekday>
    <Styled.Time>08:00</Styled.Time>
    <TimeEntry />
  </Styled.Container>
);
