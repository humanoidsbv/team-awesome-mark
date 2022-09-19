import React, { useState } from "react";
import * as Styled from "./SubHeader.styled";
import { Button } from "../button";

interface SubHeaderProps {
  label: string;
<<<<<<< HEAD
  amount: number;
}

export const SubHeader = ({ label = "Timesheets", amount = 0 }: SubHeaderProps) => {
=======
  entries: number;
  onClick: boolean;
}

export const SubHeader = ({ label = "Timesheets", entries = 0, onClick }: SubHeaderProps) => {
>>>>>>> 512d40d (Save for later)
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
<<<<<<< HEAD
      <Styled.Counter>{amount} Entries</Styled.Counter>
      <Button plusIcon label="New Time Entry" />
=======
      <Styled.Counter>{entries} Entries</Styled.Counter>
      <Button plusIcon label="New Time Entry" onClick={onClick} />
>>>>>>> 512d40d (Save for later)
    </Styled.Container>
  );
};
