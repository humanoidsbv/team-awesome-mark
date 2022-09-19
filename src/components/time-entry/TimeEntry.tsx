import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/images/bin.svg";

interface TimeEntryProps {
  onClick: () => void;
  client: string;
  time: string;
}

export const TimeEntry = ({ onClick, client, time, totalTime }: TimeEntryProps) => (
  <Styled.Container>
    <Styled.Client>Port of Rotterdam{client}</Styled.Client>
    <Styled.TimeContainer>
      <Styled.Time>09:00 - 17:00{time}</Styled.Time>
      <Styled.TotalTime>08:00{totalTime}</Styled.TotalTime>
    </Styled.TimeContainer>
    <Styled.Button onClick={onClick}>
      <BinIcon />
    </Styled.Button>
  </Styled.Container>
);
