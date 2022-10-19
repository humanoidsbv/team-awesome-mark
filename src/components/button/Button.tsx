import { MouseEventHandler } from "react";

import * as Styled from "./Button.styled";
import AddIcon from "../../../public/images/plus.svg";

interface ButtonProps {
  buttonText?: string;
  hasAddIcon?: boolean;
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({
  buttonText,
  hasAddIcon,
  label,
  onClick,
  variant = "primary",
  disabled,
}: ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick} disabled={disabled}>
    {hasAddIcon && <AddIcon />}
    {label} {buttonText}
  </Styled.Button>
);
