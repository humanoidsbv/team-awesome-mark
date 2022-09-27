import * as Styled from "./SubHeader.styled";
import { Button } from "../button";
import { useState } from "react";
import * as Types from "../../types/types";
import { Modal } from "../modal/Modal";

export const SubHeader = ({
  label,
  entries,
  isModalActive,
  setIsModalActive,
}: Types.SubHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button
        label="New Time Entry"
        onClick={() => setIsModalActive((isModalActive: any) => !isModalActive)}
        hasAddIcon
        variant="primary"
      />
      <Modal
        isActive={isModalActive}
        onClose={() => setIsModalActive(false)}
        title={"New Time Entry"}
      ></Modal>
    </Styled.Container>
  );
};
