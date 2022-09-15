import styled from 'styled-components';

export const Container = styled.nav`
    align-items: center;
    background: ${({theme}) => theme.backgroundSecondary};
    display: flex;
    font-family: ${({theme}) => theme.fontPrimary};
    height: 70px;
    width: 100vw;

    @media screen and (min-width: 867px) {
        align-items: baseline;
        font-size: 30px;
    }
`;

export const Logo = styled.a`
    color: white;
    cursor: pointer;
    font-family: ${({theme}) => theme.fontSecondary};
    font-size: 35px;
    font-weight: light;
    margin-left: 0.5em;
    margin-right: 1.5em;

    @media screen and (min-width: 867px) {
        align-items: center;
    }
`;

export const Menu = styled.ul`
    background: ${({theme}) => theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    left: ${(props) => props => (props.isActive ? "0" : "-100%")};
    list-style-type: none;
    padding-bottom: 30vh;
    padding-top: 10vh;
    position: fixed;
    text-align: center;
    top: 70px;
    width: 100vw;

    @media screen and (min-width: 867px) {
        align-items: center;
        display: flex;
        flex-direction: row;
        font-size: 10px;
        height: 70px;
        left: 0;
        padding: 0;
        position: static;
        width: auto;
    }
`;

export const MenuItems = styled.li`
    color: white;
    cursor: pointer;
    font-size: 2em;
    margin: 1em;
    &:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 867px) {
        font-size: 1.6em;
        margin: 1.5em;
    }
`;

export const Toggle = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: ${(props) => props => (props.isActive ? "none" : "block")};
    font-size: 20px;
    margin-left: auto;
    padding-right: 20px;

    @media screen and (min-width: 867px) {
        display: none;
    }
`;
