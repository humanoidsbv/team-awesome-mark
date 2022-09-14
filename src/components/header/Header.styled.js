import styled, {css} from 'styled-components';

export const Container = styled.nav`
    display: flex;
    background: #4F88EF;
    height: 70px;
    width: 100vw;
    align-items: center;

    @media screen and (min-width: 1024px) {
        font-size: 30px;
        align-items: baseline;
    }
`;

export const Logo = styled.a`
    color: white;
    padding-left: 20px;

    @media screen and (min-width: 1024px) {
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
    transition: 0.3s;

    @media screen and (min-width: 1024px) {
        left: 0;
        display: flex;
        flex-direction: row;
        height: 70px;
        font-size: 10px;
        width: auto;
        position: static;
        align-items: center;
        transition: 0;
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
`;

export const Toggle = styled.button`
    color: white;
    font-size: 10px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
    padding-right: 20px;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;