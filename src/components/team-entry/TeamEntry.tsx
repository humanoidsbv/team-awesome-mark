import * as Styled from "./TeamEntry.styled";

interface TeamEntryProps {
  client: string;
  teamMembers: string;
  startDate: string;
}

export const TeamEntry = ({ client, teamMembers, startDate }: TeamEntryProps) => {
  return (
    <>
      <Styled.Container>
        {client}
        {teamMembers}
        {startDate}
      </Styled.Container>
    </>
  );
};
