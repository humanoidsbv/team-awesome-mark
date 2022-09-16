import React, { useState } from "react";
import * as Styled from "./SubHeader.styled";
import { Button } from "../button";

export const SubHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Title>Timesheets</Styled.Title>
        <Styled.Divider>|</Styled.Divider>
        <Styled.Counter>12 Entries</Styled.Counter>
        <Button label="New Time Entry" />
      </Styled.Container>
    </>
  );
};
