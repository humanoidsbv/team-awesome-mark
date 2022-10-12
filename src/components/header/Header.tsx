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
        <Styled.MenuItems>
          <Link href="/" passHref>
            <a>Timesheets</a>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/team-members" passHref>
            <a>Team members</a>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <a>Projects</a>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <a>Clients</a>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <a>Documents</a>
          </Link>
        </Styled.MenuItems>
      </Styled.Menu>
      <Styled.Toggle onClick={handleClick}>
        {!isActive ? <MenuIcon /> : <CloseIcon />}
      </Styled.Toggle>
    </Styled.Container>
  );
};
