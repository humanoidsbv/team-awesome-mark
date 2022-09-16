import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/images/plus.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ onClick, label, variant = "primary" }: ButtonProps) => (
  <Styled.Button onClick={onClick} variant={variant}>
    <PlusIcon />
    {label}
  </Styled.Button>
);
