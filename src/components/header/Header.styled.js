import styled, {css} from 'styled-components';

export const Container = styled.nav`
    background: #4F88EF;
    height: ${props => props.isActive ? "fill-available" : "70px"};
    position: fixed;
    width: 100vw;

    @media screen and (min-width: 1024px) {
        font-size: 60px;
    }
`;

export const Logo = styled.a`
    color: white;

`;

export const Menu = styled.ol`
    display: grid;
    gap: 10px;
    text-align: center;
    align-self: center;
    height: 100vh;
    align-content: space-evenly;
`;

export const MenuItems = styled.li`
    cursor: pointer;
    text-decoration: none;
    font-size: 3em;
    color: white;
    &:hover {
        text-decoration: underline;
    }
`;

export const Toggle = styled.button`
    color: white;
    font-size: 20px;
    background: none;
    border: none;
    display: inline-block;
    float: right;
`;