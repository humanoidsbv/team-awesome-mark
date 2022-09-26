import * as Styled from "./SubHeader.styled";
import { Button } from "../button";
import { useState } from "react";
import { TimeEntryModal } from "../time-entry-modal/TimeEntryModal";
import * as Types from "../../types/types";

export const SubHeader = ({ label, entries }: Types.SubHeaderProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button
        plusIcon
        variant="primary"
        label="New Time Entry"
        onClick={() => setIsModalActive(true)}
      ></Button>
      <TimeEntryModal isActive={isModalActive} onClose={() => setIsModalActive(false)} />
    </Styled.Container>
  );
};
