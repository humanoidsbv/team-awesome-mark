import { createPortal } from "react-dom";
import { useState } from "react";
import * as Styled from "./TimeEntryModal.styled";
import * as Types from "../../types/types";
import CloseIcon from "../../../public/images/close-black.svg";

// const [isActive, setIsActive] = useState(false);
// const onClose = () => setIsActive(!isActive);
export const TimeEntryModal = ({ children, isActive, onClose }: Types.ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.CloseIcon>
              <CloseIcon />
            </Styled.CloseIcon>
            {children}
          </Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
