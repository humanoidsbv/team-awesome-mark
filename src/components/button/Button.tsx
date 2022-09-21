import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/images/plus.svg";

interface ButtonProps {
  label: string;
  plusIcon: boolean;
  variant?: "primary" | "secondary";
}

export const Button = ({ plusIcon, label, variant = "primary" }: ButtonProps) => (
  <Styled.Button variant={variant}>
    {plusIcon && <PlusIcon />}
    {label}
  </Styled.Button>
);
