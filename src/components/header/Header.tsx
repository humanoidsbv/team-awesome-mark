import Link from "next/link";
import React, { useState } from "react";

import * as Styled from "./Header.styled";
import CloseIcon from "../../../public/images/close.svg";
import MenuIcon from "../../../public/images/menu.svg";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Container isActive={isActive}>
      <Styled.Logo>team awesome</Styled.Logo>
      <Styled.Menu isActive={!isActive}>
        <Link href="/">
          <Styled.MenuItems>Timesheets</Styled.MenuItems>
        </Link>
        <Link href="/team-members">
          <Styled.MenuItems>Team members</Styled.MenuItems>
        </Link>
        <Styled.MenuItems>Projects</Styled.MenuItems>
        <Styled.MenuItems>Clients</Styled.MenuItems>
        <Styled.MenuItems>Documents</Styled.MenuItems>
      </Styled.Menu>
      <Styled.Toggle onClick={handleClick}>
        {!isActive ? <MenuIcon /> : <CloseIcon />}
      </Styled.Toggle>
    </Styled.Container>
  );
};
