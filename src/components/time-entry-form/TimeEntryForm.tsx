import React, { useState, useRef, useContext } from "react";

import { Button } from "../shared/button/Button";
import { postTimeEntry } from "../../services/time-entries/postTimeEntry";
import * as Styled from "./TimeEntryForm.styled";
import { TimeEntriesContext } from "../../context/TimeEntriesProvider";

interface TimeEntryFormProps {
  handleModal: () => void;
}

const initialFormValues = {
  activity: "",
  client: "",
  endTime: "",
  startTime: "",
  date: "",
};

export const TimeEntryForm = ({ handleModal }: TimeEntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState(initialFormValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const { timeEntries, setTimeEntries } = useContext(TimeEntriesContext);

  const formRef = useRef<HTMLFormElement>(null);

  const handleBlur = () => {
    setIsFormValid(formRef.current?.checkValidity() || false);
  };

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [key]: event.target.value });
  };

  const handleSubmit = async () => {
    const formattedEntry = {
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      endTime: `${newTimeEntry.date}T${newTimeEntry.endTime}:00.000Z`,
      startTime: `${newTimeEntry.date}T${newTimeEntry.startTime}:00.000Z`,
    };
    const postedEntry = await postTimeEntry(formattedEntry);
    if (postedEntry) {
      setTimeEntries([...timeEntries, postedEntry]);
      setNewTimeEntry(initialFormValues);
    }
    handleModal();
  };

  return (
    <>
      <Styled.Form ref={formRef}>
        <Styled.Label>Client</Styled.Label>
        <Styled.Input
          maxLength={20}
          minLength={3}
          name="client"
          onBlur={handleBlur}
          onChange={(event) => handleChange("client", event)}
          placeholder="Client name"
          required
          type="text"
          value={newTimeEntry.client ?? ""}
        />
        {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
        <Styled.Label>Activity</Styled.Label>
        <Styled.Input
          maxLength={60}
          minLength={1}
          name="activity"
          onBlur={handleBlur}
          onChange={(event) => handleChange("activity", event)}
          placeholder="Type of activity"
          required
          type="text"
          value={newTimeEntry.activity ?? ""}
        />
        {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
        <Styled.Label>Date</Styled.Label>
        <Styled.Input
          name="date"
          onBlur={handleBlur}
          onChange={(event) => handleChange("date", event)}
          type="date"
          value={newTimeEntry.date ?? ""}
          required
        />
        {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
        <Styled.Wrapper>
          <Styled.TimeWrapper>
            <Styled.Label>From</Styled.Label>
            <Styled.InputSmall
              name="startTime"
              onBlur={handleBlur}
              required
              onChange={(event) => handleChange("startTime", event)}
              type="time"
              value={newTimeEntry.startTime ?? ""}
            />
            {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
          </Styled.TimeWrapper>
          <Styled.TimeWrapper>
            <Styled.Label>To</Styled.Label>
            <Styled.InputSmall
              name="endTime"
              type="time"
              required
              value={newTimeEntry.endTime ?? ""}
              onBlur={handleBlur}
              onChange={(event) => handleChange("endTime", event)}
            />
            {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
          </Styled.TimeWrapper>
          <Styled.TotalWrapper>
            <Styled.Label>Total</Styled.Label>
            <Styled.TotalTime>8:00</Styled.TotalTime>
          </Styled.TotalWrapper>
        </Styled.Wrapper>
      </Styled.Form>
      <Styled.ButtonWrapper>
        <Button onClick={handleModal} variant="secondary" label="Cancel" />
        <Button
          disabled={!isFormValid}
          label="Add time entry"
          onClick={handleSubmit}
          variant="primary"
        />
      </Styled.ButtonWrapper>
    </>
  );
};
