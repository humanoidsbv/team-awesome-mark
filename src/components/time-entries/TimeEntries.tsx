import { useContext } from "react";

import { deleteTimeEntry } from "../../services/time-entries/deleteTimeEntry";
import { EntriesContext } from "../../context/EntriesProvider";
import { Modal } from "../modal/Modal";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryForm } from "../time-entry-form";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";

interface Homepage {
  handleModal: () => void;
  isModalActive: boolean;
}

export const TimeEntries = ({ isModalActive, handleModal }: Homepage) => {
  const { timeEntries, setTimeEntries } = useContext(EntriesContext);

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
                  handleDelete={async () => await handleDelete(timeEntry)}
                />
              </div>
            );
          })}
      </Styled.Container>
    </>
  );
};
