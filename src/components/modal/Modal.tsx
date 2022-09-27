import { createPortal } from "react-dom";
import * as Styled from "./Modal.styled";
import * as Types from "../../types/types";
import CloseIconModal from "../../../public/images/close-icon-modal.svg";

export const Modal = ({ children, title, isActive, onClose }: Types.ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.CloseIcon>
              <CloseIconModal onClick={onClose} />
            </Styled.CloseIcon>
            {title}
            {children}
          </Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
