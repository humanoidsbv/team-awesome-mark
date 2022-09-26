import styled from "styled-components";

export const CloseIcon = styled.div`
  float: right;
  cursor: pointer;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 4px;
  color: ${({ theme }) => theme.colorGrey5};
  font-size: 18px;
  font-weight: 600;
  height: 100vh;
  padding: 20px;
  width: 100vh;

  @media (${({ theme }) => theme.tablet}) {
    font-size: 24px;
    font-weight: 400;
    margin: 20%;
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
