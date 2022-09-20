import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundGrey3};
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontPrimary};
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 20px;
  width: 100%;

  @media (${({ theme }) => theme.tablet}) {
    flex-wrap: nowrap;
    padding: 15px 30px;
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;

export const Divider = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
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
