import * as Styled from "./Button.styled";
import AddIcon from "../../../public/images/plus.svg";
import * as Types from "../../types/types";

export const Button = ({
  hasAddIcon,
  label,
  variant = "primary",
  handleClick,
}: Types.ButtonProps) => (
  <Styled.Button variant={variant} onClick={handleClick}>
    {hasAddIcon && <AddIcon />}
    {label}
  </Styled.Button>
);
