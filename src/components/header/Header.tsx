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
            <Styled.Item>Timesheets</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/team-members" passHref>
            <Styled.Item>Team members</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item>Projects</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item>Clients</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item>Documents</Styled.Item>
          </Link>
        </Styled.MenuItems>
      </Styled.Menu>
      <Styled.Toggle onClick={handleClick}>
        {!isActive ? <MenuIcon /> : <CloseIcon />}
      </Styled.Toggle>
    </Styled.Container>
  );
};
