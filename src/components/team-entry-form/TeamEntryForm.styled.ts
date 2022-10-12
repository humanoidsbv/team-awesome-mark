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

export const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.backgroundGrey3};
  padding: 13px 13px 13px 15px;

  ::placeholder {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.fontColorLight};
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const LastName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 0;
  width: 50%;
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Span = styled.span`
  color: #ffa2ad;
  font-size: 12px;
  margin-top: 5px;
`;
