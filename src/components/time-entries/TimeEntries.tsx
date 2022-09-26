import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryModal } from "../time-entry-modal/TimeEntryModal";
import { useState } from "react";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";

export const TimeEntries = ({ timeEntriesAtBuild }: Types.HomepageProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntryProps[]>(timeEntriesAtBuild);
  const [isModalActive, setIsModalActive] = useState(false);

  // const onClick = () => {
  //   setTimeEntries([
  //     ...timeEntries,
  //     {
  //       id: Math.random(),
  //       client: "Rijksmuseum",
  //       startTime: "2022-09-24T04:00:00.000Z",
  //       endTime: "2022-09-26T10:00:00.000Z",
  //       activity: "Development",
  //     },
  //   ]);
  // };

  return (
    <>
      <Styled.Container>
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
        <button onClick={() => setIsModalActive(true)}>Add time entry</button>
        <TimeEntryModal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
          <p>Hallo en welkom. Dit is dus de modal. Ik ga m nu nog ff stylen brb</p>
        </TimeEntryModal>
      </Styled.Container>
    </>
  );
};
