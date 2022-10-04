import { createPortal } from "react-dom";

import * as Styled from "./Modal.styled";
import * as Types from "../../types/types";
import CloseIcon from "../../../public/images/close-icon.svg";

export const Modal = ({ children, title, isActive, onClose }: Types.Modal) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.IconWrapper>
              <CloseIcon onClick={onClose} />
            </Styled.IconWrapper>
            {title}
            {children}
          </Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
