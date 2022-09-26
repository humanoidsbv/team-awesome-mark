import { createPortal } from "react-dom";
import { useState } from "react";
import * as Styled from "./TimeEntryModal.styled";
import * as Types from "../../types/types";

// const [isActive, setIsActive] = useState(false);
// const onClick = () => {
//   setIsActive(!isActive);
// };

export const TimeEntryModal = ({ children, isActive, onClose }: Types.ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>{children}</Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
