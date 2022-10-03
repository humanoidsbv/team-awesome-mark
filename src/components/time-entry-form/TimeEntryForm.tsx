import React, { useState, Dispatch } from "react";

import { Button } from "../../components/button/Button";
import { postTimeEntry } from "../../../src/services/time-entries/postTimeEntry";
import * as Styled from "./TimeEntryForm.styled";
import * as Types from "../../types/types";

interface TimeEntryFormProps {
  setTimeEntries: Dispatch<Types.TimeEntry[]>;
  timeEntries: Types.TimeEntry[];
  isActive?: boolean;
  handleModal: () => void;
}

export const TimeEntryForm = ({ setTimeEntries, timeEntries, handleModal }: TimeEntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>({
    client: "",
    id: "",
    startTime: "",
    endTime: "",
    activity: "",
  });

  const resetEntry = {
    client: "",
    id: "",
    startTime: "",
    endTime: "",
    activity: "",
  };

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [key]: event.target.value });
  };

  const formatTime = (date: string, time: string) => {
    const formattedTime = new Date(`${date}T${time}:00.000Z`);
    return formattedTime;
  };

  const handleSubmit = async () => {
    const response = await postTimeEntry(newTimeEntry);
    const newResponse = {
      ...response,
      startTime: formatTime(response.date, response.startTime),
      endTime: formatTime(response.date, response.endTime),
    };
    setTimeEntries([...timeEntries, newResponse]);
    setNewTimeEntry(resetEntry);
    handleModal();
  };

  return (
    <>
      <Styled.Form>
        <Styled.Label>Client</Styled.Label>
        <Styled.Input
          name="client"
          type="text"
          value={newTimeEntry.client ?? ""}
          onChange={(event) => handleChange("client", event)}
        />
        <Styled.Label>Activity</Styled.Label>
        <Styled.Input
          name="activity"
          type="text"
          value={newTimeEntry.activity ?? ""}
          onChange={(event) => handleChange("activity", event)}
        />
        <Styled.Wrapper>
          <Styled.Label>Date</Styled.Label>
          <Styled.Input
            name="date"
            type="date"
            value={newTimeEntry.date ?? ""}
            onChange={(event) => handleChange("date", event)}
          />
          <Styled.TimeWrapper>
            <Styled.LabelSmall>From</Styled.LabelSmall>
            <Styled.InputSmall
              name="startTime"
              type="time"
              value={newTimeEntry.startTime ?? ""}
              onChange={(event) => handleChange("startTime", event)}
            />
            <Styled.LabelSmall>To</Styled.LabelSmall>
            <Styled.InputSmall
              name="endTime"
              type="time"
              value={newTimeEntry.endTime ?? ""}
              onChange={(event) => handleChange("endTime", event)}
            />
            <Styled.TotalWrapper>
              <Styled.TotalTitle>Total</Styled.TotalTitle>
              <Styled.TotalTime>8:00</Styled.TotalTime>
            </Styled.TotalWrapper>
          </Styled.TimeWrapper>
        </Styled.Wrapper>
      </Styled.Form>
      <Styled.ButtonWrapper>
        <Button onClick={handleModal} variant={"secondary"} label={"Cancel"}></Button>
        <Button onClick={handleSubmit} variant={"primary"} label={"Add time entry"}></Button>
      </Styled.ButtonWrapper>
    </>
  );
};
