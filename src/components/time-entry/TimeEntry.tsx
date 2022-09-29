import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/images/bin.svg";

interface EntryProps {
  client: string;
  endTime: Date;
  startTime: Date;
}

export const TimeEntry = ({ client, endTime, startTime }: EntryProps) => {
  const formattedStartTime = new Date(startTime).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedStopTime = new Date(endTime).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Styled.Container>
        <Styled.Client>{client}</Styled.Client>
        <Styled.TimeContainer>
          <Styled.Time>
            {formattedStartTime} - {formattedStopTime}
          </Styled.Time>
          <Styled.TotalTime />
        </Styled.TimeContainer>
        <Styled.Button>
          <BinIcon />
        </Styled.Button>
      </Styled.Container>
    </>
  );
};
