import styled, { css } from "styled-components";

type ButtonProps = {
  primary: boolean;
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 4px;
  color: white;
  display: flex;
  gap: 15px;
  height: 40px;
  justify-content: center;
  margin: 0px 20px 0px 20px;
  width: 100%;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.buttonPrimary};
      &:hover {
        background-color: ${({ theme }) => theme.buttonPrimaryHover};
      }
      &:active {
        background-color: ${({ theme }) => theme.buttonPrimaryActive};
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.buttonSecondary};
      &:hover {
        background-color: ${({ theme }) => theme.buttonSecondaryHover};
      }
      &:active {
        background-color: ${({ theme }) => theme.buttonSecondaryActive};
      }
      border: 1px solid #e6eaee;
    `}

  @media (${({ theme }) => theme.tablet}) {
    max-width: 190px;
    margin-left: auto;
  }
`;
