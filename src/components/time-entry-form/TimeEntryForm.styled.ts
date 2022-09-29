import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.fontColorLight};
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.backgroundGrey3};
  margin-bottom: 20px;
  padding: 13px 13px 13px 15px;
`;

export const InputSmall = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.backgroundGrey3};
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 13px 13px 13px 15px;
  width: fit-content;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeWrapper = styled.div`
  display: initial;
`;

export const LabelSmall = styled.label`
  color: ${({ theme }) => theme.fontColorLight};
  margin-right: 10px;
  width: fit-content;
`;

export const TotalWrapper = styled.div`
  color: ${({ theme }) => theme.fontColorLight};
  display: inline-flex;
`;

export const TotalTime = styled.div`
  color: ${({ theme }) => theme.fontColorLight};
`;

export const TotalTitle = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  margin-right: 10px;
`;
