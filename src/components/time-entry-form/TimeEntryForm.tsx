import React, { useState, Dispatch, useRef } from "react";

import { Button } from "../../components/button/Button";
import { postTimeEntry } from "../../../src/services/time-entries/postTimeEntry";
import * as Styled from "./TimeEntryForm.styled";
import * as Types from "../../types/types";

interface TimeEntryFormProps {
  setTimeEntries: Dispatch<Types.TimeEntryApi[]>;
  timeEntries: Types.TimeEntryApi[];
  isActive?: boolean;
  handleModal: () => void;
}

export const TimeEntryForm = ({ setTimeEntries, timeEntries, handleModal }: TimeEntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntryApi>({
    activity: "",
    client: "",
    endTime: "",
    id: "",
    startTime: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(true);
  const resetEntry = {
    activity: "",
    client: "",
    endTime: "",
    id: "",
    startTime: "",
  };

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [key]: event.target.value });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(event.target.checkValidity());
  };

  const handleSubmit = async () => {
    const formattedEntry = {
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      endTime: `${newTimeEntry.date}T${newTimeEntry.endTime}:00.000Z`,
      startTime: `${newTimeEntry.date}T${newTimeEntry.startTime}:00.000Z`,
    };
    const postedEntry = await postTimeEntry(formattedEntry);
    setTimeEntries([...timeEntries, postedEntry]);
    setNewTimeEntry(resetEntry);
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
          type="text"
          value={newTimeEntry.activity ?? ""}
        />
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
          <Styled.StartTimeWrapper>
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
          </Styled.StartTimeWrapper>
          <Styled.StopTimeWrapper>
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
          </Styled.StopTimeWrapper>
          <Styled.TotalWrapper>
            <Styled.Label>Total</Styled.Label>
            <Styled.TotalTime>8:00</Styled.TotalTime>
          </Styled.TotalWrapper>
        </Styled.Wrapper>
      </Styled.Form>
      <Styled.ButtonWrapper>
        <Button onClick={handleModal} variant={"secondary"} label={"Cancel"}></Button>
        <Button onClick={handleSubmit} variant={"primary"} label={"Add time entry"}></Button>
      </Styled.ButtonWrapper>
    </>
  );
};
