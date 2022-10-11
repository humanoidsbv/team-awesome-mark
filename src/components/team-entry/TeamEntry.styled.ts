import styled from "styled-components";

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;

export const ClientWrapper = styled.div`
  font-size: 18px;
  margin-top: 19px;

  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;

export const ClientDate = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const ClientName = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 40px;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-left: 4px solid #4f88ef;
  border-radius: 4px;
  display: flex wrap;
  justify-content: space-between;
  margin: 0 10px;
  outline: ${({ theme }) => theme.borderPrimary};
  padding: 20px;

  @media (${({ theme }) => theme.tablet}) {
    min-width: 655px;
    display: flex;
  }

  @media (${({ theme }) => theme.desktop}) {
    min-width: 1080px;
  }
`;

export const Divider = styled.hr`
  background-color: #e6eaee;
  height: 1px;
  border-width: 0;
  margin: 0 -20px;

  @media (${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export const Label = styled.p`
  font-size: 18px;
`;

export const MemberWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 19px;

  @media (${({ theme }) => theme.tablet}) {
    margin-bottom: 0;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  font-size: 14px;
`;
