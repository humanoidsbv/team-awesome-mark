import * as Styled from "./SubHeader.styled";
import { Button } from "../button";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import * as Types from "../../types/types";

export const SubHeader = ({ label, entries }: Types.SubHeaderProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button
        label="New Time Entry"
        onClick={() => setIsModalActive(true)}
        hasAddIcon
        variant="primary"
      ></Button>
      <Modal
        isActive={isModalActive}
        onClose={() => setIsModalActive(false)}
        title={"New Time Entry"}
      />
    </Styled.Container>
  );
};
