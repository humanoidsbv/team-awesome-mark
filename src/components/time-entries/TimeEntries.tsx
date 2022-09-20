import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = () => {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Weekday>Friday 29-07 (Today)</Styled.Weekday>
        <Styled.Time>08:00</Styled.Time>
      </Styled.Section>
      <TimeEntry />
    </Styled.Container>
  );
};
