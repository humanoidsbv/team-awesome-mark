import styled from "styled-components";

export const Container = styled.div`
  @media (${({ theme }) => theme.tablet}) {
    display: grid;
    justify-content: center;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 10px 20px 10px;
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-size: 18px;
`;

export const Weekday = styled.p`
  color: ${({ theme }) => theme.colorGrey5};
  font-size: 18px;
`;
