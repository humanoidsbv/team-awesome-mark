import { useContext, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { DELETE_TIME_ENTRY } from "../../graphql/time-entries/mutations";
import { FilterTimeEntries } from "../filter-time-entries";
import { Modal } from "../modal/Modal";
import { TimeEntriesContext } from "../../context/TimeEntriesProvider";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryForm } from "../time-entry-form";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";
import { GET_TIME_ENTRIES } from "../../graphql/time-entries/queries";

interface TimeEntriesProps {
  handleModal: () => void;
  isModalActive: boolean;
}

export const TimeEntries = ({ isModalActive, handleModal }: TimeEntriesProps) => {
  const { timeEntries, setTimeEntries } = useContext(TimeEntriesContext);
  const [orderedEntries, setOrderedEntries] = useState(timeEntries);
  const [ascending, setAscending] = useState(false);
  const [currentClient, setCurrentClient] = useState("");
  const [deleteTimeEntry] = useMutation(DELETE_TIME_ENTRY, {
    onCompleted: async ({ removeTimeEntry }) => {
      const filteredEntries = timeEntries.filter((entry) => entry.id !== removeTimeEntry.id);
      setTimeEntries(filteredEntries);
    },
    refetchQueries: [{ query: GET_TIME_ENTRIES }],
  });

  const handleSort = async () => {
    const sortedEntries = timeEntries.sort((a, b) => {
      if (a.startTime < b.startTime) {
        return ascending ? 1 : -1;
      }
      if (a.startTime > b.startTime) {
        return ascending ? -1 : 1;
      }
      return 0;
    });
    setOrderedEntries(sortedEntries);
  };

  useEffect(() => {
    handleSort();
  }, [ascending, timeEntries]);

  const handleDelete = async (entry: Types.TimeEntry) => {
    const { id } = entry;

    await deleteTimeEntry({
      variables: {
        id,
      },
    });
  };

  return (
    <>
      <Styled.Container>
        <Modal isActive={isModalActive} onClose={handleModal} title="New Time Entry">
          <TimeEntryForm handleModal={handleModal} />
        </Modal>
        <Styled.Wrapper>
          <Styled.Sort onClick={() => setAscending(!ascending)}>
            {ascending ? "Sort by time (oldest first) ▲" : "Sort by time (newest first) ▼"}
          </Styled.Sort>
          <FilterTimeEntries setCurrentClient={setCurrentClient} />
        </Styled.Wrapper>
        {orderedEntries
          .filter((teamEntry) => currentClient === "" || teamEntry.client === currentClient)
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
                  handleDelete={() => handleDelete(timeEntry)}
                />
              </div>
            );
          })}
      </Styled.Container>
    </>
  );
};
