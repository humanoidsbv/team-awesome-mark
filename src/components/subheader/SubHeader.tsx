import * as Styled from "./SubHeader.styled";
import { Button } from "../button";

interface SubHeaderProps {
  label: string;
  entries: number;
  onClick: boolean;
}

export const SubHeader = ({ label = "Timesheets", entries = 0, onClick }: SubHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button plusIcon label="New Time Entry" onClick={onClick} />
    </Styled.Container>
  );
};
