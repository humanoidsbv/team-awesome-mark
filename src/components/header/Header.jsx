import React, { useState } from 'react';
import * as Styled from './Header.styled';

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
    <Styled.Container isActive={isActive}>
        <Styled.Logo>team awesome</Styled.Logo>
            <Styled.Menu isActive={isActive}>
                <Styled.MenuItems>Timesheets</Styled.MenuItems>
                <Styled.MenuItems>Team members</Styled.MenuItems>
                <Styled.MenuItems>Projects</Styled.MenuItems>
                <Styled.MenuItems>Clients</Styled.MenuItems>
                <Styled.MenuItems>Documents</Styled.MenuItems>
            </Styled.Menu>
        <Styled.Toggle onClick={handleClick}>x</Styled.Toggle>
    </Styled.Container>
    );
}
