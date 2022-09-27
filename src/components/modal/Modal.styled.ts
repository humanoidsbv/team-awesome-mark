import styled from "styled-components";

export const IconWrapper = styled.div`
  align-self: flex-end;
  cursor: pointer;
  position: absolute;
`;

export const Modal = styled.div`
  align-content: space-between;
  background: white;
  border-radius: 4px;
  color: ${({ theme }) => theme.fontColorLight};
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  height: 100vh;
  padding: 20px;
  width: 100vh;

  @media (${({ theme }) => theme.tablet}) {
    font-size: 24px;
    font-weight: 400;
    max-height: 436px;
    max-width: 560px;
    padding: 30px;
  }
`;

export const ModalBackdrop = styled.div`
  align-items: center;
  background: rgba(75, 84, 100, 0.8);
  bottom: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
`;
