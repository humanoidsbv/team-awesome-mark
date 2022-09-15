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
  padding: 20px 0px 20px 0px;
  width: 100%;
`;

export const Counter = styled.p`
  color: grey;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  margin: 0px 20px 0px 20px;
`;

export const Title = styled.h2`
  color: black;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  margin: 0px 20px 0px 20px;
`;
