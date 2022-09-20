import styled from "styled-components";

export const Button = styled.button`
  margin-left: 25px;
`;

export const Client = styled.p`
  font-size: 18px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  margin: 0 10px;
  border-left: 4px solid #4f88ef;
  outline: ${({ theme }) => theme.borderPrimary};
  border-radius: 4px;
  padding: 20px;
`;

export const Time = styled.p`
  font-size: 18px;
  margin-left: auto;
`;

export const TimeContainer = styled.div`
  text-align: right;
  margin-left: auto;
`;

export const TotalTime = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colorGrey5};
`;
