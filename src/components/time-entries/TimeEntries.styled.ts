import styled from "styled-components";

export const Container = styled.div``;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-size: 18px;
`;

export const Weekday = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-size: 18px;
`;
