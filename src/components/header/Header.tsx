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
        team awesome
      </Link>
      <Styled.Menu isActive={!isActive}>
        <Styled.MenuItems>
          <Link href="/" onClick={handleClick} passHref>
            Timesheets
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/team-members" data-cy="team-members-link" onClick={handleClick} passHref>
            Team members
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" onClick={handleClick} passHref>
            Projects
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" onClick={handleClick} passHref>
            Clients
          </Link>
        </Styled.MenuItems>
        <Styled.MenuItems>
          <Link href="/" onClick={handleClick} passHref>
            Documents
          </Link>
        </Styled.MenuItems>
      </Styled.Menu>
      <Styled.Toggle onClick={handleClick}>
        {!isActive ? (
          <MenuIcon data-testid="hamburger-icon" data-cy="hamburger-icon" />
        ) : (
          <CloseIcon data-testid="close-icon" />
        )}
      </Styled.Toggle>
    </Styled.Container>
  );
};
