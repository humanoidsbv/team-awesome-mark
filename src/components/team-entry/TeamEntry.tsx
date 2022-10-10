import * as Styled from "./TeamEntry.styled";
import avatar from "../../../public/images/amijs.png";

interface TeamEntryProps {
  client: string;
  firstName: string;
  id?: number;
  lastName: string;
  role: string;
  startDate: string;
}

export const TeamEntry = ({ client, firstName, lastName, role, startDate }: TeamEntryProps) => {
  return (
    <>
      <Styled.Container>
        <Styled.MemberWrapper>
          <Styled.Avatar src={avatar.src} alt="Team member" />
          <Styled.NameWrapper>
            <Styled.Label>
              {firstName} {lastName}
            </Styled.Label>
            <Styled.Text>{role}</Styled.Text>
          </Styled.NameWrapper>
        </Styled.MemberWrapper>
        <Styled.Divider />
        <Styled.ClientWrapper>
          <Styled.ClientName>
            <Styled.Label>{client}</Styled.Label>
            <Styled.Text>Client</Styled.Text>
          </Styled.ClientName>
          <Styled.ClientDate>
            <Styled.Label>{startDate}</Styled.Label>
            <Styled.Text>Starting date</Styled.Text>
          </Styled.ClientDate>
        </Styled.ClientWrapper>
      </Styled.Container>
    </>
  );
};
