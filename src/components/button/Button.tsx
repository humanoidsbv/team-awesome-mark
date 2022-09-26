import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/images/plus.svg";
import * as Types from "../../types/types";

export const Button = ({ plusIcon, label, variant = "primary", onClick }: Types.ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick}>
    {plusIcon && <PlusIcon />}
    {label}
  </Styled.Button>
);
