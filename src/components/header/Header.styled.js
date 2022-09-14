import styled, {css} from 'styled-components';

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #4F88EF;
    height: ${props => props.isActive ? "100vh" : "70px"};
    width: 100vw;

    @media screen and (min-width: 1024px) {
        font-size: 60px;
    }
`;

export const Logo = styled.a`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 15px;
    margin-top: 25px;
`;

export const Menu = styled.ul`
    text-align: center;
    list-style-type: none;
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
    position: fixed;
    right:0;
    top: 0;
    margin-right: 15px;
    margin-top: 25px;
`;