import * as Styled from "./TimeEntryForm.styled";
import React, { useState } from "react";
import { Button } from "../../components/button/Button";

export const TimeEntryForm = () => {
  const [newTimeEntry, setNewTimeEntry] = useState({
    activity: "",
    client: "",
    endTime: "",
    startTime: "",
  });

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [key]: event.target.value });
  };

  const handleSubmit = () => {
    const addedTimeEntry = newTimeEntry;
    console.log(addedTimeEntry);
    setNewTimeEntry({});
  };

  return (
    <>
      <Styled.Container>
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
          <Button onClick={handleSubmit} variant={"secondary"} label={"Cancel"}></Button>
          <Button onClick={handleSubmit} variant={"primary"} label={"Add time entry"}></Button>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </>
  );
};
