import { TimeEntry } from "../time-entry/TimeEntry";
import { useState, useEffect } from "react";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";
import { getTimeEntries } from "../../services/time-entries/getTimeEntries";
import { ErrorBox } from "../error/ErrorBox";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntryProps[]>([]);
  const [dataError, setDataError] = useState(false);

  getTimeEntries();

  async function fetchTimeEntries() {
    const awaitTimeEntries = await getTimeEntries();
    if (awaitTimeEntries instanceof Error) {
      setDataError(true);
      return;
    }
    setTimeEntries(awaitTimeEntries);
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Rijksmuseum",
        startTime: "2022-09-24T04:00:00.000Z",
        endTime: "2022-09-26T10:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      <Styled.Container>
        {dataError && <ErrorBox />}
        {timeEntries
          ?.sort((a, b) => new Date(b.startTime).valueOf() - new Date(a.startTime).valueOf())
          .map((timeEntry, i, arr) => {
            const currentDate = new Date(timeEntry.startTime).toLocaleDateString("en-GB", {
              weekday: "long",
              month: "numeric",
              day: "numeric",
            });
            const previousDate = new Date(arr[i - 1]?.startTime).toLocaleDateString("en-GB", {
              weekday: "long",
              month: "numeric",
              day: "numeric",
            });

            return (
              <div key={timeEntry.id}>
                {previousDate !== currentDate && (
                  <Styled.Section>
                    <Styled.Weekday>{currentDate}</Styled.Weekday>
                    <Styled.Time>08:00</Styled.Time>
                  </Styled.Section>
                )}
                <TimeEntry
                  client={timeEntry.client}
                  startTime={timeEntry.startTime}
                  endTime={timeEntry.endTime}
                />
              </div>
            );
          })}
        <button onClick={handleClick}>Add time entry</button>
      </Styled.Container>
    </>
  );
};
