import React, { useState } from "react";
import * as Styled from "./SubHeader.styled";
import { PrimaryButton } from "../primary-button";

export const SubHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Title>Timesheets</Styled.Title>
        <Styled.Counter>12 Entries</Styled.Counter>
        <PrimaryButton />
      </Styled.Container>
    </>
  );
};
