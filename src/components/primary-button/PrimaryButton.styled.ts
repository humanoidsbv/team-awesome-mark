import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.buttonPrimary};
  border-radius: 4px;
  color: white;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 0px 20px 0px 20px;
  width: 100%;
  gap: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.buttonPrimaryActive};
  }
`;
