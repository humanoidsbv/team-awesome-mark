import * as Styled from "./Button.styled";
import AddIcon from "../../../public/images/plus.svg";

interface ButtonProps {
  hasAddIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  variant?: "primary" | "secondary";
}

export const Button = ({ hasAddIcon, label, variant = "primary", onClick }: ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick}>
    {hasAddIcon && <AddIcon />}
    {label}
  </Styled.Button>
);
