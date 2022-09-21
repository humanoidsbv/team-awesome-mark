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

  return (
    <>
      <Styled.Container>
        {timeEntries
          .sort(
            (a, b) => new Date(b.startTimestamp).valueOf() - new Date(a.stopTimestamp).valueOf(),
          )
          .map((timeEntry, i) => {
            const currentDate = new Date(timeEntry.startTimestamp).toLocaleDateString("en-GB", {
              weekday: "long",
              month: "numeric",
              day: "numeric",
            });
            const previousDate = new Date(timeEntries[i - 1]?.startTimestamp).toLocaleDateString(
              "en-GB",
              {
                weekday: "long",
                month: "numeric",
                day: "numeric",
              },
            );

            return (
              <>
                {previousDate !== currentDate && (
                  <Styled.Section>
                    <Styled.Weekday>{currentDate}</Styled.Weekday>
                    <Styled.Time>08:00</Styled.Time>
                  </Styled.Section>
                )}
                <TimeEntry
                  client={timeEntry.client}
                  key={timeEntry.id}
                  startTime={timeEntry.startTimestamp}
                  stopTime={timeEntry.stopTimestamp}
                />
              </>
            );
          })}

        <button onClick={handleClick}>Add time entry</button>
      </Styled.Container>
    </>
  );
};
