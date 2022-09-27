import * as Styled from "./Button.styled";
import AddIcon from "../../../public/images/plus.svg";
import * as Types from "../../types/types";

export const Button = ({ hasAddIcon, label, variant = "primary", onClick }: Types.ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick}>
    {hasAddIcon && <AddIcon />}
    {label}
  </Styled.Button>
);
