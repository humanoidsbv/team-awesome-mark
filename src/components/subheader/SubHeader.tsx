import { Button } from "../button";
import * as Styled from "./SubHeader.styled";
import * as Types from "../../types/types";

export const SubHeader = ({ label, entries, handleModal }: Types.SubHeader) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Styled.ButtonWrapper>
        <Button label="New Time Entry" onClick={handleModal} hasAddIcon variant="primary" />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};
