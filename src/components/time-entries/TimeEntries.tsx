import { useContext, useState, useEffect } from "react";

import { deleteTimeEntry } from "../../services/time-entries/deleteTimeEntry";
import { TimeEntriesContext } from "../../context/TimeEntriesProvider";
import { Modal } from "../modal/Modal";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryForm } from "../time-entry-form";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";

interface TimeEntriesProps {
  handleModal: () => void;
  isModalActive: boolean;
}

export const TimeEntries = ({ isModalActive, handleModal }: TimeEntriesProps) => {
  const { timeEntries, setTimeEntries } = useContext(TimeEntriesContext);
  const [orderedEntries, setOrderedEntries] = useState(timeEntries);
  const [ascending, setAscending] = useState(false);

  const handleSort = async () => {
    const sortedEntries = timeEntries.sort((a, b) => {
      const startTimeA = new Date(a.startTime).valueOf();
      const startTimeB = new Date(b.startTime).valueOf();
      if (startTimeA < startTimeB) {
        return ascending ? 1 : -1;
      }
      if (startTimeA > startTimeB) {
        return ascending ? -1 : 1;
      }
      return 0;
    });
    setOrderedEntries(sortedEntries);
  };

  useEffect(() => {
    handleSort();
  }, [ascending]);

  const handleDelete = async (entry: Types.TimeEntry) => {
    const deletedEntry = timeEntries.indexOf(entry);
    const deleteResponse = await deleteTimeEntry(entry);
    if (deleteResponse instanceof Error) {
      alert("Something went wrong :(");
      return;
    }
    setTimeEntries([
      ...timeEntries.slice(0, deletedEntry),
      ...timeEntries.slice(deletedEntry + 1, timeEntries.length),
    ]);
  };

  return (
    <>
      <Styled.Container>
        <Modal isActive={isModalActive} onClose={handleModal} title={"New Time Entry"}>
          <TimeEntryForm isActive={isModalActive} handleModal={handleModal} />
        </Modal>
        <Styled.Wrapper>
          <Styled.Sort onClick={() => setAscending(!ascending)}>
            {ascending ? "Sort by time (oldest first) ▲" : "Sort by time (newest first) ▼"}
          </Styled.Sort>
        </Styled.Wrapper>
        {orderedEntries.map((timeEntry, i, arr) => {
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
                handleDelete={async () => await handleDelete(timeEntry)}
              />
            </div>
          );
        })}
      </Styled.Container>
    </>
  );
};
