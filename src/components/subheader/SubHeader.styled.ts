import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundGrey3};
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 118px;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;

  @media (${({ theme }) => theme.tablet}) {
    flex-wrap: nowrap;
    height: 70px;
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  margin: 0 20px;
`;

export const Divider = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-size: 25px;
  display: none;

  @media (${({ theme }) => theme.tablet}) {
    display: block;
  }
`;

export const Title = styled.h2`
  color: black;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  margin: 0px 20px;
`;
