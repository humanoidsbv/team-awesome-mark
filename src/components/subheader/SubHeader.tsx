import { Button } from "../shared/button";
import * as Styled from "./SubHeader.styled";
import * as Types from "../../types/types";

export const SubHeader = ({ label, entries, entriesLabel, handleModal }: Types.SubHeader) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>
        {entries} {entriesLabel}
      </Styled.Counter>
      <Styled.ButtonWrapper>
        <Button label="Add new entry" onClick={handleModal} hasAddIcon variant="primary" />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};
