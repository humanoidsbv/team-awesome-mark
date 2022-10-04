import React, { useState, Dispatch, useRef } from "react";

import { Button } from "../../components/button/Button";
import * as Styled from "./TimeEntryForm.styled";
import * as Types from "../../types/types";
import { postTimeEntry } from "../../../src/services/time-entries/postTimeEntry";

interface TimeEntryFormProps {
  setTimeEntries: Dispatch<Types.TimeEntry[]>;
  timeEntries: Types.TimeEntry[];
  isActive?: boolean;
  handleModal: () => void;
}

type NewTimeEntry = {
  newTimeEntry: object;
};

export const TimeEntryForm = ({ setTimeEntries, timeEntries, handleModal }: TimeEntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<NewTimeEntry[{}]>({
    activity: "",
    client: "",
    date: "",
    endTime: "",
    startTime: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [key]: event.target.value });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(event.target.checkValidity());
  };

  const formatTime = (date: string, time: string) => {
    const formattedTime = new Date(`${date}T${time}:00.000Z`);
    return formattedTime;
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(event?.target.checkValidity());
    setTimeEntries([
      ...timeEntries,
      {
        ...newTimeEntry,
        id: Math.random(),
        startTime: formatTime(newTimeEntry.date, newTimeEntry.startTime),
        endTime: formatTime(newTimeEntry.date, newTimeEntry.endTime),
      },
    ]);
    postTimeEntry(newTimeEntry);
    setNewTimeEntry({});
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
        <Button
          disabled
          onClick={handleSubmit}
          variant={"primary"}
          label={"Add time entry"}
        ></Button>
      </Styled.ButtonWrapper>
    </>
  );
};
