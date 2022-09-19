import styled from "styled-components";

type HeaderProps = {
  isActive: boolean;
};

export const Container = styled.nav`
  align-items: center;
  background: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 70px;
  width: 100vw;
`;

export const Logo = styled.a`
  color: white;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 26px;
  font-weight: light;
  padding: 0 30px;
  white-space: nowrap;
`;

export const Menu = styled.ul<HeaderProps>`
  background: ${({ theme }) => theme.backgroundSecondary};
  display: ${(props) => (props.isActive ? "none" : "block")};
  flex-direction: column;
  height: calc(100vh - 70px);
  list-style-type: none;
  position: fixed;
  text-align: center;
  top: 70px;
  width: 100vw;

  @media (${({ theme }) => theme.tablet}) {
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
  font-size: 24px;
  padding: 28px 20px 28px 20px;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }

  @media (${({ theme }) => theme.tablet}) {
    font-size: 14px;
  }
`;

export const Toggle = styled.button<HeaderProps>`
  color: white;
  cursor: pointer;
  display: ${(props) => (props.isActive ? "none" : "block")};
  margin-left: auto;
  padding-right: 30px;

  @media (${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
