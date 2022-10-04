import { MouseEventHandler } from "react";

import * as Styled from "./Button.styled";
import AddIcon from "../../../public/images/plus.svg";

interface Button {
  hasAddIcon?: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
}

export const Button = ({ hasAddIcon, label, onClick, variant = "primary" }: Button) => (
  <Styled.Button variant={variant} onClick={onClick}>
    {hasAddIcon && <AddIcon />}
    {label}
  </Styled.Button>
);
