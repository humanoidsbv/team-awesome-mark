import styled from "styled-components";

export const CloseIcon = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 4px;
  height: 100vh;
  width: 100vh;
  padding: 30px;

  @media (${({ theme }) => theme.tablet}) {
    margin: 20%;
    max-height: 436px;
    max-width: 560px;
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
