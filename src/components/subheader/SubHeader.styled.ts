import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;

  @media (${({ theme }) => theme.tablet}) {
    margin-left: auto;
    width: 198px;
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundGrey3};
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontPrimary};
  justify-content: space-between;
  padding: 20px;
  width: 100%;

  @media (${({ theme }) => theme.tablet}) {
    flex-wrap: nowrap;
    padding: 15px 30px;
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;

export const Divider = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  display: none;
  font-size: 25px;
  padding: 0 20px;

  @media (${({ theme }) => theme.tablet}) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;
