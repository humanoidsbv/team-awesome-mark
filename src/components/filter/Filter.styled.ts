import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.fontColorLight};
`;

export const Select = styled.select`
  padding: 5px 10px;
  margin: 10px;
  border: 1px solid #e6eaee;
  border-radius: 4px;
  color: ${({ theme }) => theme.fontColorLight};

  &:hover {
    border: 1px solid #7f8fa4;
    color: ${({ theme }) => theme.fontColor};
  }
`;
