import { useState } from "react";
import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";
import mockTimeEntries from "../../fixtures/mockTimeEntries";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Rijksmuseum",
        startTimestamp: "2022-09-24T04:00:00.000Z",
        stopTimestamp: "2022-09-26T10:00:00.000Z",
      },
    ]);
  };
  const date = new Date();
  const today = date.toLocaleString("en-GB", { weekday: "long", month: "numeric", day: "numeric" });
  console.log(today);

  return (
    <>
      <Styled.Container>
        <Styled.Section>
          <Styled.Weekday>{today}</Styled.Weekday>
          <Styled.Time>08:00</Styled.Time>
        </Styled.Section>
        {timeEntries.map((timeEntry, index) => {
          //Unfinished code
          const startDate = new Date(timeEntry.startTimestamp);

          return (
            <TimeEntry
              client={timeEntry.client}
              key={timeEntry.id}
              startTime={timeEntry.startTimestamp}
              stopTime={timeEntry.stopTimestamp}
              startDate={startDate}
            />
          );
        })}
        <button onClick={handleClick}>Add time entry</button>
      </Styled.Container>
    </>
  );
};
