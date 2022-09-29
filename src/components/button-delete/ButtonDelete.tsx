import { MouseEventHandler } from "react";

import * as Styled from "./ButtonDelete.styled";
import BinIcon from "../../../public/images/bin.svg";

interface ButtonDeleteProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonDelete = ({ onClick }: ButtonDeleteProps) => {
  return (
    <Styled.Button onClick={onClick}>
      <BinIcon />
    </Styled.Button>
  );
};
