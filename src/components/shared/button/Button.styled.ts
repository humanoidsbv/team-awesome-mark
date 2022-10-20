import styled, { css } from "styled-components";

type ButtonProps = {
  variant: string;
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 4px;
  color: white;
  display: flex;
  gap: 15px;
  height: 40px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  border: none;

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
      &:disabled {
        background-color: grey;
        border: 1px solid #e6eaee;
        color: lightgrey;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.buttonSecondary};
      color: ${({ theme }) => theme.fontColor};

      &:hover {
        background-color: ${({ theme }) => theme.buttonSecondaryHover};
      }
      &:active {
        background-color: ${({ theme }) => theme.buttonSecondaryActive};
      }
      border: 1px solid #e6eaee;
    `}

  @media (${({ theme }) => theme.tablet}) {
    margin-left: auto;
    margin-top: 0;
  }
`;
