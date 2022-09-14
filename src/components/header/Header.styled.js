import styled, {css} from 'styled-components';

export const Container = styled.nav`
    display: flex;
    background: #4F88EF;
    height: 70px;
    width: 100vw;
    align-items: center;
    font-family: 'Proxima Nova';

    @media screen and (min-width: 844px) {
        font-size: 30px;
        align-items: baseline;
    }
`;

export const Logo = styled.a`
    color: white;
    padding-left: 20px;
    cursor: pointer;
    font-family: 'Bello-Script';
    font-size: 35px;
    font-weight: light;

    @media screen and (min-width: 844px) {
        align-items: center;
    }
`;

export const Menu = styled.ul`
    text-align: center;
    list-style-type: none;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 70px;
    padding: 23%;
    background: #4F88EF;
    height: calc(100vh - 70px);
    width: 100vw;
    left: ${(props) => props => (props.isActive ? "0" : "-100%")};

    @media screen and (min-width: 844px) {
        left: 0;
        display: flex;
        flex-direction: row;
        height: 70px;
        font-size: 10px;
        width: auto;
        position: static;
        align-items: center;
        padding: 0;
    }
`;

export const MenuItems = styled.li`
    cursor: pointer;
    font-size: 2em;
    color: white;
    &:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 844px) {
        padding: 1.6em;
        font-size: 1.6em;
    }
`;

export const Toggle = styled.button`
    color: white;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
    padding-right: 20px;

    @media screen and (min-width: 844px) {
        display: none;
    }
`;