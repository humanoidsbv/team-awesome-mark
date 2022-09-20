import { useState } from "react";
import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/images/bin.svg";
import mockTimeEntries from "../../fixtures/mockTimeEntries";

export const TimeEntry = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  return (
    <>
      {timeEntries.map((timeEntry) => (
        <Styled.Container key={timeEntry.id}>
          <Styled.Client>{timeEntry.client}</Styled.Client>
          <Styled.TimeContainer>
            <Styled.Time>
              {timeEntry.startTimestamp}
              {timeEntry.stopTimestamp}
            </Styled.Time>
            <Styled.TotalTime>08:00</Styled.TotalTime>
          </Styled.TimeContainer>
          <Styled.Button>
            <BinIcon />
          </Styled.Button>
        </Styled.Container>
      ))}
    </>
  );
};
