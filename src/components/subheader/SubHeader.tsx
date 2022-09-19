import * as Styled from "./SubHeader.styled";
import { Button } from "../button";

interface SubHeaderProps {
  label: string;
  entries: number;
}

export const SubHeader = ({ label = "Timesheets", entries = 0 }: SubHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button plusIcon label="New Time Entry" />
    </Styled.Container>
  );
};
