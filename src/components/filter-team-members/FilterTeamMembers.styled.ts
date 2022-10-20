import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
`;

export const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #e6eaee;
  color: ${({ theme }) => theme.fontColorLight};
  margin: 10px;
  padding: 5px 10px;

  &:hover {
    border: 1px solid #7f8fa4;
    color: ${({ theme }) => theme.fontColor};
  }
`;
