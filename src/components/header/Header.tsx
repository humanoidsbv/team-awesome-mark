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
      <Link href="/" passHref>
        <Styled.Logo>team awesome</Styled.Logo>
      </Link>
      <Styled.Menu isActive={!isActive}>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item onClick={handleClick}>Timesheets</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/team-members" passHref>
            <Styled.Item onClick={handleClick}>Team members</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item onClick={handleClick}>Projects</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item onClick={handleClick}>Clients</Styled.Item>
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" passHref>
            <Styled.Item onClick={handleClick}>Documents</Styled.Item>
          </Link>
        </Styled.MenuItems>
      </Styled.Menu>
      <Styled.Toggle onClick={handleClick}>
        {!isActive ? <MenuIcon data-testid="hamburger" /> : <CloseIcon data-testid="close" />}
      </Styled.Toggle>
    </Styled.Container>
  );
};
