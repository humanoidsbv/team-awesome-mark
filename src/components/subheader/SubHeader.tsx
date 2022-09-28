import * as Styled from "./SubHeader.styled";
import { Button } from "../button";
import * as Types from "../../types/types";

export const SubHeader = ({ label, entries, handleModal }: Types.SubHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button label="New Time Entry" onClick={handleModal} hasAddIcon variant="primary" />
    </Styled.Container>
  );
};
