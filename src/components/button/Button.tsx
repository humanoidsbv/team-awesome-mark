import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/images/plus.svg";

interface ButtonProps {
  label: string;
  onClick: boolean;
  variant?: "primary" | "secondary";
  plusIcon: boolean;
}

export const Button = ({ onClick, plusIcon, label, variant = "primary" }: ButtonProps) => (
  <Styled.Button onClick={onClick} variant={variant}>
    {plusIcon ? <PlusIcon /> : null}
    {label}
  </Styled.Button>
);
