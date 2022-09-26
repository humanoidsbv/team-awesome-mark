import { createPortal } from "react-dom";
import * as Styled from "./Modal.styled";
import * as Types from "../../types/types";
import CloseIcon from "../../../public/images/close-black.svg";

export const Modal = ({ children, title, isActive, onClose }: Types.ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.CloseIcon>
              <CloseIcon onClick={onClose} />
            </Styled.CloseIcon>
            {title}
            {children}
            <Styled.Wrapper></Styled.Wrapper>
          </Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
