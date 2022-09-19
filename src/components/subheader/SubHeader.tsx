import React, { useState } from "react";
import * as Styled from "./SubHeader.styled";
import { Button } from "../button";

interface SubHeaderProps {
  label: string;
  amount: number;
}

export const SubHeader = ({ label = "Timesheets", amount = 0 }: SubHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{label}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Counter>{amount} Entries</Styled.Counter>
      <Button plusIcon label="New Time Entry" />
    </Styled.Container>
  );
};
