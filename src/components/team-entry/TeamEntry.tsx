import * as Styled from "./TeamEntry.styled";
import BinIcon from "../../../public/images/bin.svg";

interface TimeEntryProps {
  client: string;
  endTime: string;
  startTime: string;
  handleDelete: () => void;
}

export const TimeEntry = ({ client, endTime, startTime, handleDelete }: TimeEntryProps) => {
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
        <Styled.Button onClick={handleDelete}>
          <BinIcon />
        </Styled.Button>
      </Styled.Container>
    </>
  );
};
