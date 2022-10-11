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

export const Sort = styled.button`
  color: ${({ theme }) => theme.fontColorLight};
  padding: 20px 10px;

  &:hover {
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  font-size: 18px;
`;

export const Weekday = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  font-size: 18px;
`;
