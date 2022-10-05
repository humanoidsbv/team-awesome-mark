import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (${({ theme }) => theme.tablet}) {
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 20px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.backgroundGrey3};
  padding: 13px 13px 13px 15px;

  ::placeholder {
    opacity: 0.5;
  }
`;

export const InputSmall = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.backgroundGrey3};
  margin-right: 20px;
  padding: 13px 13px 13px 15px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.fontColorLight};
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Span = styled.span`
  color: #ffa2ad;
  font-size: 12px;
  margin-top: 5px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalTime = styled.div`
  color: ${({ theme }) => theme.fontColorLight};
  font-size: 24px;
  margin-top: 18px;
`;

export const TotalWrapper = styled.div`
  color: ${({ theme }) => theme.fontColorLight};
  margin: 20px 0 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
`;
