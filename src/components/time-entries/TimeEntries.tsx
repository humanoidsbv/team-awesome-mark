import { TimeEntry } from "../time-entry/TimeEntry";
import { useState } from "react";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";
import { Modal } from "../modal/Modal";
import { TimeEntryForm } from "../time-entry-form";

interface HomepageProps {
  initialTimeEntries: Types.TimeEntryProps[];
}

export const TimeEntries = ({
  initialTimeEntries,
  isModalActive,
  setIsModalActive,
}: HomepageProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntryProps[]>(initialTimeEntries);

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
                  endTime={timeEntry.endTime}
                  startTime={timeEntry.startTime}
                />
              </div>
            );
          })}
        <Modal
          isActive={isModalActive}
          onClose={() => setIsModalActive(false)}
          title={"New Time Entry"}
        >
          <TimeEntryForm setTimeEntries={setTimeEntries} />
        </Modal>
      </Styled.Container>
    </>
  );
};
