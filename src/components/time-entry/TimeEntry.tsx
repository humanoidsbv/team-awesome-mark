import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/images/bin.svg";
import * as Types from "../../types/types";

export const TimeEntry = ({ client, endTime, startTime, handleDelete }: Types.TimeEntry) => {
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
        <Styled.Button onClick={() => handleDelete()}>
          <BinIcon />
        </Styled.Button>
      </Styled.Container>
    </>
  );
};
