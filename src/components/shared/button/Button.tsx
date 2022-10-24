import * as Styled from "./Button.styled";
import AddIcon from "../../../../public/images/plus.svg";
import * as Types from "../../../types/types";

export const Button = ({
  hasAddIcon,
  label,
  onClick,
  variant = "primary",
  disabled,
  buttonText,
}: Types.ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick} disabled={disabled}>
    {hasAddIcon && <AddIcon />}
    {label} {buttonText}
  </Styled.Button>
);
