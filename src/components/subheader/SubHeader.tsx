import * as Styled from "./SubHeader.styled";
import { Button } from "../button";

interface SubHeaderProps {
  entries: number;
  label: string;
}

export const SubHeader = ({ label, entries }: SubHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button plusIcon variant="primary" label="New Time Entry" />
    </Styled.Container>
  );
};
