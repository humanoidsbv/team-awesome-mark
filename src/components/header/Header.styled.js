import styled, {css} from 'styled-components';

export const Container = styled.nav`
    background: skyblue;
    height: 70px;
    ${props => props.isActive && `css
    height: fill-available;
    background: skyblue;`}
    position: fixed;
    width: 100vw;

    @media screen and (min-width: 1024px) {
        font-size: 60px;
    }
`;

export const Logo = styled.a`
    display: block;
    color: white;
`;

export const Menu = styled.ol`
    display: inline-block
`;

export const MenuItems = styled.li`
    text-decoration: none;
`;

export const Toggle = styled.button`
    align-items: center;
    background: transparant;
    border: 0
    display: flex;
    justify-content: center;
`;


// /* Header & logo */
// .navbar {
//     background-color: #4F88EF;
//     height: 70px;
//     display: flex;
//     justify-content: center;
// }

// .logo {
//     color: white;
//     font-family: 'Bello Script', Arial, Helvetica, sans-serif;
//     white-space: nowrap;
//     font-size: 25px;
//     text-align: left;
// }

// /* Menu mobile */
// .menu {
//     background-color: #4F88EF;
//     position: absolute;
//     width: 100vw;
//     height: 100vh;
// }

// .menu__list {
//     display: flex;
//     flex-direction: column;
// }

// .menu__elements {
//     background: none;
//     margin-bottom: 20%;
//     font-family: 'Proxima Nova';
//     border: none;
//     color: white;
//     cursor: pointer;
// }

// .menu__elements:hover {
//     text-decoration: underline;
// }

// .menu__open {
//     height: 12px;
//     margin-left: auto;
//     margin-right: 28px;
//     cursor: pointer;
// }

// .hidden {
//     display: none;
// }

// .hamburger {
//     margin-left: auto;
// }

// /* Menu desktop */
// @media screen and (min-width: 884px) {
// .menu {
//     width: 100vw;
//     height: 70px;
//     display: flex;
//     align-items: baseline;
// }

// .menu__list {
//     flex-direction: row;
// }

// .menu__elements {
//     margin-bottom: 0;
// }

// .menu__open {
//     display: none;
// }
// }