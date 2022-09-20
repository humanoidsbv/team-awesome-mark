import { useState } from "react";
import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/images/bin.svg";
import mockTimeEntries from "../../fixtures/mockTimeEntries";

interface EntryProps {
  client: string;
  startTime: string;
  stopTime: string;
}

export const TimeEntry = ({ client, startTime, stopTime }: EntryProps) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  const formattedStartTime = new Date(startTime).toLocaleTimeString("en-GB", options);
  const formattedStopTime = new Date(stopTime).toLocaleTimeString("en-GB", options);

  return (
    <>
      <Styled.Container>
        <Styled.Client>{client}</Styled.Client>
        <Styled.TimeContainer>
          <Styled.Time>
            {formattedStartTime} - {formattedStopTime}
          </Styled.Time>
          <Styled.TotalTime></Styled.TotalTime>
        </Styled.TimeContainer>
        <Styled.Button>
          <BinIcon />
        </Styled.Button>
      </Styled.Container>
    </>
  );
};
