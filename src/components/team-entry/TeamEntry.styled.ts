import styled from "styled-components";

export const Client = styled.p`
  font-size: 18px;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-left: 4px solid #4f88ef;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  outline: ${({ theme }) => theme.borderPrimary};
  padding: 20px;

  @media (${({ theme }) => theme.tablet}) {
    min-width: 655px;
  }

  @media (${({ theme }) => theme.desktop}) {
    min-width: 1080px;
  }
`;
